import { ProfileAPI } from '../API/API';

const ADDPOST = 'ADDPOST'
const SETPROFILEINFO = 'SETPROFILEINFO'
const SETUSERID = 'SETUSERID'
const SETPRELOADER = 'SETPRELOADER';
const SETSTAUS = 'SETSTAUS';
const SETPROFILEIMAGE = 'SETPROFILEIMAGE';

type AddPostAction = { type: typeof ADDPOST, Post: object }
export const AddPost = (Post: object): AddPostAction => ({ type: ADDPOST, Post })

type SetProfileImageAction = { type: typeof SETPROFILEIMAGE, photos: object }
export let SetProfileImage = (photos: object): SetProfileImageAction => ({ type: SETPROFILEIMAGE, photos })

type SetProfileInfoAction = { type: typeof SETPROFILEINFO, data: object }
export let SetProfileInfo = (data: object): SetProfileInfoAction => ({ type: SETPROFILEINFO, data: data })

type SetUserIdAction = { type: typeof SETUSERID, UserId: number }
export let SetUserId = (UserId: number): SetUserIdAction => ( {type: SETUSERID, UserId: UserId} )

type SetPreloaderAction = { type: typeof SETPRELOADER }
export let SetPreloader = (): SetPreloaderAction => ( {type: SETPRELOADER} )

type SetStatusAction = { type: typeof SETSTAUS, status: string }
export let SetStatus = (status: string): SetStatusAction => ( {type: SETSTAUS, status} )


type PostType = { text : string, id: number } //

export type initialStateTypeProfileReducer = typeof initialState


let ProfileInfoData = {
    Preloader: false as boolean,
    FullName: null as null | string,
    status: null as null | string,
    lookingForAJob: null as null | string,
    lookingForAJobDescription: null as null | string,
    AboutMe: null as null | string,
    ProfilePhoto: null as null | string,
    SetPreloader: false as boolean,
    contacts: {
        github: null as null | string,
        vk: null as null | string,
        facebook: null as null | string,
        instagram: null as null | string,
        twitter: null as null | string,
        website: null as null | string,
        youtube: null as null | string,
        mainLink: null as null | string,
    }
}

export type ProfileInfoDataType = typeof ProfileInfoData



let initialState = { 

    PostsData: [
        {text : 'это мой первый хиииит', id: 1},
        {text : 'подписчики я вас люблю!', id: 2},
        ] as Array <PostType>,
    ProfileInfoData: ProfileInfoData,
    MyUserId: null as number | null,
    UserId: null as number | null
}


let ProfileReducer = (state = initialState, action: any): initialStateTypeProfileReducer => {

        switch(action.type) {
            case ADDPOST: 
                let post = {text : action.Post, id: 3}
                return {
                    ...state,
                    PostsData: [post, ...state.PostsData],
                }
            case SETPRELOADER:
                return {...state, ProfileInfoData: {...state.ProfileInfoData, Preloader: state.ProfileInfoData.Preloader ? false : true }  }
            case SETPROFILEIMAGE:
                return {...state, ProfileInfoData: {...state.ProfileInfoData, ProfilePhoto: action.photos.large }  }
            case SETUSERID:
                return {
                    ...state, 
                    UserId: action.UserId
                }
            case SETSTAUS: 
            
                return {
                    ...state,
                    ProfileInfoData: {...state.ProfileInfoData, status: action.status}
                }
            case SETPROFILEINFO: 
                let photo = action.data.photos.large ? action.data.photos.large : 'https://i.pinimg.com/736x/18/ca/6f/18ca6f28ec97d6afb3117d4b6aece2e6.jpg'
                return {
                    ...state,
                    UserId: action.data.userId,
                    ProfileInfoData: {  ...state.ProfileInfoData,
                                        lookingForAJobDescription: action.data.lookingForAJobDescription,
                                        lookingForAJob: action.data.lookingForAJob,
                                        FullName : action.data.fullName,
                                        ProfilePhoto: photo,
                                        AboutMe: action.data.aboutMe,
                                        contacts: {...state.ProfileInfoData.contacts, 
                                            github: action.data.contacts.github,
                                            vk: action.data.contacts.vk,
                                        }
                                    }
                }
            default: 
                return state;
        }
}

export let GetUserThunk = (UserId: number) => {
    return ( (dispatch: any) => {
        dispatch(SetPreloader())
        dispatch(SetUserId(UserId))
        ProfileAPI.GetUser(UserId)
            .then(data => {
                dispatch(SetProfileInfo(data.data))
                dispatch(SetPreloader())
            })
    })
}

export let GetStatus = (UserId: number) => {
    return ( (dispatch: any) => {
        ProfileAPI.GetStatus(UserId)
            .then(response => {
                dispatch(SetStatus(response.data))
            })
    })
}

export let UpdateStatus = (status: string) => {
    return ( (dispatch: any) => {
        ProfileAPI.UpdateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(SetStatus(status))
                }
            })
    })
}

export let SetProfileImageThunk = (file: object) => {
    return ( (dispatch: any) => {
        ProfileAPI.SetImage(file).then(response => {
            dispatch(SetProfileImage(response.data.data.photos))
        })
    })
}

export let SetProfileInfoThunk = (data: object, UserId: number, setStatus: (object: object) => object) => {
    return ( (dispatch: any) => {
        return ProfileAPI.SetProfileInfo(data).then(response => {
            return new Promise((resolve) => {
                if(response.data.resultCode === 0) {
                    dispatch(GetUserThunk(UserId))
                    setStatus({error: null})
                }
                else {
                    setStatus({error: response.data.messages[0]})
                }
                resolve(response)
            })
        })
    })
}

export default ProfileReducer;