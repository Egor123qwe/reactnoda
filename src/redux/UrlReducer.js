const SERUSERIDINURL = 'SERUSERIDINURL'

export let SetUserIdInURL = (id) => {
    let action = {type: SERUSERIDINURL, id}
    return action
}

let initialState = {
    UserIdInURL: {
        id: '',
    }
}

let UrlReducer = (state = initialState, action) => {
    switch(action.type) {
        case SERUSERIDINURL: 
                return {
                    ...state,
                    UserIdInURL: {...state.UserIdInURL, id: action.id}
                }
        default: 
            return state
    }
}

export default UrlReducer;