import React from "react";
import s from './Header.module.css'
import { NavLink } from "react-router-dom";
import {PATH} from "../routes/Routes";

export const Header = () => {

    ///new branch
    return (
        <div>
            <div className={s.wrapper}>
                <NavLink to={PATH.LOGIN} activeClassName={s.active}>Login</NavLink>
                <NavLink to={PATH.TEST} activeClassName={s.active}>Test</NavLink>
                <NavLink to={PATH.REGISTER} activeClassName={s.active}>Register</NavLink>
                <NavLink to={PATH.PROFILE} activeClassName={s.active}>Profile</NavLink>
            </div>
        </div>
    )
}