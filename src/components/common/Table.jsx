import DataTable from 'react-data-table-component';
const Table = (props) => {

    // Remove Table Header if no need it (needHeader above prop)
    const dashboardTableStyle = {
        headRow: {
            style: {
                display: props.needHeader ? 'flex' : 'none',
            },
        },
    };

    return (
        <>
            <div className={`${props.id}`}>
                <DataTable
                    columns={props.columns}
                    data={props.data}
                    pagination
                    animateRows 
                    expandableRows
                    responsive={true}
                    selectableRows={props.needHeader}
                    customStyles={dashboardTableStyle}
                    paginationPerPage={props.paginationPerPage??5}
                    expandableRowsComponent={props.expandableRowsComponent}
                    paginationComponentOptions={{
                        rowsPerPageText: '',
                        noRowsPerPage: true,
                    }}
                />
            </div>
        </>
    )
}

export default Table
