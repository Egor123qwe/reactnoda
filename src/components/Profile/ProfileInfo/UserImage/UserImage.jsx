import s from '../ProfileInfo.module.css'
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function ProfileImage(props) {

    let [UserPhoto, SetUserPhoto] = useState('');

    function OnSelectPhoto(e) {
        console.log(e.target.files[0])
        SetUserPhoto(e.target.files[0])
    }

    useEffect(() => {
        props.SetProfileImageThunk(UserPhoto)
        }, [UserPhoto])

    return (
        <div className={s.ProfileInfo}>
            <img alt='' src={props.ProfilePhoto} />
            <div><input onChange={(e) => OnSelectPhoto(e)} type="file"/></div>
        </div>
      );
}

export default ProfileImage;