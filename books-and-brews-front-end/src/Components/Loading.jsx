//reusable loading component
const Loading = ({ dataName }) => {
    let data = dataName || 'data'; //specific name or default data if name not found

    return (
        <main className="main-content">
            <h1>Loading</h1>
            <div>Retrieving {data} from server...</div>
        </main>
    );
};

export default Loading;