import s from './Message.module.css';
import React from 'react';


type PropsType = {
    id: number,
    message: string
}

const Message: React.FC <PropsType> = (props) => {
	return (
		<div className={ (props.id === 1 ) ? s.MyMassage: s.NotMyMassage }>{props.message}</div>
	  );
}

export default Message;