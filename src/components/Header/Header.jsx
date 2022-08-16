import s from './Header.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <div className={s.header}>
            <img alt='' src="https://auto.24tv.ua/resources/photos/news/202109/33374__d9df13cb-b9fc-44e1-9334-53e8d6453698.png?1632224175000" />

            {props.isAuth ? <span className={s.auth}>{props.Login} - <button className={s.logout} onClick={  props.AuthLogOutThunk }>Log Out</button></span> : 
                            <span className={s.auth}><NavLink className={s.login} to='/login'>Login</NavLink></span>}
        </div>
      );
}

export default Header;