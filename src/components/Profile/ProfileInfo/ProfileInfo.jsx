import s from './ProfileInfo.module.css'
import Preloader from '../../Common/Preloader/Preloader';
import Status from './Status/StatuHook';
import React from 'react';
import ProfileImage from './UserImage/UserImage';

function ProfileInfo(props) {
    return (
        <div className={s.ProfileInfo}>
            <div className={s.info}>
                {props.ProfileInfoData.Preloader ? <Preloader/> : <></>}
                <ProfileImage SetProfileImageThunk={props.SetProfileImageThunk} 
                              ProfilePhoto={props.ProfileInfoData.ProfilePhoto}/>
                <div className={s.NikName}>{props.ProfileInfoData.fullName}</div>
                <Status MyId={props.MyId} UserId={props.UserId} UpdateStatus={props.UpdateStatus} status={props.ProfileInfoData.status} />
                <div className={s.description}>{props.ProfileInfoData.description}</div>
            </div>
        </div>
      );
}

export default ProfileInfo;