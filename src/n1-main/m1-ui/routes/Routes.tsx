import React from "react";
import {Redirect, Route, Switch } from "react-router-dom";
import {Error404} from "../components/Error404";
import {Login} from "../components/Login/Login";
import {Profile} from "../components/Profile";
import {Register} from "../components/Registration/Register";
import {NewPassword} from "../components/NewPassword";
import {ForgotPassword} from "../components/ForgotPassword";
import {TestPage} from "../components/TestPage";
import {Packs} from "../components/Packs/Packs";
import {Cards} from "../components/Cards/Cards";


export const PATH = {
    LOGIN: '/login',
    REGISTER: '/register',
    PROFILE: '/profile',
    FORGOT_PASSWORD: '/forgot-password',
    NEW_PASSWORD: '/new-password',
    TEST: '/test',
    PACKS: '/packs',
    CARDS: '/cards/:packID',
}

export const Routes = () => {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={PATH.TEST}/>}/>

                <Route path={PATH.LOGIN} render={() => <Login/>}/>
                <Route path={PATH.REGISTER} render={() => <Register/>}/>
                <Route path={PATH.FORGOT_PASSWORD} render={() => <ForgotPassword/>}/>
                <Route path={PATH.NEW_PASSWORD + '/:token?'} render={() => <NewPassword/>}/>
                <Route path={PATH.PROFILE} render={() => <Profile/>}/>
                <Route path={PATH.TEST} render={() => <TestPage/>}/>
                <Route path={PATH.PACKS} render={() => <Packs/>}/>
                <Route path={PATH.CARDS} render={() => <Cards/>}/>

                <Route render={() => <Error404/>}/>
            </Switch>
        </div>
    )
}