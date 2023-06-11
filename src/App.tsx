import { useGetSalesQuery, useInfiniteGetSalesQuery } from './gql';

const limit = 10;

function Content() {
    const { data, isLoading } = useGetSalesQuery();
    const sales = data?.sales;

    // Infinite query example
    // const { data, isLoading, fetchNextPage } = useInfiniteGetSalesQuery(
    //     'skip',
    //     {
    //         first: limit,
    //     },
    //     {
    //         keepPreviousData: true,
    //         getNextPageParam: (lastPage, allPages) =>
    //             lastPage.sales.length >= limit ? allPages.length * limit : undefined,
    //     }
    // );
    // const sales = data?.pages?.map(page => page.sales).flat();

    if (isLoading) return <p>Loading...</p>;

    return (
        <table>
            <tr>
                <th>Price</th>
                <th>Buyer Address</th>
                <th>Seller Address</th>
            </tr>
            {sales?.map(sale => (
                <tr key={sale.txHash}>
                    <td>{sale.price}</td>
                    <td>{sale.buyer.id}</td>
                    <td>{sale.seller.id}</td>
                </tr>
            ))}
            {/* <button onClick={() => fetchNextPage()}>Load more</button> */}
        </table>
    );
}

function App() {
    return (
        <div
            style={{
                display: 'flex',
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Content />
        </div>
    );
}

export default App;
