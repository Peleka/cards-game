import React from "react";
import {Redirect, Route, Switch } from "react-router-dom";
import {Error404} from "./pages/Error404";
import {Login} from "./pages/Login";
import {Profile} from "./pages/Profile";
import {Register} from "./pages/Registration/Register";
import {NewPassword} from "./pages/NewPassword";
import {PasswordRecovery} from "./pages/PasswordRecovery";
import {TestPage} from "./pages/TestPage";

export const PATH = {
    LOGIN: '/login',
    REGISTER: '/register',
    PROFILE: '/profile',
    PASSWORD_RECOVERY: '/password-recovery',
    NEW_PASSWORD: '/new-password',
    TEST: '/test'
}

export const Routes = () => {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={PATH.TEST}/>}/>

                <Route path={PATH.LOGIN} render={() => <Login/>}/>
                <Route path={PATH.REGISTER} render={() => <Register/>}/>
                <Route path={PATH.PASSWORD_RECOVERY} render={() => <PasswordRecovery/>}/>
                <Route path={PATH.NEW_PASSWORD} render={() => <NewPassword/>}/>
                <Route path={PATH.PROFILE} render={() => <Profile/>}/>
                <Route path={PATH.TEST} render={() => <TestPage/>}/>

                <Route render={() => <Error404/>}/>
            </Switch>
        </div>
    )
}