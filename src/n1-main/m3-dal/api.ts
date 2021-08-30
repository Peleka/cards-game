import axios from "axios";
import {GetPacksRequestDataType} from "../m2-bll/packs-reducer";

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

export const cardsAPI = {
    getPacks(data: GetPacksRequestDataType) {
        const min = data.min ?? 3
        const max = data.max ?? 9
        const sort = data.sortPacks ?? 0
        const page = data.page ?? 1
       // const packName = data.packName ?? 'english'
        return instance
            .get(`/cards/pack?pageCount=5&min=${min}&max=${max}&sortPacks=${sort}&page=${page}`)
    },
    addPacks() {
        return instance.post('/cards/pack')
    },
    deletePacks() {
        return instance.delete('/cards/pack')
    },
    updatePacks() {
        return instance.put('/cards/pack')
    },
}

//types




