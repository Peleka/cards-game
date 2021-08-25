import React from 'react'
import {useDispatch} from "react-redux";
// import {AppStoreType} from "../../../m2-bll/store";
import {recoverPasswordTC} from "../../../m2-bll/recoverPassword-reducer";
import SuperButton from "../../superComponents/c2-SuperButton/SuperButton";
import {useFormik} from "formik";
import SuperInputText from "../../superComponents/c1-SuperInputText/SuperInputText";

export type RecoveryFormikErrorType = {
    email?: string
}
export const ForgotPassword = () => {
    const dispatch = useDispatch()
    // const recoverPassword = useSelector((state: AppStoreType) => state.forgotPassword.recoveredPassword)


    const message = `<div style="background-color: lime; padding: 15px">
            password recovery link:	<a href='https://ccылка.github.io/проект/#/страница нового паспорта/$token$'>link</a>
            </div>`

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validate: (values) => {
            const errors: RecoveryFormikErrorType = {};
            if (!values.email) {
                errors.email = "Email is required"
            } else if (values.email.length < 11) {
                errors.email = "Email should be more 10 symbols"
            }
            return errors;
        },
        onSubmit: values => {
            debugger
            dispatch(recoverPasswordTC(values.email, message))
        },
    })

    return (
        <div>
            <h2>Recover Password</h2>
            <form onSubmit={formik.handleSubmit}>
                <SuperInputText type='email'
                                {...formik.getFieldProps('email')}
                />
                <SuperButton type={'submit'}>Recover</SuperButton>
            </form>
        </div>
    )
    // if (recoverPassword) {
    //     return <div>Check your email</div>
    // }
}