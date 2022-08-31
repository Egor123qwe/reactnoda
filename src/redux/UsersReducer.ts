import { UsersAPI } from "../API/API";
import { UserDataType } from "./TypesDiff";

const TOGGLEFOLLOW = 'TOGGLEFOLLOW';
const SETUSERS = 'SETUSERS';
const COOSEPAGE = 'COOSEPAGE';
const SETUSERSCOUNT = 'SETUSERSCOUNT';
const SETPRELOADER = 'SETPRELOADER';
const DISABLEBUTTON = 'DISABLEBUTTON';
const ENABLEBUTTON = 'ENABLEBUTTON';


type ToogleFollowAction = { type: typeof TOGGLEFOLLOW, id: number }
export let ToogleFollow = (id: number): ToogleFollowAction => ( {type: TOGGLEFOLLOW, id: id} )

type SetUsersAction = { type: typeof SETUSERS, UsersData: object }
export let SetUsers = (UsersData: object): SetUsersAction => ( {type: SETUSERS, UsersData: UsersData} )

type OnCoosePageAction = { type: typeof COOSEPAGE, Page: number }
export let OnCoosePage = (Page: number): OnCoosePageAction => ( {type: COOSEPAGE, Page: Page} )

type SetUsersCountAction = { type: typeof SETUSERSCOUNT, UsersCount: number }
export let SetUsersCount = (UsersCount: number): SetUsersCountAction => ( {type: SETUSERSCOUNT, UsersCount: UsersCount} )

type SetPreloaderAction = { type: typeof SETPRELOADER }
export let SetPreloader = (): SetPreloaderAction => ( {type: SETPRELOADER} )

type DisableButtonAction = { type: typeof DISABLEBUTTON, id: number }
export let DisableButton = (id: number): DisableButtonAction => ( {type: DISABLEBUTTON, id: id} )

type EnableButtonAction = { type: typeof ENABLEBUTTON, id: number }
export let EnableButton = (id: number): EnableButtonAction => ( {type: ENABLEBUTTON, id: id} )


let initialState = {
    UsersData: [] as Array<UserDataType>,
    UsersCountOnPage: 4,
    UsersCount: 1,
    ChoosingPage: 1,
    Preloader: false,
    DisabledButtons: []
}

type initialStateType = typeof initialState

let UsersReducer = (state = initialState, action: any): initialStateType => {

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
            //delete DisabledButtonsCopy[DisabledButtonsCopy.indexOf(action.id)]
            return {...state,
                DisabledButtons: DisabledButtonsCopy
            }
        case DISABLEBUTTON:
            return {...state,
                //DisabledButtons: [...state.DisabledButtons, action.id]
            }
        default:
            return state;
    }
}

export let GetUsersThunk = (UsersCountOnPage: number, ChoosingPage: number) => {
    return ( (dispatch: any) => {
        dispatch(SetPreloader())
        UsersAPI.GetUsers(UsersCountOnPage, ChoosingPage).then(response => {
                dispatch(SetUsers(response.data.items))
                dispatch(SetUsersCount(response.data.totalCount))
                dispatch(SetPreloader())
        })
    })
}

//function toggleFollowHelper(MethodAPI: any, id: number, dispatch: any) {
//    dispatch(DisableButton(id))
//    MethodAPI(id).then(response => {
//        if (response.data.resultCode === 0) {
//            dispatch(ToogleFollow(id))
//            dispatch(EnableButton(id))
//        }
//    })
//}

export let UnFollowThunk = (id: number) => {
    return ( (dispatch: any) => {
        //toggleFollowHelper(UsersAPI.UnFollow, id, dispatch)
    })
}

export let FollowThunk = (id: number) => {
    return ( (dispatch: any) => {
        //toggleFollowHelper(UsersAPI.Follow, id, dispatch)
    })
}

export let GetUsersOnNewPageThunk = (UsersCountOnPage: number, page: number) => {
    return ( (dispatch: any) => {
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