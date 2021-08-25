import React from 'react'
import SuperButton from "../../superComponents/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../superComponents/c3-SuperCheckbox/SuperCheckbox";
import SuperInputText from "../../superComponents/c1-SuperInputText/SuperInputText";
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../../../m2-bll/authReducer";
import {useFormik} from 'formik';
import {NavLink, Redirect} from "react-router-dom";
import {AppStoreType} from "../../../m2-bll/store";

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = () => {

    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state: AppStoreType) => state.auth.isLoggedIn)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Email is required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Password is required';
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(loginTC(values))
            formik.resetForm();
        },
    });


    if (isLoggedIn) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h2> Login </h2>

            <form onSubmit={formik.handleSubmit}>

                <SuperInputText type='email'
                                placeholder='Enter your E-mail'
                                name='email'
                                onChange={formik.handleChange}
                                value={formik.values.email}/> <br/>

                <SuperInputText type='password'
                                placeholder='Enter your password'
                                name='password'
                                onChange={formik.handleChange}
                                value={formik.values.password}/> <br/>

                <SuperCheckbox name='rememberMe'
                               onChange={formik.handleChange}/> Remember me <br/>

                <SuperButton type='submit'>
                    Login
                </SuperButton>
            </form>

            <NavLink to='/forgot-password'>Forgot Password</NavLink> <br/>
            <NavLink to="/register"><SuperButton> Sign Up </SuperButton></NavLink>
        </div>
    )
}