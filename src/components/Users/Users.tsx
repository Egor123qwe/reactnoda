import React, { PropsWithChildren } from "react";
import User from "./User/User";
import s from './Users.module.css'
import Preloader from '../Common/Preloader/Preloader';
import Paginator from './Paginator/Paginator';
import { UserDataType } from "../../redux/TypesDiff";

type PropsType = {
    DisabledButtons: boolean,
    UsersCount: number,
    OnChoosePage: (PageMumber: number) => void,
    UsersCountOnPage: number,
    ChoosingPage: number,
    SetPreloader: boolean,
    UsersData: Array<UserDataType>,
    SetUserIdInURL: (id: number) => void,
    OnToogleFollow: (Userid: number, followed: boolean) => void
}

const Users: React.FC <PropsType> = (props) => {

    let UsersElements = props.UsersData.map(e => {
        let isDisable = false//props.DisabledButtons.indexOf(e.id) !== -1 ? true : false
        return <User SetUserIdInURL={props.SetUserIdInURL} isDisable={isDisable} OnToogleFollow={props.OnToogleFollow} UserData = {e}/>
    })

    return (
        <div className={s.UsersPage}>
            {props.SetPreloader ? <Preloader/> : <></>}
            <Paginator UsersCount={props.UsersCount} UsersCountOnPage={props.UsersCountOnPage} 
                        OnChoosePage={props.OnChoosePage} ChoosingPage={props.ChoosingPage} /> 
            { UsersElements }
        </div>
    )

}

export default Users;