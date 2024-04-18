const MyComponent = () => {
    const inlineStyle = {
        color: 'red',
        fontSize: '20px',
        pdding: '10px',
        border: '1px solid black',
        borderRadius: '5px',
        backgroundColor: 'lightgray'
    };
    return (
        <div style={inlineStyle}>
            <h1>My Component</h1>
        </div>
    );
}

export default MyComponent;