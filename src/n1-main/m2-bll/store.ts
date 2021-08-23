import {applyMiddleware, combineReducers, createStore} from "redux";
import {authReducer} from "./authReducer";
import thunk from "redux-thunk";
import {registerReducer} from "./registrationReducer";

const reducers = combineReducers({
    auth: authReducer,
    register: registerReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store; // for dev
