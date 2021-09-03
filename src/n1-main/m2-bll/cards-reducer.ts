import {setAppStatusAC} from "./app-reducer";
import {cardsAPI, CreateCardRequestDataType} from "../m3-dal/api";
import {AppThunkType} from "./store";

const initialState = {
    cards: null as Array<CardType> | null
}

type InitialStateType = typeof initialState

export const cardsReducer = (state: InitialStateType = initialState, action: CardsActionsType): InitialStateType => {
    switch (action.type) {
        case 'CARDS/SET-CARDS':
            return {...state, cards: action.data}
        default:
            return state
    }
}
//action creators
export const setCardsAC = (data: CardType[]) => ({
    type: 'CARDS/SET-CARDS',
    data
} as const)


//thunk
export const getCardsTC = (data: GetCardsRequestDataType): AppThunkType => dispatch => {
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

export const addCardTC = (data: CreateCardRequestDataType): AppThunkType => dispatch => {
    cardsAPI.addCard(data)
        .then(() => {
            dispatch(getCardsTC(data))
            console.log("card added succeeded")
        })
        .catch(e => {
            const error = e.res ? e.res.data.error : (`Add card failed: ${e.message}.`)
            alert(error)
        })
}

//types
export type CardsActionsType = ReturnType<typeof setCardsAC> |
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

export type CardType = {
    cardsPack_id: string
    answer?: string
    comments?: string
    created?: string
    grade?: number
    more_id?: string
    question?: string
    questionImg?: string
    rating?: number
    shots?: number
    type?: string
    updated?: string
    user_id?: string
    __v?: number
    _id?: string
}
