import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import AddMessageForm from './AddMessageForm';
import { initialStateTypeDialogReducer } from '../../redux/DialogReducer';


type PropsType = {
	SendMessage: (MessageText: string) => void,
	DialogPage: initialStateTypeDialogReducer
}

const Dialogs: React.FC<PropsType> = (props) => {
	
	let MessageElements = props.DialogPage.MessageData.map( e => <Message message = {e.message} id={e.id} />);
	let DialogItemElements = props.DialogPage.DialogItemData.map(e => <DialogItem NickName={e.NickName} id={e.id}/>)

	return (
		<div className={s.dialogs}>
			<div className= {s.dialogItems}>
				{DialogItemElements}
			</div>
			<div className={s.massages}>
				{MessageElements}
				<AddMessageForm SendMessage={props.SendMessage}/>
			</div>
		</div>
	  );
}

export default Dialogs;