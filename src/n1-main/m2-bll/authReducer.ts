import {Dispatch} from "redux";
import {authAPI} from "../m3-dal/api";


const initialState = {
    isLoggedIn: false,
    userData: null as UserDataType | null
};

type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        case 'login/SET-USER-DATA':
            return {...state, userData: action.payload}
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

//thunks
export const loginTC = (values: UserLoginData) => (dispatch: Dispatch<ActionsType>) => {

    try {
        authAPI.login(values.email, values.password, values.rememberMe).then(res => {
            const userDataFromApi: UserDataType = {
                _id: res.data._id,
                name: res.data.name,
                email: res.data.email,
                avatar: res.data.avatar || null,
                publicCardPacksCount: res.data.publicCardPacksCount
            }
            dispatch(setUserDataAC(userDataFromApi))
            dispatch(setIsLoggedInAC(true))
        })
    } catch (e) {
        const error = e.response ? e.response.data.error : e.message
        alert(error)
    }
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
type ActionsType = ReturnType<typeof setIsLoggedInAC> | ReturnType<typeof setUserDataAC>

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