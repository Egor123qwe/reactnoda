import s from './ProfileInfo.module.css'
import Preloader from '../../Common/Preloader/Preloader';
import React from 'react';
import ProfileImage from './UserImage/UserImage';
import ProfileInfoForm from './ProfileInfoForm/ProfileInfoForm';
import { ProfileInfoDataType } from '../../../redux/ProfileReducer';


type PropsType = {
    MyId: number,
    UserId: number,
    UpdateStatus: (status: string) => void,
    SetProfileImageThunk: (image: object) => void,
    ProfileInfoData: ProfileInfoDataType,
    SetProfileInfoThunk: (Info: ProfileInfoDataType) => void
}

const ProfileInfo: React.FC <PropsType> = (props) => {
    return (
        <div className={s.ProfileInfo}>
            <div className={s.info}>
                {props.ProfileInfoData.Preloader ? <Preloader/> : <></>}
                <ProfileImage MyId={props.MyId} UserId={props.UserId} SetProfileImageThunk={props.SetProfileImageThunk} 
                              ProfilePhoto={props.ProfileInfoData.ProfilePhoto}/>
                <ProfileInfoForm SetProfileInfoThunk={props.SetProfileInfoThunk} ProfileInfoData={props.ProfileInfoData} 
                                 MyId={props.MyId} UserId={props.UserId} UpdateStatus={props.UpdateStatus}/>
            </div>
        </div>
      );
}

export default ProfileInfo;