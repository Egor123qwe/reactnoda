import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

let CssClass = () => {
	return function (select: any ) {
		return select.isActive ? s.active : s.item;
	}
}


type PropsType = {
	id: number,
	NickName: string
}

const DialogItem: React.FC<PropsType> = (props) => {
	return (
		<div><NavLink key={props.id} className={CssClass()} to={"/dialogs/" + props.id}>{props.NickName}</NavLink></div>
	  );
}

export default DialogItem;