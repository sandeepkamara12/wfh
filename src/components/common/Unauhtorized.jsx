import { Link } from "react-router-dom"
import { roleRedirect } from "../../const/constant";
import { useSelector } from "react-redux";

const Unauhtorized = () => {
    const {role, token} = useSelector((state) => state.auth.user);
    // let role = auth?.user?.role;
    // const {jwtToken, role} = JSON.parse(localStorage.getItem('jwtToken'));
    return (
        <div className="bg-navy/10">
            <div className="max-w-md min-h-screen mx-auto flex items-center justify-center text-center flex-col gap-4">
                <h1>Access Denied</h1>
                <p>You do not have permission to view this page, <br/>Please log in to access this page.</p>
                {
                token &&
                    <Link to={roleRedirect[role] || "/"} className="mt-4 btn btn_with_text no-underline">Goto Dashboard</Link>
                }
            </div>
        </div>
    )
}

export default Unauhtorized
