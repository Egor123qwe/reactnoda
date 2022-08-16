import { AuthMeThunk } from "./AuthReducer"


const INITIALIZING = 'INITIALIZING'

export let SetInitializeStatus = () => {
    let action = {type: INITIALIZING}
    return action
}

let initialState = {
    initialize: {
        isInitialazed: false
    }
}

let AppReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZING: 
                return {
                    ...state,
                    initialize: {...state.initialize, isInitialazed: true}
                }
        default: 
            return state
    }
}

export let Initialize = () => {
    return ( (dispatch) => {
        let promise = dispatch(AuthMeThunk())
        promise.then(() => {
            dispatch(SetInitializeStatus())
        })
    })
}

export default AppReducer;