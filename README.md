## About
This repo showcases how to generate fully typed queries for [The Graph](https://thegraph.com/) using [react-query](https://tanstack.com/query/v3/) and [graphql codegen](https://the-guild.dev/graphql/codegen).
The subgraph used for this project is from [Opensea](https://thegraph.com/hosted-service/subgraph/itsjerryokolo/opensea).

## Steps

1. Install dependencies.
```
npm i graphql @tanstack/react-query
npm i -D @graphql-codegen/cli @graphql-codegen/typescript-resolvers @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-query @graphql-codegen/named-operations-object
```

2. Set up `react-query` as specified in the [docs](https://tanstack.com/query/v4/docs/react/quick-start).

3. Initialize the code generator.
```
npx graphql-code-generator init
```
```
? What type of application are you building? Application built with React
? Where is your schema?: (path or url) https://api.thegraph.com/subgraphs/name/itsjerryokolo/opensea
? Where are your operations and fragments?: src/**/*.graphql
? Where to write the output: src/gql/
? Do you want to generate an introspection file? No
? How to name the config file? codegen.ts
? What script in package.json should run the codegen? codegen
```

4. Inside `codegen.ts`, replace the `generates` object with:
```
generates: {
    'src/gql/generated/index.ts': {
        plugins: [
            'typescript',
            'typescript-resolvers',
            'typescript-operations',
            'typescript-react-query',
            'named-operations-object',
        ],
        config: {
            fetcher: '../fetcher#fetchData'
        }
    },
},
```

5. Add `gql/fetcher.ts`, a custom fetcher that handles errors from The Graph and formats the query to prevent errors.

```
export const fetchData = <TData, TVariables>(
    query: string,
    variables?: TVariables,
    options?: RequestInit['headers']
): (() => Promise<TData>) => {
    return async () => {
        /**
         * Remove the first and last `\n    ` from the query string. Not doing
         * this will cause the query to fail.
         */
        const finalQuery =
            query.startsWith('\n    ') && query.endsWith('\n    ') ? query.slice(5, -5) : query;

        const res = await fetch(config.subgraphUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...options,
            },
            body: JSON.stringify({
                query: finalQuery,
                variables,
            }),
        });

        const json = await res.json();

        if (json.errors) {
            const { message } = json.errors[0] || {};
            const updatedMessage = message || 'Something went wrong. Please try again.';
            throw new Error(updatedMessage);
        }

        return json.data;
    };
};
```

6. Add `gql/queries/sales.graphql`.

```
query GetSales(
    $skip: Int = 0
    $first: Int = 100
    $orderBy: Sale_orderBy
    $orderDirection: OrderDirection
    $where: Sale_filter
    $block: Block_height
    $subgraphError: _SubgraphErrorPolicy_! = deny
) {
    sales(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
        block: $block
        subgraphError: $subgraphError
    ) {
        txHash
        buyer {
            id
        }
        seller {
            id
        }
        price
    }
}

```

The argument types for `GetSales` were copied from https://thegraph.com/hosted-service/subgraph/itsjerryokolo/opensea -> `Playground` -> `Show documentation explorer` -> `query: Query` -> Scroll down to `sales`.

7. Run the `codegen` command.

```
npm run codegen
```

You should see the output inside `gql/generated/index.ts`

## Usage

```
const { data, isLoading } = useGetSalesQuery();
```

## Optional: Generating infinite queries

Normally, the solution would be pretty simple:
Inside `codegen.ts`
```
generates: {
    'src/gql/generated/index.ts': {
        plugins: ...,
        config: {
            fetcher: '../fetcher#fetchData',
            addInfiniteQuery: true
        }
    },
},
```

At the time of writing (June 2023), there's an open issue that prevents `addInfiniteQuery` to generate correct queries. See [`[typescript react-query] unused pageParamKey when calling useInfiniteQuery.`](https://github.com/dotansimha/graphql-code-generator-community/issues/174).

#### Workaround
Create `gql/infiniteQueries.ts`.

```
export const useGraphQLInfinite = <TData, TVariables = unknown, TError = unknown>(
    pageParamKey: keyof TVariables,
    queryKey: QueryKey,
    document: string,
    variables?: TVariables,
    options?: UseInfiniteQueryOptions<TData, TError>
) => {
    return useInfiniteQuery<TData, TError, TData>(
        queryKey,
        metadata =>
            fetchData<TData, TVariables>(document, {
                ...variables,
                ...((metadata ? { [pageParamKey]: metadata.pageParam } : {}) as TVariables),
            })(),
        options
    );
};

export const useInfiniteGetSalesQuery = (
    pageParamKey: keyof GetSalesQueryVariables,
    variables?: GetSalesQueryVariables,
    options?: UseInfiniteQueryOptions<GetSalesQuery>
) => {
    return useGraphQLInfinite<GetSalesQuery, GetSalesQueryVariables>(
        pageParamKey,
        variables === undefined ? ['GetSales.infinite'] : ['GetSales.infinite', variables],
        GetSalesDocument,
        variables,
        options
    );
};
```

##### Usage

```
const limit = 10;
const { data, isLoading, fetchNextPage } = useInfiniteGetSalesQuery(
    'skip',
    {
        first: limit,
    },
    {
        keepPreviousData: true,
        getNextPageParam: (lastPage, allPages) =>
            lastPage.sales.length >= limit ? allPages.length * limit : undefined,
    }
);
const sales = data?.pages?.map(page => page.sales).flat();
```
