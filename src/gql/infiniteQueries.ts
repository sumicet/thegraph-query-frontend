import type { QueryKey, UseInfiniteQueryOptions } from '@tanstack/react-query';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchData } from './fetcher';
import { GetSalesDocument, GetSalesQuery, GetSalesQueryVariables } from '.';

/**
 * This is a workaround for https://github.com/dotansimha/graphql-code-generator-community/issues/174.
 * The `pageParam` is not passed to the variables, so we have to do it manually.
 *
 * You can safely delete this file once the issue is fixed. Until then, we can
 * write the infinite queries manually.
 */

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
