const SENDMESSAGE = 'SENDMESSAGE'

export const SendMessage = (Message) => {
    let action = {type: SENDMESSAGE, Message}
    return action
}

let initialState = {

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
        ]
}

let DialogReducer = (state = initialState, action) => {

    switch(action.type) {
        case SENDMESSAGE: 
            let message = {message : action.Message, id: '1'}
            return {
                ...state,
                MessageData: [...state.MessageData, message]
            }
        default: 
            return state
    }
}

export default DialogReducer;