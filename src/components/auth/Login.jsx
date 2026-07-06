import { useFormik } from 'formik';
import AuthLayout from '../../layout/AuthLayout';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '../ui/TextField';
import PasswordField from '../ui/PasswordField';
import { loginThunk } from '../../features/auth/loginSlice';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { branchOptions, roleRedirect } from '../../const/constant';
import { useState } from 'react';
import { Check } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import RememberField from '../ui/RememberField';
import CustomSelect from '../ui/CustomSelect';
import Modal from '../ui/Modal';

const Login = () => {
    const loading = useSelector(state => state.loading);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false);
    const [open, setOpen] = useState(false);

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
                <div className="login_wrapper">
                    <div className="left_column">
                        <div className="inner_left_column">
                            <div className="text-center mb-10">
                                <img src="/wfh-logo.png" alt="logo" width="100" height="auto" className='mx-auto block mb-6' />
                                <h3 className="login_heading">Sign in to <span className='text-orange'>WFH</span></h3>
                                <p className='text-sm font-medium'>Send, Receive and save smarter.</p>
                            </div>

                            <form className="login_form_wrapper" onSubmit={formik.handleSubmit}>
                                <TextField label="Email/Phone/ID" id="login" {...formik.getFieldProps("login")} error={formik.touched.login && formik.errors.login} />
                                <PasswordField label="Password" id="password" {...formik.getFieldProps("password")} error={formik.touched.password && formik.errors.password} />
                                <RememberField checked={checked} handleChecked={setChecked} handleOpen={setOpen} />
                                <button type="submit" className="btn" disabled={loading || !(formik.isValid && formik.dirty)}>{loading ? "Signing in..." : "Sign in"}</button>
                                {/* <p className="login_donot_have_account">Don't have an account? <a className="login_donot_have_account_link" href="#">Sign Up</a></p> */}
                            </form>

                        </div>
                    </div>
                    <div className='login_slider_wrapper'>
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
                                    <h2>Smarter School Smarter <br /><span className="text-orange">Communication</span></h2>
                                    <p>A unified platform that connects teachers, parents and students, making it easy to share updates, manage assignments. — all in one place.</p>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <h2>Stay Connected with <br /><span className="text-orange">Teachers</span></h2>
                                    <p>Keep parents, students and teachers in sync with real-time updates, announcements, and important notices — all in one place, without the chaos of multiple apps.</p>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <h2>Stay Updated with Class <br /><span className='text-orange'>Every Day</span></h2>
                                    <p>Easily track homework, classwork, and school activities shared by teachers so your child stays on top of their learning every day.</p>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                {/* <Modal isOpen={open} title="Forgot Password?" handleCloseModal={() => setOpen(false)}>
                    <div className="p-4 overflow-y-auto login_form_wrapper">
                       <TextField label="Email/Phone" id="login" {...formik.getFieldProps("login")} error={formik.touched.login && formik.errors.login} />
                       <button type="submit" className="btn" disabled={loading || !(formik.isValid && formik.dirty)}>{loading ? "Sending..." : "Send Email"}</button>
                    </div>
                </Modal> */}
            </>
        </AuthLayout>
    )
}

export default Login
