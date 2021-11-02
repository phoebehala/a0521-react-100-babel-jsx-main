let categories = data.map((result, index) => {
    return (
        <Category key={index} data={result} />
    )
})

ReactDOM.render(
    <div className="row">
        {categories}
    </div>, 
    document.getElementById('root')
)