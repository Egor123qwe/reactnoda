import { AuthMeThunk } from "./AuthReducer"

const INITIALIZING = 'INITIALIZING'


type SetInitializeStatusAction = { type: typeof INITIALIZING }
export let SetInitializeStatus = (): SetInitializeStatusAction => ({type: INITIALIZING})


type initialStateType = typeof initialState

let initialState = {
    initialize: {
        isInitialazed: false as boolean
    }
}

let AppReducer = (state = initialState, action: any): initialStateType => {
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
    return ( (dispatch: any) => {
        let promise = dispatch(AuthMeThunk())
        promise.then(() => {
            dispatch(SetInitializeStatus())
        })
    })
}

export default AppReducer;