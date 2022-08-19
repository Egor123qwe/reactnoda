import { ProfileAPI } from '../API/API';

const ADDPOST = 'ADDPOST'
const SETPROFILEINFO = 'SETPROFILEINFO'
const SETUSERID = 'SETUSERID'
const SETPRELOADER = 'SETPRELOADER';
const SETSTAUS = 'SETSTAUS';
const SETPROFILEIMAGE = 'SETPROFILEIMAGE';

export const AddPost = (Post) => {
    let action = {type: ADDPOST, Post}
    return action
}

export let SetProfileImage = (photos) => {
    let action = {type: SETPROFILEIMAGE, photos}
    return action
}

export let SetProfileInfo = (data) => {
    let action = {type: SETPROFILEINFO, data: data}
    return action
}

export let SetUserId = (UserId) => {
    let action = {type: SETUSERID, UserId: UserId}
    return action
}

export let SetPreloader = () => {
    let action = {type: SETPRELOADER}
    return action
}

export let SetStatus = (status) => {
    let action = {type: SETSTAUS, status}
    return action
}

let initialState = { 

    PostsData : [
        {text : 'это мой первый хиииит', id: '1'},
        {text : 'подписчики я вас люблю!', id: '2'},
        ],
    ProfileInfoData: {
        FullName: '',
        status: '',
        lookingForAJob: '',
        lookingForAJobDescription: '',
        AboutMe: '',
        ProfilePhoto: '',
        ImageFile: null,
        SetPreloader: false,
        contacts: {
            github:'',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        }
    },
    MyUserId: '13865',
    UserId: '2'
}

let ProfileReducer = (state = initialState, action) => {

        switch(action.type) {
            case ADDPOST: 
                let post = {text : action.Post, id: '3'}
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
                console.log()
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

export let GetUserThunk = (UserId) => {
    return ( (dispatch) => {
        dispatch(SetPreloader())
        dispatch(SetUserId(UserId))
        ProfileAPI.GetUser(UserId)
            .then(data => {
                dispatch(SetProfileInfo(data.data))
                dispatch(SetPreloader())
            })
    })
}

export let GetStatus = (UserId) => {
    return ( (dispatch) => {
        ProfileAPI.GetStatus(UserId)
            .then(response => {
                dispatch(SetStatus(response.data))
            })
    })
}

export let UpdateStatus = (status) => {
    return ( (dispatch) => {
        ProfileAPI.UpdateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(SetStatus(status))
                }
            })
    })
}

export let SetProfileImageThunk = (file) => {
    return ( (dispatch) => {
        ProfileAPI.SetImage(file).then(response => {
            dispatch(SetProfileImage(response.data.data.photos))
        })
    })
}

export let SetProfileInfoThunk = (data) => {
    return ( (dispatch) => {
        ProfileAPI.SetProfileInfo(data).then(response => {
            console.log(response)
        })
    })
}

export default ProfileReducer;