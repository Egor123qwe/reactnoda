import { AuthAPI, SecurityAPI } from '../API/API';

const SETAUTH = 'SETAUTH'
const DELETEAUTH = 'DELETEAUTH'
const SETCAPTCHA = 'SETCAPTCHA'

export let SetAuth = (data) => {
    let action = {type: SETAUTH, data: data}
    return action
}

export let DeleteAuth = () => {
    let action = {type: DELETEAUTH}
    return action
}

export let SetCaptcha = (Url) => {
    let action = {type: SETCAPTCHA, Url}
    return action
}

let initialState = {

        Auth : {
            id: '',
            email: '',
            login: '',
            isAuth: false,
            Captcha: ''
        }
}

let DialogReducer = (state = initialState, action) => {
    switch(action.type) {
        case SETAUTH: 
            return {
                ...state,
                Auth : {...state.Auth, id: action.data.id, email: action.data.email, login: action.data.login, isAuth: true}
            }
        case DELETEAUTH: 
            return {
                ...state,
                Auth : {...state.Auth, id: '', email: '', login: '', Captcha: '', isAuth: false}
            }
        case SETCAPTCHA: 
            return {
                ...state,
                Auth : {...state.Auth, Captcha: action.Url}
            }
        default: 
            return state
    }
}

export let AuthMeThunk = () => {
    return ( (dispatch) => {
        return AuthAPI.AuthMe()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(SetAuth(response.data.data))
            }
        })
    })
}

export let AuthLoginThunk = (email, password, rememberMe, captcha, setStatus) => {
    return ( (dispatch) => {
        AuthAPI.LoginMe(email, password, rememberMe, captcha)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(AuthMeThunk())
            }
            else {
                if (response.data.resultCode === 10) {
                    dispatch(GetCaptchaThunk())
                }
                setStatus({error: response.data.messages[0]})
            }
        })
    })
}

export let AuthLogOutThunk = () => {
    return ( (dispatch) => {
        AuthAPI.LogOut()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(DeleteAuth())
            }
        })
    })
}

let GetCaptchaThunk = () => {
    return ( (dispatch) => {
        SecurityAPI.GetCaptcha()
        .then(response => {
                dispatch(SetCaptcha(response.data.url))
        })
    })
}

export default DialogReducer;