const SERUSERIDINURL = 'SERUSERIDINURL'

type SetUserIdInURLAction = { type: typeof SERUSERIDINURL, id: number }
export let SetUserIdInURL = (id: number): SetUserIdInURLAction => ( {type: SERUSERIDINURL, id} )

let initialState = {
    UserIdInURL: {
        id: '',
    }
}

type initialStateType = typeof initialState


let UrlReducer = (state = initialState, action: any): initialStateType => {
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