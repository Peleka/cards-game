import React from "react";
import s from './Header.module.css'
import { NavLink } from "react-router-dom";
import {PATH} from "../routes/Routes";
import {useDispatch} from "react-redux";
import {logoutTC} from "../../m2-bll/auth-reducer";
import {ExitToApp} from "@material-ui/icons";

export const Header = () => {

    const dispatch = useDispatch()

    return (
        <div>
            <div className={s.wrapper}>
                <NavLink to={PATH.REGISTER} className={s.link} activeClassName={s.active}>Sign up</NavLink>
                <NavLink to={PATH.LOGIN} className={s.link} activeClassName={s.active}>Login</NavLink>
                <NavLink to={PATH.PROFILE} className={s.link} activeClassName={s.active}>Profile</NavLink>
                <NavLink to={PATH.PACKS} className={s.link} activeClassName={s.active}>Packs</NavLink>
                <span style={{cursor: 'pointer'}}><ExitToApp style={{paddingLeft: '50px'}} onClick={() => dispatch(logoutTC)} /></span>
            </div>
        </div>
    )
}