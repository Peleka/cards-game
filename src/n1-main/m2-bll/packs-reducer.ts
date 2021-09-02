import {packsAPI} from "../m3-dal/api";
import {Dispatch} from "redux";
import {setAppStatusAC} from "./app-reducer";

const initialState = {
    cardPacks: null as null | PackResponseType[],
    totalPacksCount: 0,
    pageSize: 10,
    currentPage: 1,
}

type InitialStateType = typeof initialState

export const packsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'PACKS/SET-PACKS':
            return {...state, cardPacks: action.data}
        case 'SET-TOTAL-PACKS-COUNT':
            return {...state, totalPacksCount: action.totalPacks}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.pageNumber}
        case 'PACKS/DEL-PACKS':
            return state
        case 'PACKS/UPDATE-PACKS':
            return state
        default:
            return state
    }

}

//action creators
export const setPacksAC = (data: PackResponseType[]) => ({
    type: 'PACKS/SET-PACKS',
    data,
} as const)
const setTotalPacksCountAC = (totalPacks: number) => ({
    type: 'SET-TOTAL-PACKS-COUNT',
    totalPacks,
} as const)
export const setCurrentPage = (pageNumber: number) => ({
    type: 'SET-CURRENT-PAGE',
    pageNumber,
} as const)
export const delPacksAC = (id: string) => ({
    type: 'PACKS/DEL-PACKS',
    id
} as const)
export const updatePacksAC = (data: UpdatePacksRequestData) => ({
    type: 'PACKS/UPDATE-PACKS',
    data
} as const)

//thunk
export const getPacksTC = (data: GetPacksRequestDataType) => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'))
    packsAPI.getPacks(data)
      .then(res => {
          dispatch(setTotalPacksCountAC(res.data.cardPacksTotalCount))
          dispatch(setPacksAC(res.data.cardPacks))
          dispatch(setAppStatusAC('succeeded'))
      })
      .catch(() => {
          dispatch(setAppStatusAC('failed'))
          console.log('get packs error')
      })
}

export const delPacksTC = (id: string) => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'))
    packsAPI.deletePacks(id)
      .then(res => {
          dispatch(delPacksAC(res.data.id))
          dispatch(setAppStatusAC('succeeded'))
      })
      .catch(() => {
          dispatch(setAppStatusAC('failed'))
          console.log('get packs error')
      })
}

export const updatePacksTC = (data: UpdatePacksRequestData) => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'))
    packsAPI.updatePacks()
    .then(res => {
        dispatch(updatePacksAC(res.data.cardPacks._id))
    })
    .catch(() => {
        dispatch(setAppStatusAC('failed'))
        console.log('get packs error')
    })
}

//types
type ActionsType = ReturnType<typeof setPacksAC>
  | ReturnType<typeof setAppStatusAC>
  | ReturnType<typeof setTotalPacksCountAC>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof delPacksAC>
  | ReturnType<typeof updatePacksAC>

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
    "__v": number,
    delPack: (id: string) => void
    updatePacks: (data: UpdatePacksRequestData) => void
}

export type UpdatePacksRequestData = {
    cardsPack: {
        _id: string
        name: string
        private: boolean
    }
}
