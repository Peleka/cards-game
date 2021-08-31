import {Dispatch} from "redux";
import {setAppStatusAC} from "./app-reducer";
import {cardsAPI} from "../m3-dal/api";

const initialState = {
    cards: null as null | CardResponseType[]
}

type InitialStateType = typeof initialState

export const cardsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'CARDS/SET-CARDS':
            return {...state, cards: action.data}
        default:
            return state
    }
}
//action creators
export const setCardsAC = (data: CardResponseType[]) => ({
    type: 'CARDS/SET-CARDS',
    data
} as const)

//thunk
export const getCardsTC = (data: GetCardsRequestDataType) => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'))
    cardsAPI.getCards(data)
        .then(res => {
            dispatch(setCardsAC(res.data.cards))
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch(() => {
            dispatch(setAppStatusAC('failed'))
            console.log('get cards error')
        })
}

//types
type ActionsType = ReturnType<typeof setCardsAC> |
    ReturnType<typeof setAppStatusAC>

export type GetCardsRequestDataType = {
    cardAnswer?: string
    cardQuestion?: string
    cardsPack_id?: string
    min?: number
    max?: number
    sortCards?: number
    page?: number
    pageCount?: number
}

export type CardResponseType = {
    answer: string
    cardsPack_id: string
    comments: string
    created: string
    grade: number
    more_id: string
    question: string
    questionImg: string
    rating: number
    shots: number
    type: string
    updated: string
    user_id: string
    __v: number
    _id: string
}
