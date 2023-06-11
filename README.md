### About
This repo showcases how to query the graph from the frontend using `react-query`.
The subgraph used for this is from
[Opensea](https://thegraph.com/hosted-service/subgraph/itsjerryokolo/opensea).

### Steps

1.
```
npm i graphql
npm i -D @graphql-codegen/cli @graphql-codegen/typescript-resolvers @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-query @graphql-codegen/named-operations-object
```

2. `npx graphql-code-generator init`
The schema is inside the `config.ts` file.
```
? What type of application are you building? Application built with React
? Where is your schema?: (path or url) https://api.thegraph.com/subgraphs/name/itsjerryokolo/opensea
? Where are your operations and fragments?: src/**/*.graphql
? Where to write the output: src/gql/
? Do you want to generate an introspection file? No
? How to name the config file? codegen.ts
? What script in package.json should run the codegen? codegen
```

3. Inside `codegen.ts` change
```
generates: {
    'src/gql/': {
        preset: 'client',
        plugins: [],
    },
},
```
to
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

4. Build a custom fetcher inside the `gql` folder.

5. Add `gql/queries/sales.graphql`.

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

The argument types for GetSales were copied from
https://thegraph.com/hosted-service/subgraph/itsjerryokolo/opensea ->
Playground -> Show documentation explorer -> `query: Query` -> Scroll down to
sales

6. Run the codegen command.

`npm run codegen`

You should see the output inside `gql/generated/index.ts`

### Usage

```
const { data, isLoading } = useGetSalesQuery();
```