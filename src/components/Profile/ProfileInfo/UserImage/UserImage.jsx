import s from '../ProfileInfo.module.css'
import React from 'react';

function ProfileImage(props) {

    

    function OnSelectPhoto(e) {
        props.SetProfileImageThunk(e.target.files[0])
    }

    return (
        <div className={s.ProfileInfo}>
            <img alt='' src={props.ProfilePhoto} />
            <div><input onChange={(e) => OnSelectPhoto(e)} type="file"/></div>
        </div>
      );
}

export default ProfileImage;