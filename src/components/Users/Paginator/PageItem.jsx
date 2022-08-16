import React from "react";
import s from '../Users.module.css'


function PageItem(props) {

    return (
        <span   onClick = {() => (props.OnChoosePage(props.item))}
                to={'/users?count=' + props.UsersCountOnPage + '&page=' + props.item} 
                className={props.ChoosingPage === props.item ? s.ChoosingPage : s.Page}>
                {props.item}
        </span> 
    )

}

export default PageItem;