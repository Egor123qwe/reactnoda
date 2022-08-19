import s from '../ProfileInfo.module.css'
import Status from '../Status/StatuHook';
import React from 'react';
import { useFormik } from 'formik';
import { useState } from 'react';

const validate = values => {
    const errors = {};

    //let lengthEmailControl = lengthControl(40)
    //if (lengthEmailControl(values.email)) { errors.email = lengthEmailControl(values.email) }
  
    //let lengthPasswordControl = lengthControl(15)
    //if (lengthPasswordControl(values.Password)) { errors.Password = lengthPasswordControl(values.Password) }
  
    return errors;
};

function ProfileInfoForm(props) {

    let [EditMode, SetEditMode] = useState(false)

    function OnEnableMode() {
        SetEditMode(true)
    }

    const formik = useFormik({
        initialValues: {
            NikName: '',
            lookingForAJob: false,
            LookingForAJobDescription: '',
            description: '',
            Vk: '',
            GitHub: ''
        },
        validate,
        onSubmit: (values) => {
            SetEditMode(false)

            let data = {
                userId: props.MyId,
                lookingForAJob: values.lookingForAJob,
                LookingForAJobDescription: values.LookingForAJobDescription,
                FullName: values.NikName,
                AboutMe: values.description,
                contacts: {
                    github: values.GitHub,
                    vk: values.Vk,
                    facebook: '',
                    instagram: '',
                    twitter: '',
                    website: '',
                    youtube: '',
                    mainLink: '',
                }
            }

            props.SetProfileInfoThunk(data)
        },
    });

    return (
            <form className={s.LoginForm} onSubmit={formik.handleSubmit}>
                <div className={s.info}>
                    {!EditMode ? <button type="button" onClick={ OnEnableMode }>Edit</button> : <></>}
                    {EditMode ? <button type="submit">Save</button> : <></>}

                    { EditMode ? 
                        <div><span>Name: <input id='NikName' type="NikName" onChange={formik.handleChange} value={formik.values.NikName}/></span></div> : 
                        <div className={s.NikName}>{props.ProfileInfoData.fullName}</div>}

                    <Status MyId={props.MyId} UserId={props.UserId} UpdateStatus={props.UpdateStatus} status={props.ProfileInfoData.status} />

                    { EditMode ? 
                        <div><span>looking for a job: <input id='lookingForAJob' type="checkbox" onChange={formik.handleChange} value={formik.values.lookingForAJob}/></span></div> : 
                        <div>looking for a job: <span className={s.lookingForAJob}>{formik.values.lookingForAJob ? 'yes' : 'no' }</span></div>}

                    { EditMode ? 
                        <div><span>looking for a job description: <input id='LookingForAJobDescription' type="LookingForAJobDescription" onChange={formik.handleChange} value={formik.values.LookingForAJobDescription}/></span></div> : 
                        <div>looking for a job description: <span className={s.LookingForAJobDescription}></span></div>}

                    { EditMode ? 
                        <div><span>About me: <input id='description' type="description" onChange={formik.handleChange} value={formik.values.description}/></span></div> : 
                        <div>About me: <span className={s.description}></span></div>}

                    <div>Contacts: 
                        <div>
                            { EditMode ? 
                                <div><span>Vk: <input id='Vk' type="Contacts" onChange={formik.handleChange} value={formik.values.Vk}/></span></div> : 
                                <div>Vk: <span className={s.VkLink}></span></div>}
                            { EditMode ? 
                                <div><span>Git Hub: <input id='GitHub' type="Contacts" onChange={formik.handleChange} value={formik.values.GitHub}/></span></div>  : 
                                <div>Git Hub: <span className={s.GitHubLink}></span></div>}
                        </div>
                    </div>

                </div>
            </form>
      );
}

export default ProfileInfoForm;