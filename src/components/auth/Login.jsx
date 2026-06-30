import { useFormik } from 'formik';
import AuthLayout from '../../layout/AuthLayout';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '../ui/TextField';
import PasswordField from '../ui/PasswordField';
import { loginThunk } from '../../features/auth/loginSlice';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { roleRedirect } from '../../const/constant';
import { useState } from 'react';
import { Check } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';

const Login = () => {
    const loading = useSelector(state => state.loading);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false);
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
                if (result?.success) {
                    toast.success(result?.message);
                    if (result?.role) {
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
            <>
                <div className="grid grid-cols-2 h-full">
                    <div className="flex flex-wrap items-center justify-center">
                        <div className="p-4 sm:p-7 max-w-xl mx-auto 5xl:w-3/6">
                            <div className="text-center">
                                <img src="/wfh-logo.png" alt="logo" width="100" height="auto" className='mx-auto block mb-6' />
                                <h3 className="login_heading">Sign in to <span className='text-orange'>WFH</span></h3>
                                <p className='text-sm font-medium'>Send, Receive and save smarter.</p>


                                <div className="sign_in_btn_wrap mt-7">
                                    <button className="sign_in_btn">
                                        <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                                            <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4" />
                                            <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853" />
                                            <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05" />
                                            <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335" />
                                        </svg>
                                        Sign in with Google
                                    </button>
                                    <button className="sign_in_btn">
                                        <svg className="w-5 h-auto" xmlns="http://www.w3.org/2000/svg" fill="#000000" width="800px" height="800px" viewBox="0 0 24 24">
                                            <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                                        </svg>
                                        Sign in with Apple
                                    </button>
                                </div>

                                <div className="or">Or</div>
                            </div>

                            <form className="login_form_wrapper" onSubmit={formik.handleSubmit}>
                                <TextField label="Email/Phone" id="login" {...formik.getFieldProps("login")} error={formik.touched.login && formik.errors.login} />
                                <PasswordField label="Password" id="password" {...formik.getFieldProps("password")} error={formik.touched.password && formik.errors.password} />
                                <div className='remember_me'>
                                    <label className="remember_me_label">

                                        <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} className="hidden" />

                                        <div
                                            className={`remmeber_me_checkbox ${checked ? "bg-orange border-orange" : "border-navy bg-white"}`}>
                                            {checked && (
                                                <Check className="w-4 h-4 text-white" strokeWidth={3} />
                                            )}
                                        </div>
                                        <span className="remember_me_text">Remember me</span>
                                    </label>
                                    <Link className='login_forgot_password' to="/forgot-password">Forgot Password?</Link>
                                </div>

                                <button type="submit" className="btn" disabled={loading || !(formik.isValid && formik.dirty)}>{loading ? "Signing in..." : "Sign in"}</button>

                                <p className="login_donot_have_account">Don't have an account? <a className="login_donot_have_account_link" href="#">Sign Up</a></p>
                                
                            </form>

                        </div>
                    </div>
                    <div className='bg-navy flex flex-wrap items-center justify-center'>
                        <div className='max-w-full w-2xl'>
                            <img src="/group-tp.png" alt="students" className='max-w-full w-2xl mx-auto' />
                            <Swiper
                                modules={[Autoplay, Pagination]}
                                spaceBetween={50} slidesPerView={1} autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                loop={true}>
                                <SwiperSlide>
                                    <div className='text-white text-center'>
                                        <h2 className='mb-4 text-[32px]'>Smarter School Smarter <br /><span className="text-orange">Communication</span></h2>
                                        <p className='w-4/6 mx-auto'>A unified platform that connects teachers, parents and students, making it easy to share updates, manage assignments. — all in one place.</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='text-white text-center'>
                                        <h2 className='mb-4 text-[32px]'>Stay Connected with <br /><span className="text-orange">Teachers</span></h2>
                                        <p className='w-4/6 mx-auto'>Keep parents, students and teachers in sync with real-time updates, announcements, and important notices — all in one place, without the chaos of multiple apps.</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='text-white text-center'>
                                        <h2 className='mb-4 text-[32px]'>Stay Updated with Class <br /><span className='text-orange'>Every Day</span></h2>
                                        <p className='w-4/6 mx-auto'>Easily track homework, classwork, and school activities shared by teachers so your child stays on top of their learning every day.</p>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </>
        </AuthLayout>
    )
}

export default Login
