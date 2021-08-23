import {registerAPI} from "../m3-dal/api";
import {Dispatch} from "redux";

const initialState = {
    isRegistered: false
}

type InitialStateType = typeof initialState

export const registerReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "register/SET-SIGN-UP":
            return {...state, isRegistered: action.isRegistered}
        default:
            return state
    }
}

//actions
export const setSignUpAC = (isRegistered: boolean) => ({
    type: 'register/SET-SIGN-UP',
    isRegistered
} as const)

//thunks
export const registerTC = (values: UserLoginData) => (dispatch: Dispatch<ActionsType>) => {
    registerAPI.register(values.email, values.password)
        .then(() => {
            debugger
            dispatch(setSignUpAC(true))
        })
        .catch((e) => {
            const error = e.response ? e.response.data.error : e.message
            alert(error)
        })
}

//types
type ActionsType = ReturnType<typeof setSignUpAC>
type UserLoginData = {
    email: string
    password: string
}