import {Dispatch} from "redux";


const initialState = {
    isLoggedIn: false
};

export type InitialStateType = typeof initialState

export const authReducer  = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }

};

//actions
export const setIsLoggedInAC = (value: boolean) => ({
    type: 'login/SET-IS-LOGGED-IN', value
} as const)

//thunks
export const loginTC = (data: any) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setIsLoggedInAC(true))
}

// types
type ActionsType = ReturnType<typeof setIsLoggedInAC>
