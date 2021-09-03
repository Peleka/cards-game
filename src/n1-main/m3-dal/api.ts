import axios from "axios";
import {GetPacksRequestDataType, UpdatePacksRequestDataType} from "../m2-bll/packs-reducer";

export const instance = axios.create(
    {
        baseURL: "https://neko-back.herokuapp.com/2.0/",
        withCredentials: true,
    })

export const authAPI = {
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete('auth/me')
    },
}

export const registerAPI = {
    register(email: string, password: string) {
        return instance.post('/auth/register', {email, password})
    }
}

export const recoverPasswordAPI = {
    recoverPassword(email: string, message: string) {
        return instance.post('/auth/forgot', {email, message})
    },
    setNewPassword(password: string, resetPasswordToken: string) {
        return instance.post('/auth/set-new-password', {password, resetPasswordToken})
    }
}

export const packsAPI = {
    getPacks(data: GetPacksRequestDataType) {
        const min = data.min ?? 0
        const max = data.max ?? 5
        const sort = data.sortPacks ?? 0
        const page = data.page ?? 10
        const pageCount = data.pageCount ?? '10'
        const userId = data.user_id ? `&user_id=${data.user_id}` : ''
        // const packName = data.packName ?? 'english'
        return instance
            .get(`/cards/pack?pageCount=${pageCount}&min=${min}&max=${max}&sortPacks=${sort}&page=${page}${userId}`)
    },
    addPack(data: AddPackRequestDataType) {
        return instance.post('/cards/pack', {cardsPack: data})
    },
    deletePack(id: string) {
        return instance.delete(`/cards/pack?id=${id}`)
    },
    updatePack(data: UpdatePacksRequestDataType) {
        return instance.put('/cards/pack', {cardsPack: data})
    },
}

export const cardsAPI = {
    getCards(cardsPack_id: string) {
        return instance.get(`/cards/card?cardsPack_id=${cardsPack_id}`)
    },
    addCard(data: CreateCardRequestDataType) {
        return instance.post('/cards/card', {card: {cardsPack_id: data.cardsPack_id}})
    },
    deleteCard(cardsPack_id: string) {
        return instance.delete(`/cards/card?id=${cardsPack_id}`)
    },
    updateCard(updateCardData: updateCardDataType) {
        return instance.put('cards/card', {card: {_id: updateCardData._id}})
    }
}

//types
export type updateCardDataType = {
    _id: string,
    question?: string,
    answer?: string
}

export type CreateCardRequestDataType = {
    cardsPack_id: string
    question?: string
    answer?: string
    grade?: number
    shots?: number
    type?: string
}

export type AddPackRequestDataType = {
    name?: string
    private?: boolean
}