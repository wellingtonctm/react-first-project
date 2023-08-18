const Table = (props) => {
    return (
        <>
            <div>{props.data[0].name}</div>
            <div>{props.data[0].birth}</div>
        </>
    )
}

export default Table;