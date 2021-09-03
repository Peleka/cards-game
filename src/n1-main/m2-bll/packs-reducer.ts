import {AddPackRequestDataType, packsAPI} from "../m3-dal/api";
import {setAppStatusAC} from "./app-reducer";
import {AppThunkType} from "./store";

const initialState = {
    cardPacks: null as null | PackResponseType[],
    totalPacksCount: 0,
    pageSize: 10,
    currentPage: 1,
}

type InitialStateType = typeof initialState

export const packsReducer = (state = initialState, action: PacksActionsType): InitialStateType => {
    switch (action.type) {
        case 'PACKS/SET-PACKS':
            return {...state, cardPacks: action.data}
        case 'SET-TOTAL-PACKS-COUNT':
            return {...state, totalPacksCount: action.totalPacks}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.pageNumber}
        case 'PACKS/DEL-PACK':
            return state
        case 'PACKS/UPDATE-PACK':
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
export const delPackAC = (id: string) => ({
    type: 'PACKS/DEL-PACK',
    id
} as const)
export const updatePackAC = (data: UpdatePacksRequestDataType) => ({
    type: 'PACKS/UPDATE-PACK',
    data
} as const)

//thunk
export const getPacksTC = (data: GetPacksRequestDataType): AppThunkType => (dispatch) => {
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

export const addPackTC = (data: AddPackRequestDataType): AppThunkType => (dispatch) => {
    dispatch(setAppStatusAC('loading'))
    debugger
    packsAPI.addPack(data)
        .then(() => {
            dispatch(getPacksTC({
                pageCount: '10',
                page: 1,
            }))
            console.log('pack added successfully')
            dispatch(setAppStatusAC("succeeded"))
        })
        .catch(() => {
            dispatch(setAppStatusAC('failed'))
            console.log('add pack error')
        })
}

export const delPackTC = (id: string): AppThunkType => dispatch => {
    dispatch(setAppStatusAC('loading'))
    packsAPI.deletePack(id)
        .then(() => {
            dispatch(setAppStatusAC('succeeded'))
            getPacksTC({})
            console.log('pack deleted successfully')
        })
        .catch(() => {
            dispatch(setAppStatusAC('failed'))
            console.log('delete pack error')
        })
}

export const updatePackTC = (data: UpdatePacksRequestDataType): AppThunkType => (dispatch) => {
    dispatch(setAppStatusAC('loading'))
    packsAPI.updatePack(data)
        .then(() => {
            getPacksTC({})
            console.log('pack updated successfully')
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch(() => {
            dispatch(setAppStatusAC('failed'))
            console.log('update pack error')
        })
}

//types
export type PacksActionsType = ReturnType<typeof setPacksAC>
    | ReturnType<typeof setAppStatusAC>
    | ReturnType<typeof setTotalPacksCountAC>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof delPackAC>
    | ReturnType<typeof updatePackAC>

export type GetPacksRequestDataType = {
    packName?: string
    min?: number
    max?: number
    sortPacks?: number
    page?: number
    pageCount?: string
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
}

export type UpdatePacksRequestDataType = {
    _id: string
    name?: string
    private?: boolean
}
