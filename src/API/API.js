import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '0cce5b73-8f5a-46a8-8e1d-6c02864a8215'
    }
})


export const ProfileAPI = {
    GetUser(UserId) {
        return instance.get('profile/'+ UserId)
    },
    GetStatus(UserId) {
        return instance.get('/profile/status/'+ UserId)
    },
    UpdateStatus(status) {
        return instance.put('/profile/status' , { status: status })
    }
}

export const UsersAPI = {
    GetUsers(UsersCountOnPage, ChoosingPage) {
        return instance.get('users?count='+ UsersCountOnPage + '&page=' + ChoosingPage )
    },

    UnFollow(id) {
        return (instance.delete(('follow/' + id)))
    },

    Follow(id) {
        return (instance.post(('follow/' + id), {}, ))
    },
}
export const AuthAPI = {
    AuthMe() {
        return instance.get('auth/me')
    },
    LoginMe(email, password, rememberMe) {
        return instance.post('auth/login', {email, password, rememberMe, captcha: true})
    },
    LogOut() {
        return instance.delete('auth/login')
    }
}