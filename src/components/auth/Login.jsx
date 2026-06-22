import { useFormik } from 'formik';
import AuthLayout from '../../layout/AuthLayout';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '../ui/TextField';
import PasswordField from '../ui/PasswordField';
import { loginThunk, setToken } from '../../features/auth/loginSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { roleRedirect } from '../../const/constant';

const Login = () => {
    const loading = useSelector(state => state.loading);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const validationSchema = Yup.object({
        login: Yup.string().trim()
            .required('Email or phone number is required')
            .test(
                'is-email-or-phone',
                'Enter a valid email or phone number',
                (value) => {
                    if (!value) return false;

                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                    // Simple phone regex (10–15 digits, allows +91 etc.)
                    // const phoneRegex = /^[+]?[0-9]{10,15}$/;
                    const phoneRegex = /^(\+91)?[6-9]\d{9}$/;

                    return emailRegex.test(value) || phoneRegex.test(value);
                }
            ),

        password: Yup.string().required('Password is required'),
    });
    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                const result = await dispatch(loginThunk(values)).unwrap();
                console.log(result, 'result');
                if (result?.success) {
                    toast.success(result?.message);
                    dispatch(setToken({ jwtToken: result?.jwtToken, role: result?.role }));
                    if(result?.role) {
                         navigate(roleRedirect[result.role] || "/");
                    }
                }
                else {
                    toast.error(result?.message);
                }
            } catch (error) {
                console.log(error, 'error');
            }

        }
    });
    return (
        <AuthLayout>
            <div className="bg-card border border-card-line rounded-xl shadow-2xs">
                <div className="p-4 sm:p-7">
                    <div className="text-center">
                        <h3 id="hs-modal-signin-label" className="block text-2xl font-bold text-foreground">Sign in</h3>
                        <p className="mt-2 text-sm text-muted-foreground-2">
                            Don't have an account yet?
                            <a className="text-primary decoration-2 hover:underline focus:outline-hidden focus:underline font-medium" href="#">
                                Sign up here
                            </a>
                        </p>
                    </div>

                    <form onSubmit={formik.handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <TextField label="Email/Phone" id="login" {...formik.getFieldProps("login")} error={formik.touched.login && formik.errors.login} />
                            <PasswordField label="Password" id="password" {...formik.getFieldProps("password")} error={formik.touched.password && formik.errors.password} />
                        </div>

                        <button type="submit" className="btn" disabled={loading || !(formik.isValid && formik.dirty)}>{loading ? "Signing in..." : "Sign in"}</button>
                    </form>
                </div>

            </div>
        </AuthLayout>
    )
}

export default Login
