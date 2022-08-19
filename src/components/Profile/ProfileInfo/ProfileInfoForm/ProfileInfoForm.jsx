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
                    <div className={s.ProfileInfoDescItem}>----------------------------------</div>
                    {!EditMode ? <button type="button" onClick={ OnEnableMode }>Edit</button> : <></>}
                    {EditMode ? <button type="submit">Save</button> : <></>}

                    { EditMode ? 
                        <div><span className={s.ProfileInfoDescItem}>Name: <input id='FullName' type="FullName" onChange={formik.handleChange} value={formik.values.FullName}/></span></div> : 
                        <div className={s.FullName}><span>{formik.values.FullName}</span></div>}

                    <Status MyId={props.MyId} UserId={props.UserId} UpdateStatus={props.UpdateStatus} status={props.ProfileInfoData.status} />

                    <div className={s.ProfileInfoDescItem}>----------------------------------</div>

                    <div>
                        <span className={s.ProfileInfoDescItem}>looking for a job: { 
                            EditMode ? <input id='lookingForAJob' type="checkbox" onChange={formik.handleChange} value={formik.values.lookingForAJob}/> : 
                                       <span className={s.ProfileInfoItem}>{formik.values.lookingForAJob ? 'yes' : 'no' }</span>
                        }</span>
                    </div>

                    <div>
                        <span className={s.ProfileInfoDescItem}>looking for a job description: { 
                            EditMode ? <input id='LookingForAJobDescription' type="LookingForAJobDescription" onChange={formik.handleChange} value={formik.values.LookingForAJobDescription}/> : 
                                       <span className={s.ProfileInfoItem}>{formik.values.LookingForAJobDescription}</span>
                        }</span>
                    </div>

                    <div>
                        <span className={s.ProfileInfoDescItem}>About me: { 
                            EditMode ? <input id='AboutMe' type="AboutMe" onChange={formik.handleChange} value={formik.values.AboutMe}/> : 
                                       <span className={s.ProfileInfoItem}>{formik.values.AboutMe}</span>
                        }</span>
                    </div>

                    <div className={s.ProfileInfoDescItem}>----------------------------------</div>

                    <div className={s.Contacts}>Contacts: 

                        <div>
                            <span className={s.ProfileInfoDescItem}>Vk: { 
                                EditMode ? <input id='contacts.vk' type="Contacts" onChange={formik.handleChange} value={formik.values.contacts.vk}/> : 
                                        <span className={s.ProfileInfoItem}>{formik.values.contacts.vk}</span>
                            }</span>
                        </div>

                        <div>
                            <span className={s.ProfileInfoDescItem}>Git Hub: { 
                                EditMode ? <input id='contacts.github' type="Contacts" onChange={formik.handleChange} value={formik.values.contacts.github}/> : 
                                        <span className={s.ProfileInfoItem}>{formik.values.contacts.github}</span>
                            }</span>
                        </div>
                    </div>
                    <div className={s.ProfileInfoDescItem}>----------------------------------</div>

                </div>
            </form>
      );
}

export default ProfileInfoForm;