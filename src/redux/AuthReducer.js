import { AuthAPI } from '../API/API';

const SETAUTH = 'SETAUTH'
const DELETEAUTH = 'DELETEAUTH'

export let SetAuth = (data) => {
    let action = {type: SETAUTH, data: data}
    return action
}

export let DeleteAuth = () => {
    let action = {type: DELETEAUTH}
    return action
}

let initialState = {

        Auth : {
            id: '',
            email: '',
            login: '',
            isAuth: false
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
                Auth : {...state.Auth, id: '', email: '', login: '', isAuth: false}
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

export let AuthLoginThunk = (email, password, rememberMe, setStatus) => {
    return ( (dispatch) => {
        AuthAPI.LoginMe(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(AuthMeThunk())
            }
            else {
                setStatus({error: 'Wrong login or password'})
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

export default DialogReducer;