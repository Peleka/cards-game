import React from 'react'
import s from './Register.module.css'
import {useFormik} from 'formik';
import {NavLink} from 'react-router-dom';
import SuperInputText from "../../../superComponents/c1-SuperInputText/SuperInputText";
import SuperButton from "../../../superComponents/c2-SuperButton/SuperButton";

type SignupFormErrorType = {
    email?: string
    password?: string
    confirmedPassword?: string
}
export const Register = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmedPassword: '',
        },
        validate: (values) => {
            const errors: SignupFormErrorType = {};
            if (!values.email) {
                errors.email = 'Email is required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address.';
            }
            if (!values.password) {
                errors.password = 'Password is required'
            } else if (values.password.length < 8) {
                errors.password = 'Password must be at least 8 symbols'
            }
            if (values.password && !values.confirmedPassword) {
                errors.confirmedPassword = 'Confirm your password'
            } else if (values.password !== values.confirmedPassword) {
                errors.confirmedPassword = 'You entered two different passwords.'
            }
            return errors;
        },
        onSubmit: values => {
            if (values.password === values.confirmedPassword) {
                //dispatch
                alert(JSON.stringify(values));

                formik.resetForm()
            }
        },
    })

    return (
        <div>
            <h2>Registration</h2>
            <form onSubmit={formik.handleSubmit} className={s.form}>

                <SuperInputText
                    type='email'
                    placeholder='Enter your email'
                    name='email'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <SuperInputText
                    type='password'
                    placeholder='Enter your password'
                    name='password'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <SuperInputText
                    type='password'
                    placeholder='Confirm your password'
                    error={formik.touched.confirmedPassword ? formik.errors.confirmedPassword : null}
                    {...formik.getFieldProps('confirmedPassword')}                        //name
                    onChange={formik.handleChange}
                    value={formik.values.confirmedPassword}
                />

                <div>
                    <NavLink to='/login'><SuperButton> Cancel </SuperButton></NavLink>
                    <SuperButton type={'submit'}> Register </SuperButton>
                </div>

            </form>
        </div>
    )
}