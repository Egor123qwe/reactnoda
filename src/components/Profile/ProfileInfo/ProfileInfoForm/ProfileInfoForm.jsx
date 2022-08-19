import s from '../ProfileInfo.module.css'
import Status from '../Status/StatuHook';
import React from 'react';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useEffect } from 'react';

function ProfileInfoForm(props) {

    let [EditMode, SetEditMode] = useState(false)

    function OnEnableMode() {
        SetEditMode(true)
    }

    let StateSkeleton = {
        FullName: props.ProfileInfoData.FullName,
        lookingForAJob: props.ProfileInfoData.lookingForAJob,
        LookingForAJobDescription: props.ProfileInfoData.lookingForAJobDescription,
        AboutMe: props.ProfileInfoData.AboutMe,
        contacts: {
            github: props.ProfileInfoData.contacts.github,
            vk: props.ProfileInfoData.contacts.vk,
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        }
    }

    const formik = useFormik({
        initialValues: StateSkeleton,
        onSubmit: (values) => {
            SetEditMode(false)
            props.SetProfileInfoThunk(values)
        },
    });

    useEffect(() => {
        formik.setFormikState({
            values: StateSkeleton
        })
    }, [props.ProfileInfoData])

    return (
            <form className={s.LoginForm} onSubmit={formik.handleSubmit}>
                <div className={s.info}>
                    {!EditMode ? <button type="button" onClick={ OnEnableMode }>Edit</button> : <></>}
                    {EditMode ? <button type="submit">Save</button> : <></>}

                    { EditMode ? 
                        <div><span className={s.ProfileInfoDescItem}>Name: <input id='FullName' type="FullName" onChange={formik.handleChange} value={formik.values.FullName}/></span></div> : 
                        <div className={s.NikName}>{props.ProfileInfoData.FullName}</div>}

                    <Status MyId={props.MyId} UserId={props.UserId} UpdateStatus={props.UpdateStatus} status={props.ProfileInfoData.status} />

                    { EditMode ? 
                        <div><span className={s.ProfileInfoDescItem}>looking for a job: <input id='lookingForAJob' type="checkbox" onChange={formik.handleChange} value={formik.values.lookingForAJob}/></span></div> : 
                        <div><span className={s.ProfileInfoDescItem}>looking for a job: {formik.values.lookingForAJob ? 'yes' : 'no' }</span></div>}

                    { EditMode ? 
                        <div><span>looking for a job description: <input id='LookingForAJobDescription' type="LookingForAJobDescription" onChange={formik.handleChange} value={formik.values.LookingForAJobDescription}/></span></div> : 
                        <div><span className={s.ProfileInfoDescItem}>looking for a job description: {formik.values.LookingForAJobDescription}</span></div>}

                    { EditMode ? 
                        <div><span>About me: <input id='AboutMe' type="AboutMe" onChange={formik.handleChange} value={formik.values.AboutMe}/></span></div> : 
                        <div><span className={s.ProfileInfoDescItem}> About me:{formik.values.AboutMe}</span></div>}

                    <div className={s.Contacts}>Contacts: 
                        <div>
                            { EditMode ? 
                                <div><span>Vk: <input id='contacts.vk' type="Contacts" onChange={formik.handleChange} value={formik.values.contacts.vk}/></span></div> : 
                                <div><span className={s.ProfileInfoDescItem}>Vk: {formik.values.contacts.vk}</span></div>}
                            { EditMode ? 
                                <div><span>Git Hub: <input id='contacts.github' type="Contacts" onChange={formik.handleChange} value={formik.values.contacts.github}/></span></div>  : 
                                <div><span className={s.ProfileInfoDescItem}>Git Hub: {formik.values.contacts.github}</span></div>}
                        </div>
                    </div>

                </div>
            </form>
      );
}

export default ProfileInfoForm;