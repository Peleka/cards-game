import {cardsAPI} from "../m3-dal/api";
import {Dispatch} from "redux";
import {setAppStatusAC} from "./app-reducer";

const initialState = {
    cardPacks: null as null | PackResponseType[]
}


type InitialStateType = typeof initialState

export const packsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'PACKS/SET-PACKS':
            return {...state, cardPacks: action.data}
        default:
            return state
    }
}


//action creators
export const setPacksAC = (data: PackResponseType[]) => ({
    type: 'PACKS/SET-PACKS',
    data,
} as const)

//thunk
export const getPacksTC = (data: GetPacksRequestDataType) => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'))
    cardsAPI.getPacks(data)
        .then(res => {
            dispatch(setPacksAC(res.data.cardPacks))
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch(() => {
            dispatch(setAppStatusAC('failed'))
            console.log('get packs error')
        })
}

//types
type ActionsType = ReturnType<typeof setPacksAC>
    | ReturnType<typeof setAppStatusAC>

export type GetPacksRequestDataType = {
    packName?: string
    min?: number
    max?: number
    sortPacks?: number
    page?: number
}
export type PackResponseType = {
    "_id": string,
    "user_id": string,
    "user_name": string,
    "private": boolean,
    "name": string,
    "path": string,
    "grade": number,
    "shots": number,
    "cardsCount": number,
    "type": string,
    "rating": number,
    "created": string,
    "updated": string,
    "more_id": string,
    "__v": number
}



