import { useGetSalesQuery } from './gql';

function Content() {
    const { data, isLoading } = useGetSalesQuery();
    if (isLoading) return <p>Loading...</p>;

    return (
        <table>
            <tr>
                <th>Price</th>
                <th>Buyer Address</th>
                <th>Seller Address</th>
            </tr>
            {data?.sales.map(sale => (
                <tr key={sale.txHash}>
                    <td>{sale.price}</td>
                    <td>{sale.buyer.id}</td>
                    <td>{sale.seller.id}</td>
                </tr>
            ))}
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
