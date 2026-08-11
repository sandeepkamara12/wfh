const UserView = ({ role, open, setIsEdit, isEdit, handleClose }) => {
    return (
        <div className="flex flex-wrap gap-4 items-start px-4 pb-6">
            <span className="inline-block size-20 bg-white rounded-full relative group">
                <span className="inline-flex flex-wrap items-center justify-center border border-gray-200 size-20 rounded-full overflow-hidden relative z-40">
                        <img src="/student.jpg" className="w-full h-full object-cover" alt="profile preview" />
                </span>
                <div>sandeep kamra</div>
                <div>1234567890</div>
                <div>sandeepkamra@gmail.com</div>
                <div>7986680517</div>
                <div>class in charge: III B | Non Medical | Maths</div>
                <div>Spouse Name:Mrs. Shilpa Kamra</div>
                <div>Father Name:Mr. Sandeep Kamra</div>
                <div>Mother Name:Mrs. Shilpa Kamra</div>
                <div>Joined at:20 July, 2026</div>
                <div>Other classes: </div>
            </span>
        </div>
    )
}

export default UserView
