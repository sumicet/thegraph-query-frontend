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
            },
        },
    },
};

export default config;
