import React from "react";
import {Redirect, Route, Switch } from "react-router-dom";
import {Error404} from "./pages/Error404";
import {Login} from "./pages/Login/Login";
import {Profile} from "./pages/Profile";
import {Register} from "./pages/Registration/Register";
import {NewPassword} from "./pages/NewPassword";
import {ForgotPassword} from "./pages/ForgotPassword";
import {TestPage} from "./pages/TestPage";
import {Packs} from "../components/Packs/Packs";

export const PATH = {
    LOGIN: '/login',
    REGISTER: '/register',
    PROFILE: '/profile',
    FORGOT_PASSWORD: '/forgot-password',
    NEW_PASSWORD: '/new-password',
    TEST: '/test',
    PACKS: '/packs',
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

                <Route render={() => <Error404/>}/>
            </Switch>
        </div>
    )
}