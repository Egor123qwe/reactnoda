import DialogReducer from './DialogReducer';
import ProfileReducer from './ProfileReducer';

let store = {

    _state : {

        ProfilePage : { 
            PostsData : [
                {text : 'это мой первый хиииит', id: '1'},
                {text : 'подписчики я вас люблю!', id: '2'},
            ],
            TextArea : ''
        },

        DialogsPage : {
            DialogItemData : [
                {NickName : 'Yagor', id : '1'},
                {NickName : 'Nickita', id : '2'},
                {NickName : 'Vova', id : '3'},
                {NickName : 'Sanshain', id : '4'},
                {NickName : 'Slava', id : '5'}
            ],
            MessageData : [
                {message : 'Привет, я Егор', id : '2'},
                {message : 'Я знаю!', id : '1'},
                {message : 'Я тоже?', id : '2'}
            ],
            TextArea : ''
        },

    },

    getState() {
        return this._state;
    },

    callSubscriber() {},

    subscribe(observer) {
        this.callSubscriber = observer;
    },

    dispatch(action) {
        this._state.DialogsPage = DialogReducer(this._state.DialogsPage, action)
        this._state.ProfilePage = ProfileReducer(this._state.ProfilePage, action)
        this.callSubscriber();
    }

}


export default store;
window.store = store;