import s from '../ProfileInfo.module.css'
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function ProfileImage(props) {

    let [ProfileImage, SetProfileImage] = useState('')

    function OnSelectPhoto(e) {
        props.SetProfileImageThunk(e.target.files[0])
    }

    useEffect(() => {
        SetProfileImage(props.ProfilePhoto)
    }, [props.ProfilePhoto])

    return (
        <div className={s.ProfileInfo}>
            <img alt='' src={ProfileImage} />
            { (props.UserId === String(props.MyId)) ? 
                <div>
                    <input onChange={(e) => OnSelectPhoto(e)} type="file"/>
                </div>
             : <></>}
        </div>
      );
}

export default ProfileImage;