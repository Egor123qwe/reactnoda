import { UsersAPI } from "../API/API";

const TOGGLEFOLLOW = 'TOGGLEFOLLOW';
const SETUSERS = 'SETUSERS';
const COOSEPAGE = 'COOSEPAGE';
const SETUSERSCOUNT = 'SETUSERSCOUNT';
const SETPRELOADER = 'SETPRELOADER';
const DISABLEBUTTON = 'DISABLEBUTTON';
const ENABLEBUTTON = 'ENABLEBUTTON';

export let ToogleFollow = (id) => {
    let action = {type: TOGGLEFOLLOW, id: id}
    return action
}

export let SetUsers = (UsersData) => {
    let action = {type: SETUSERS, UsersData: UsersData}
    return action
}

export let OnCoosePage = (Page) => {
    let action = {type: COOSEPAGE, Page: Page}
    return action
}

export let SetUsersCount = (UsersCount) => {
    let action = {type: SETUSERSCOUNT, UsersCount: UsersCount}
    return action
}

export let SetPreloader = () => {
    let action = {type: SETPRELOADER}
    return action
}

export let DisableButton = (id) => {
    let action = {type: DISABLEBUTTON, id: id}
    return action
}

export let EnableButton = (id) => {
    let action = {type: ENABLEBUTTON, id: id}
    return action
}

let initialState = {
    UsersData: [],
    UsersCountOnPage: 4,
    UsersCount: 1,
    ChoosingPage: 1,
    Preloader: false,
    DisabledButtons: []
}

let UsersReducer = (state = initialState, action) => {

    switch(action.type) {
        case TOGGLEFOLLOW:
            return {
                ...state,
                UsersData: state.UsersData.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: u.followed ? false : true }
                    }
                    return u
                })
            }
        case SETUSERS:
            return {...state, UsersData: [ ...action.UsersData]}
        case COOSEPAGE:
            return {...state, ChoosingPage: action.Page}
        case SETUSERSCOUNT:
            return {...state, UsersCount: action.UsersCount}
        case SETPRELOADER:
            return {...state, Preloader: state.Preloader ? false : true}
        case ENABLEBUTTON:
            let DisabledButtonsCopy = [...state.DisabledButtons]
            delete DisabledButtonsCopy[DisabledButtonsCopy.indexOf(action.id)]
            return {...state,
                DisabledButtons: DisabledButtonsCopy
            }
        case DISABLEBUTTON:
            return {...state,
                DisabledButtons: [...state.DisabledButtons, action.id]
            }
        default:
            return state;
    }
}

export let GetUsersThunk = (UsersCountOnPage, ChoosingPage) => {
    return ( (dispatch) => {
        dispatch(SetPreloader())
        UsersAPI.GetUsers(UsersCountOnPage, ChoosingPage).then(response => {
                dispatch(SetUsers(response.data.items))
                dispatch(SetUsersCount(response.data.totalCount))
                dispatch(SetPreloader())
        })
    })
}

function toggleFollowHelper(MethodAPI, id, dispatch) {
    dispatch(DisableButton(id))
    MethodAPI(id).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(ToogleFollow(id))
            dispatch(EnableButton(id))
        }
    })
}

export let UnFollowThunk = (id) => {
    return ( (dispatch) => {
        toggleFollowHelper(UsersAPI.UnFollow, id, dispatch)
    })
}

export let FollowThunk = (id) => {
    return ( (dispatch) => {
        toggleFollowHelper(UsersAPI.Follow, id, dispatch)
    })
}

export let GetUsersOnNewPageThunk = (UsersCountOnPage, page) => {
    return ( (dispatch) => {
        dispatch(SetPreloader())
        dispatch(OnCoosePage(page))
        UsersAPI.GetUsers(UsersCountOnPage, page).then(response => {
                dispatch(SetUsers(response.data.items))
                dispatch(SetUsersCount(response.data.totalCount))
                dispatch(SetPreloader())
        })
    })
}

export default UsersReducer;