import React from "react";
import s from './Header.module.css'
import { NavLink } from "react-router-dom";
import {PATH} from "../routes/Routes";
import SuperButton from "../superComponents/c2-SuperButton/SuperButton";
import {useDispatch} from "react-redux";
import {logoutTC} from "../../m2-bll/auth-reducer";

export const Header = () => {

    const dispatch = useDispatch()

    return (
        <div>
            <div className={s.wrapper}>
                <NavLink to={PATH.LOGIN} activeClassName={s.active}>Login</NavLink>
                <NavLink to={PATH.REGISTER} activeClassName={s.active}>Register</NavLink>
                <NavLink to={PATH.PROFILE} activeClassName={s.active}>Profile</NavLink>
                <NavLink to={PATH.PACKS} activeClassName={s.active}>Packs</NavLink>
                <NavLink to={PATH.CARDS} activeClassName={s.active}>Cards</NavLink>
                <NavLink to={PATH.NEW_PASSWORD} activeClassName={s.active}>SetNewPassword</NavLink>
                <SuperButton onClick={() => dispatch(logoutTC)}>Log out</SuperButton>
            </div>
        </div>
    )
}