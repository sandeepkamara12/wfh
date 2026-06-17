const AuthLayout = ({ children }) => {
    return (
        <div className="w-full max-w-2xl mx-auto">
            <div className="p-4 sm:p-10 space-y-4 sm:space-y-6">
                {children}
            </div>
        </div>
    )
}

export default AuthLayout
