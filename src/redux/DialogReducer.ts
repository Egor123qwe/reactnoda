const SENDMESSAGE = 'Dialogs/SENDMESSAGE'

type SendMessageActionType = { type: typeof SENDMESSAGE, Message: string }
export const SendMessage = (Message: string): SendMessageActionType => ( { type: SENDMESSAGE, Message } )

type DialogItemType = { NickName: string, id: number } //
type MessageType = { message : string, id : number } //


type initialStateType = typeof initialState

let initialState = {
        DialogItemData : [
            {NickName : 'Yagor', id : 1},
            {NickName : 'Nickita', id : 2},
            {NickName : 'Vova', id : 3},
            {NickName : 'Sanshain', id : 4},
            {NickName : 'Slava', id : 5}
        ] as Array <DialogItemType>,
        MessageData : [
            {message : 'Привет, я Егор', id : 2},
            {message : 'Я знаю!', id : 1},
            {message : 'Я тоже?', id : 2}
        ] as Array <MessageType>
}

let DialogReducer = (state = initialState, action: any): initialStateType => {

    switch(action.type) {
        case SENDMESSAGE: 
            let message = {message: action.Message, id: 1}
            return {
                ...state,
                MessageData: [...state.MessageData, message]
            }
        default: 
            return state
    }
}

export default DialogReducer;