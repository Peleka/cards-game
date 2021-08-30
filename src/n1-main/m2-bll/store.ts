import {applyMiddleware, combineReducers, createStore} from "redux";
import {authReducer} from "./auth-reducer";
import thunk from "redux-thunk";
import {registerReducer} from "./registration-reducer";
import {appReducer} from "./app-reducer";
import {recoverPasswordReducer} from "./recoverPassword-reducer";
import {setNewPasswordReducer} from "./setNewPassword-reducer";
import {packsReducer} from "./packs-reducer";

const reducers = combineReducers({
    auth: authReducer,
    register: registerReducer,
    app: appReducer,
    forgotPassword: recoverPasswordReducer,
    setNewPassword: setNewPasswordReducer,
    packs: packsReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store; // for dev
