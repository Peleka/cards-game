import {Dispatch} from "redux";
import {authAPI} from "../m3-dal/api";
import {setAppStatusAC} from "./app-reducer";


const initialState = {
    isLoggedIn: false,
    userData: null as UserDataType | null,
    authError: '',

};

type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        case 'login/SET-USER-DATA':
            return {...state, userData: action.payload}
        case 'login/SET-AUTH-ERROR':
            return {...state, authError: action.errorMessage}
        default:
            return state
    }
};

//actions
export const setIsLoggedInAC = (value: boolean) => ({
    type: 'login/SET-IS-LOGGED-IN', value
} as const)

export const setUserDataAC = (payload: UserDataType | null) => ({
    type: 'login/SET-USER-DATA', payload
} as const)

const setAuthErrorAC = (errorMessage: string) => ({
    type: 'login/SET-AUTH-ERROR', errorMessage
} as const)

//thunks
export const loginTC = (values: UserLoginData) => (dispatch: Dispatch<ActionsType>) => {

    dispatch(setAppStatusAC('loading'))

    authAPI.login(values.email, values.password, values.rememberMe)
        .then((res) => {
            const userDataFromApi: UserDataType = {
                _id: res.data._id,
                name: res.data.name,
                email: res.data.email,
                avatar: res.data.avatar || null,
                publicCardPacksCount: res.data.publicCardPacksCount
            }
            dispatch(setUserDataAC(userDataFromApi))
            dispatch(setIsLoggedInAC(true))
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch ((e) => {
        const error = e.response ? e.response.data.error : e.message
        dispatch(setAuthErrorAC(error))
        dispatch(setAppStatusAC('failed'))

})
}

export const logoutTC = (dispatch: Dispatch<ActionsType>) => {
    try {
        authAPI.logout().then(() => {
            dispatch(setIsLoggedInAC(false))
            dispatch(setUserDataAC(null))
        })
    } catch (e) {

    }
}

// types
type ActionsType = ReturnType<typeof setIsLoggedInAC>
    | ReturnType<typeof setUserDataAC>
    | ReturnType<typeof setAppStatusAC>
    | ReturnType<typeof setAuthErrorAC>


export type UserLoginData = {
    email: string
    password: string
    rememberMe: boolean
}

export type UserDataType = {
    _id: string
    email: string
    name: string
    avatar?: string | null
    publicCardPacksCount: number
}