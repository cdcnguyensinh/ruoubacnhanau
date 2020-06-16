class FirstReactApp extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, First React App!</h1>
            </div>
        );
    }
}

ReactDOM.render(<FirstReactApp />, document.getElementById('myContainer'));  