import { AuthAPI, SecurityAPI } from '../API/API';

const SETAUTH = 'SETAUTH'
const DELETEAUTH = 'DELETEAUTH'
const SETCAPTCHA = 'SETCAPTCHA'


type SetAuthAction = { type: typeof SETAUTH, data: object }
export let SetAuth = (data: object): SetAuthAction => ( {type: SETAUTH, data: data} )

type DeleteAuthAction = { type: typeof DELETEAUTH }
export let DeleteAuth = (): DeleteAuthAction => ( {type: DELETEAUTH} )

type SetCaptchaAction = { type: typeof SETCAPTCHA, Url: string}
export let SetCaptcha = (Url: string): SetCaptchaAction => ( {type: SETCAPTCHA, Url} )


type initialStateType = typeof initialState

let initialState = {
        Auth : {
            id: null as null | number,
            email: '' as null | string,
            login: '' as null | string,
            isAuth: false as boolean,
            Captcha: '' as string
        }
}

let DialogReducer = (state = initialState, action: any): initialStateType => {
    switch(action.type) {
        case SETAUTH: 
            return {
                ...state,
                Auth : {...state.Auth, id: action.data.id, email: action.data.email, login: action.data.login, isAuth: true}
            }
        case DELETEAUTH: 
            return {
                ...state,
                Auth : {...state.Auth, id: null, email: '', login: '', Captcha: '', isAuth: false}
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
    return ( (dispatch: any) => {
        return AuthAPI.AuthMe()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(SetAuth(response.data.data))
            }
        })
    })
}



export let AuthLoginThunk = (email: string, password: string, rememberMe: boolean, captcha: string, setStatus: (object: object) => object) => {
    return ( (dispatch: any) => {
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
    return ( (dispatch: any) => {
        AuthAPI.LogOut()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(DeleteAuth())
            }
        })
    })
}

let GetCaptchaThunk = () => {
    return ( (dispatch: any) => {
        SecurityAPI.GetCaptcha()
        .then(response => {
                dispatch(SetCaptcha(response.data.url))
        })
    })
}

export default DialogReducer;