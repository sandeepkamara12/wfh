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
                    paginationComponentOptions={{
                        rowsPerPageText: '',
                        noRowsPerPage: true,
                    }}
                    expandableRows
                    expandableRowExpanded={props.expandableRowExpanded}
                    onRowExpandToggled={props.onRowExpandToggled}
                    expandableRowsComponent={props.expandableRowsComponent}
                    customStyles={dashboardTableStyle}
                    responsive={true}
                    paginationPerPage={props.paginationPerPage}
                    pagination
                    animateRows 
                    selectableRows={props.needHeader}
                />
            </div>
        </>
    )
}

export default Table
