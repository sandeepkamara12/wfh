import DataTable from 'react-data-table-component';
const Table = ({ id = "", columns, data, handleOpen, btnText, btnIcon, label, subLabel, isButtonDisabled = false, needHeader = false, customStyle }) => {
    const dashboardTableStyle = {
        headRow: {
            style: {
                display: needHeader ? 'flex' : 'none',
            },
        },
        headCells: {
            style: {
                paddingTop: needHeader ? '16px' : '20px',
                paddingBottom: needHeader ? '16px' : '20px',
                paddingLeft: needHeader ? '16px' : '14px',
                paddingRight: needHeader ? '16px' : '14px',
            },
        },
        cells: {
            style: {
                paddingTop: needHeader ? '16px' : '20px',
                paddingBottom: needHeader ? '16px' : '20px',
                paddingLeft: needHeader ? '16px' : '14px',
                paddingRight: needHeader ? '16px' : '14px',
            },
        },
    };
    return (
        <>
            <div className={`gap-3 md:justify-between md:items-center bg-white p-4 rounded-t ${needHeader ? 'flex' : 'hidden'}`}>
                <div>
                    <h2 className="font-bold text-lg">
                        {label}
                    </h2>
                    <p className="text-sm text-navy font-medium">
                        {subLabel}
                    </p>
                </div>
                {
                    btnText !== "" && btnIcon !== "" &&
                    <div>
                        <div className="inline-flex gap-x-2">
                            <button type="button"
                                onClick={handleOpen}
                                className="btn btn_with_text" disabled={isButtonDisabled}>
                                {btnIcon}
                                {btnText}
                            </button>
                        </div>
                    </div>
                }
            </div>
            <div className={`${id}`}>
                <DataTable
                    columns={columns}
                    data={data}
                    paginationComponentOptions={{
                        rowsPerPageText: '',
                        noRowsPerPage: true,
                    }}
                    customStyles={dashboardTableStyle}
                    responsive={true}
                    paginationPerPage={10}
                    pagination={needHeader}
                    selectableRows={needHeader}
                />
            </div>
        </>
    )
}

export default Table
