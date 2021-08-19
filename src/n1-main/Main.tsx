import React from "react";
import {Header} from "./m1-ui/header/Header";
import {Routes} from "./m1-ui/routes/Routes";
import {HashRouter} from "react-router-dom";

export const Main = () => {
    return (
        <>
            <HashRouter>
                <Header/>
                <Routes/>
            </HashRouter>
        </>
    )
}