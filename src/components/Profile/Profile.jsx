import s from './Profile.module.css';
import ProfileinfoContainer from './ProfileInfo/ProfileInfoContainer';
import MyPostConteiner from './MyPosts/MyPostConteiner';
import React from 'react';


function Profile(props) {
    return (
        <div className={s.profile}>
            <ProfileinfoContainer />
            <MyPostConteiner />
        </div>
      );
}


export default Profile