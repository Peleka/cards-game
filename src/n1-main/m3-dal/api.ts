import axios from "axios";

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
    }
}