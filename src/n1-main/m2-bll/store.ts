import {applyMiddleware, combineReducers, createStore} from "redux";
import {authReducer} from "./authReducer";
import thunk from "redux-thunk";
import {registerReducer} from "./registrationReducer";
import {appReducer} from "./app-reducer";

const reducers = combineReducers({
    auth: authReducer,
    register: registerReducer,
    app: appReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store; // for dev
