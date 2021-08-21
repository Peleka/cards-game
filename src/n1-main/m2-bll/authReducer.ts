import {Dispatch} from "redux";
import axios from "axios";


const initialState = {
    isLoggedIn: false,
    userData: null as UserDataType | null
};

export type InitialStateType = typeof initialState

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

export const setUserDataAC = (payload: UserDataType) => ({
    type: 'login/SET-USER-DATA', payload
} as const)

//thunks
export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<ActionsType>) => {

    try {
        authAPI.login(email, password, rememberMe).then(res => {
            const userDataFromApi: UserDataType = {
                _id: res.data._id,
                name: res.data.name,
                email: res.data.email,
                avatar: res.data.avatar || null,
                publicCardPacksCount: res.data.publicCardPacksCount
            }
            dispatch(setUserDataAC(userDataFromApi))
        })
    } catch {
        throw new Error('authorization failed')
    }
}

// types
type ActionsType = ReturnType<typeof setIsLoggedInAC> | ReturnType<typeof setUserDataAC>

export type UserDataType = {
    _id: string
    email: string
    name: string
    avatar?: string | null
    publicCardPacksCount: number
}

//dal

const instance = axios.create(
    {
        baseURL: "https://neko-back.herokuapp.com/2.0/",
        withCredentials: true,
    })

const authAPI = {
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
}
