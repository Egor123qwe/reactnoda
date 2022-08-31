import React from "react";
import s from '../Users.module.css'
import { NavLink } from 'react-router-dom';

type PropsType = {
    OnChoosePage: (PageNumber: number) => void,
    item: number,
    UsersCountOnPage: number,
    ChoosingPage: number

}


const PageItem: React.FC<PropsType> = (props) => {

    return (
        <NavLink   onClick = {() => (props.OnChoosePage(props.item))}
                   to={'/users?count=' + props.UsersCountOnPage + '&page=' + props.item} 
                   className={props.ChoosingPage === props.item ? s.ChoosingPage : s.Page}>
                   {props.item}
        </NavLink> 
    )

}

export default PageItem;