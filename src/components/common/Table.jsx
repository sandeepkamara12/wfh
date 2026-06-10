import { GraduationCap } from 'lucide-react';
import DataTable from 'react-data-table-component';
const Table = ({ columns, data, handleOpen, btnText, btnIcon, label, subLabel }) => {
    return (
        <>
            <div className="flex gap-3 md:justify-between md:items-center bg-white p-4 rounded-t">
                <div>
                    <h2 className="text-xl font-semibold text-foreground">
                        {label}
                    </h2>
                    <p className="text-sm text-[#fbf9fa]-foreground-2">
                        {subLabel}
                    </p>
                </div>
                <div>
                    <div className="inline-flex gap-x-2">
                        <button type="button" onClick={handleOpen} className="btn">
                            {btnIcon}
                            {btnText}
                        </button>
                    </div>
                </div>
            </div>
            <DataTable
                columns={columns}
                data={data}
                paginationComponentOptions={{
                    rowsPerPageText: '',
                    noRowsPerPage: true,
                }}
                paginationPerPage={10}
                pagination
                selectableRows   
            />
        </>
    )
}

export default Table
