import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

let CssClass = () => {
	return (
		select => select.isActive ? s.active : s.item
	);
}

function DialogItem(props) {
	return (
		<div><NavLink className={CssClass()} to={"/dialogs/" + props.id}>{props.NickName}</NavLink></div>
	  );
}

export default DialogItem;