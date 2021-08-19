import {combineReducers, createStore} from "redux";
import {reducer1} from "./loginReducer";

const reducers = combineReducers({
    login1: reducer1,

});
// export type ActionCreatorType = ReturnType<typeof >

const store = createStore(reducers);

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store; // for dev
