import axios from "axios";
import {GetPacksRequestDataType} from "../m2-bll/packs-reducer";
import {GetCardsRequestDataType} from "../m2-bll/cards-reducer";

export const instance = axios.create(
    {
        baseURL: "https://neko-back.herokuapp.com/2.0/",
        // baseURL: `http://localhost:7542/2.0`,
        withCredentials: true,
    })

export const authAPI = {
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete('auth/me')
    }
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
        const min = data.min ?? 3
        const max = data.max ?? 6
        const sort = data.sortPacks ?? 0
        const page = data.page ?? 1
        // const packName = data.packName ?? 'english'
        return instance
            .get(`/cards/pack?pageCount=10&min=${min}&max=${max}&sortPacks=${sort}&page=${page}`)
    },
    addPack(data: AddPackRequestDataType) {
        return instance.post('/cards/pack', {cardsPack: data})
    },
    deletePacks(id: string) {
        return instance.delete(`/cards/pack?id=${id}`)
    },
    updatePacks() {
        return instance.put('/cards/pack')
    },
}

export const cardsAPI = {
    getCards(data: GetCardsRequestDataType,) {
        // const cardAnswer = data.cardAnswer ?? 'english'
        // const cardQuestion = data.cardQuestion ?? 'english'
        const cardsPack_id = data.cardsPack_id ?? '612ce7f59f1a7900041d6f3a'
        // const min = data.min ?? 1
        // const max = data.max ?? 4
        // const sort = data.sortCards ?? 0
        // const page = data.page ?? 1


        return instance
            .get(`/cards/card?cardsPack_id=${cardsPack_id}`)
    },
    addCards() {
        return instance.post('/cards/card')
    },
    deleteCards() {
        return instance.delete('/cards/card')
    },
    updateCards() {
        return instance.put('/cards/card')
    },
}

//types


export type AddPackRequestDataType = {
    name?: string
    private?: boolean
}