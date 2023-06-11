import { config } from '../config';

/**
 * Removes the first and last `\n    ` from the query string. Handles errors from the subgraph.
 */
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
