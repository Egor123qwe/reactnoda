import s from './Message.module.css';
import React from 'react';

function isMyMessage(id) {
    if (id === '1'){
        return s.MyMassage;
    }
    else {
        return s.NotMyMassage;
    }
}

function Message(props) {
	return (
		<div className={isMyMessage(props.id)}>{props.message}</div>
	  );
}

export default Message;