import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: 'https://api.thegraph.com/subgraphs/name/itsjerryokolo/opensea',
    documents: 'src/**/*.graphql',
    generates: {
        'src/gql/generated/index.ts': {
            plugins: [
                'typescript',
                // https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-resolvers
                'typescript-resolvers',
                // https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-operations
                'typescript-operations',
                // https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-react-query
                'typescript-react-query',
                // https://the-guild.dev/graphql/codegen/plugins/typescript/named-operations-object
                'named-operations-object',
            ],
            config: {
                fetcher: '../fetcher#fetchData',
                /**
                 * Bug: https://github.com/dotansimha/graphql-code-generator-community/issues/174.
                 * This doesn't generate a well written query. It doesn't use the pageParamKey param.
                 * Once it's fixed, uncomment the line below and remove the `infiniteQueries.ts` file.
                 */
                // addInfiniteQuery: true
            },
        },
    },
};

export default config;
