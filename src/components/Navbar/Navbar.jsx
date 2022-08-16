import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

const CssClass = () => {
    return (
        select => select.isActive ? s.active : s.item
    );
}

function Navbar(props) {
    return (
        <nav className={s.Navbar}>
            <div><NavLink onClick={ () => { props.SetUserIdInURL(props.UserId) } }  to={'/profile/' + props.UserId} className={CssClass()}>Profile</NavLink></div>
            <div><NavLink to="/dialogs" className={CssClass()}>Messages</NavLink></div>
            <div><NavLink to="/users" className={CssClass()}>Users</NavLink></div>
            <div><NavLink to="/news" className={CssClass()}>News</NavLink></div>
            <div><NavLink to="/music" className={CssClass()}>Music</NavLink></div>
            <div><NavLink to="/settings" className={CssClass()}>Settings</NavLink></div>
        </nav>
      );
}

export default Navbar;