import s from '../ProfileInfo.module.css'
import Status from '../Status/StatuHook';
import React from 'react';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useEffect } from 'react';
import { lengthControl } from '../../../../utils/TextAreaUtils';

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

    const validate = values => {

        const errors = {};
    
        let lengthMidleControl = lengthControl(25)
        if (lengthMidleControl(values.FullName)) { errors.FullName = lengthMidleControl(values.FullName) }
        if (lengthMidleControl(values.LookingForAJobDescription)) { errors.LookingForAJobDescription = lengthMidleControl(values.LookingForAJobDescription) }
        if (lengthMidleControl(values.AboutMe)) { errors.AboutMe = lengthMidleControl(values.AboutMe) }
        if (lengthMidleControl(values.contacts.github)) { errors.github = lengthMidleControl(values.contacts.github) }
        if (lengthMidleControl(values.contacts.vk)) { errors.vk = lengthMidleControl(values.contacts.vk) }
      
        return errors;
    };

    const formik = useFormik({
        initialValues: StateSkeleton,
        validate,
        onSubmit: (values, submitProps) => {
            props.SetProfileInfoThunk(values, props.UserId, submitProps.setStatus)
            SetEditMode(false)
        },
    });

    useEffect(() => {
        formik.setValues(
            {...StateSkeleton, contacts: {...StateSkeleton.contacts}}
        )
    }, [props.ProfileInfoData])

    return (
            <form className={s.LoginForm} onSubmit={formik.handleSubmit}>
                <div className={s.info}>
                    <div className={s.ProfileInfoDescItem}>----------------------------------</div>
                    {!EditMode ? <button type="button" onClick={ OnEnableMode }>Edit</button> : <></>}
                    {EditMode ? <button type="submit">Save</button> : <></>}

                    <div className={s.ProfileInfoDescItem}> { 
                            EditMode ?  <span> Name:
                                            <input id='FullName' type="FullName" onChange={formik.handleChange} value={formik.values.FullName}/>
                                            {formik.errors.FullName ? <span className={s.errorMessage}> - {formik.errors.FullName}</span> : null}
                                        </span> : 
                                        <span className={s.FullName}>{formik.values.FullName}</span>
                        }</div>

                    <Status MyId={props.MyId} UserId={props.UserId} UpdateStatus={props.UpdateStatus} status={props.ProfileInfoData.status} />

                    <div className={s.ProfileInfoDescItem}>----------------------------------</div>

                    <div>
                        <span className={s.ProfileInfoDescItem}>looking for a job: { 
                            EditMode ?  <span>
                                            <input id='lookingForAJob' type="checkbox" defaultChecked={formik.values.lookingForAJob} onChange={formik.handleChange} value={formik.values.lookingForAJob}/>
                                        </span> : 
                                        <span className={s.ProfileInfoItem}>{formik.values.lookingForAJob ? 'yes' : 'no' }</span>
                        }</span>
                    </div>

                    <div>
                        <span className={s.ProfileInfoDescItem}>looking for a job description: { 
                            EditMode ?  <span>
                                            <input id='LookingForAJobDescription' type="LookingForAJobDescription" onChange={formik.handleChange} value={formik.values.LookingForAJobDescription}/>
                                            {formik.errors.LookingForAJobDescription ? <span className={s.errorMessage}> - {formik.errors.LookingForAJobDescription}</span> : null}
                                        </span> : 
                                       <span className={s.ProfileInfoItem}>{formik.values.LookingForAJobDescription}</span>
                        }</span>
                    </div>

                    <div>
                        <span className={s.ProfileInfoDescItem}>About me: { 
                            EditMode ?  <span>
                                            <input id='AboutMe' type="AboutMe" onChange={formik.handleChange} value={formik.values.AboutMe}/>
                                            {formik.errors.AboutMe ? <span className={s.errorMessage}> - {formik.errors.AboutMe}</span> : null}
                                        </span> : 
                                       <span className={s.ProfileInfoItem}>{formik.values.AboutMe}</span>
                        }</span>
                    </div>

                    <div className={s.ProfileInfoDescItem}>----------------------------------</div>

                    <div className={s.Contacts}>Contacts: 

                        <div>
                            <span className={s.ProfileInfoDescItem}>Vk: { 
                                EditMode ?  <span>
                                                <input id='contacts.vk' type="Contacts" onChange={formik.handleChange} value={formik.values.contacts.vk}/>
                                                {formik.errors.vk ? <span className={s.errorMessage}> - {formik.errors.vk}</span> : null}
                                            </span> : 
                                        <span className={s.ProfileInfoItem}>{formik.values.contacts.vk}</span>
                            }</span>
                        </div>

                        <div>
                            <span className={s.ProfileInfoDescItem}>Git Hub: { 
                                EditMode ?  <span>
                                                <input id='contacts.github' type="Contacts" onChange={formik.handleChange} value={formik.values.contacts.github}/>
                                                {formik.errors.github ? <span className={s.errorMessage}> - {formik.errors.github}</span> : null}
                                            </span> : 
                                        <span className={s.ProfileInfoItem}>{formik.values.contacts.github}</span>
                            }</span>
                        </div>
                    </div>
                    <div className={s.errorMessage}>{ formik.status ? formik.status.error : null }</div>
                    <div className={s.ProfileInfoDescItem}>----------------------------------</div>

                </div>
            </form>
      );
}

export default ProfileInfoForm;