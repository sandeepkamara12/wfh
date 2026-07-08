import DataTable from 'react-data-table-component';
const Table = ({ id="", columns, data, handleOpen, btnText, btnIcon, label, subLabel, isButtonDisabled=false }) => {
    return (
        <>
            <div className="flex gap-3 md:justify-between md:items-center bg-white p-4 rounded-t">
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
                    responsive={true}
                    paginationPerPage={10}
                    pagination
                    selectableRows
                />
            </div>
        </>
    )
}

export default Table
