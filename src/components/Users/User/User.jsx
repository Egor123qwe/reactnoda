import s from './User.module.css'
import { NavLink } from 'react-router-dom';
import React from 'react';

function User(props) {

    let onClick = () => {
        props.OnToogleFollow(props.UserData.id, props.UserData.followed)
    }
    
    let buttonElement = props.UserData.followed ? <button disabled={props.isDisable} onClick={onClick}>Unfollow</button> : <button disabled={props.isDisable} onClick={onClick}>follow</button>

    let img = (props.UserData.photos.small == null) ? 'https://i.pinimg.com/736x/18/ca/6f/18ca6f28ec97d6afb3117d4b6aece2e6.jpg' : props.UserData.photos.small

    return (
        <div className={s.User}>
            <NavLink onClick={() => { props.SetUserIdInURL(props.UserData.id) }} to={'/profile/'+ props.UserData.id}><img src={img} alt=''/></NavLink>
            <div className={s.name}>{props.UserData.name}</div>
            <div className={s.status}>{props.UserData.status}</div>
            <div className={s.location}>{props.UserData.location}</div>
            {buttonElement}
        </div>
    );
}

export default User;