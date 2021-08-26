import {applyMiddleware, combineReducers, createStore} from "redux";
import {authReducer} from "./authReducer";
import thunk from "redux-thunk";
import {registerReducer} from "./registrationReducer";
import {appReducer} from "./app-reducer";
import {recoverPasswordReducer} from "./recoverPassword-reducer";
import {setNewPasswordReducer} from "./setNewPasswordReducer";

const reducers = combineReducers({
    auth: authReducer,
    register: registerReducer,
    app: appReducer,
    forgotPassword: recoverPasswordReducer,
    setNewPassword: setNewPasswordReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store; // for dev
