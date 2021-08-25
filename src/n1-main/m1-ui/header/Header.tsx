import React from "react";
import s from './Header.module.css'
import { NavLink } from "react-router-dom";
import {PATH} from "../routes/Routes";
import SuperButton from "../superComponents/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {logoutTC} from "../../m2-bll/authReducer";
import {AppStoreType} from "../../m2-bll/store";

export const Header = () => {

    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state: AppStoreType) => state.auth.isLoggedIn)

    return (
        <div>
            <div className={s.wrapper}>
                <NavLink to={PATH.LOGIN} activeClassName={s.active}>Login</NavLink>
                <NavLink to={PATH.TEST} activeClassName={s.active}>Test</NavLink>
                <NavLink to={PATH.REGISTER} activeClassName={s.active}>Register</NavLink>
                <NavLink to={PATH.PROFILE} activeClassName={s.active}>Profile</NavLink>
                <NavLink to={PATH.FORGOT_PASSWORD} activeClassName={s.active}>ForgotPassword</NavLink>
                <SuperButton onClick={() => {dispatch(logoutTC)
                    console.log(isLoggedIn)}}>Log out</SuperButton>
            </div>
        </div>
    )
}