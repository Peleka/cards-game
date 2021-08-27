import React from 'react'
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../m2-bll/store";
import {Login} from "./Login/Login";

export const  Profile = () => {

    const isLoggedIn = useSelector((state: AppStoreType) => state.auth.isLoggedIn)

    if (!isLoggedIn) {
        return <Login />
    }

    return (
        <div>
            Profile
        </div>
    )
}