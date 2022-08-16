import s from '../ProfileInfo.module.css'
import React from 'react';
import { useState, useEffect } from 'react';

function Status(props) {

    let [EditMode, SetEditMode] = useState(false)
    let [Status, SetStatus] = useState(props.status)

    function DisableEdit() {
        SetEditMode(false)
        props.UpdateStatus(Status)
    }
    function EnableEdit() {
        if (props.UserId === String(props.MyId)) {
            SetEditMode(true)
        }
    }

    useEffect(() => { SetStatus(props.status) }, [props.status])

    function OnChange(e) {
        SetStatus(e.currentTarget.value)
    }

        return (
            <div className={s.status}>
                {
                    EditMode ? 
                        <input onChange={OnChange} autoFocus={true} onBlur={DisableEdit} value={Status}></input> : 
                        <span onDoubleClick={EnableEdit}>{Status ? Status : '-----'}</span>
                }
            </div>
        )
}

export default Status;