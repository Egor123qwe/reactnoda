import s from './MyPosts.module.css';
import React from 'react';
import { lengthControl } from '../../../utils/TextAreaUtils';
import { useFormik } from 'formik';


const validate = values => {
    const errors = {};

    let lengthEmailControl = lengthControl(40)
    if (lengthEmailControl(values.PostText)) { errors.PostText = lengthEmailControl(values.PostText) }
  
    return errors;
};


const AddPostForm = (props) => {

    const formik = useFormik({
        initialValues: {
            PostText: '',
        },
        validate,
        onSubmit: values => {
            props.AddPost(values.PostText)
            values.PostText = ''
        },
    });

    return (
        <form className={s.AddPostForm} onSubmit={formik.handleSubmit}>
            <div className={s.AddPost}>
                <span className={formik.errors.PostText ? s.error : s.PostText}><input name="PostText" id='PostText' type="PostText" onChange={formik.handleChange} value={formik.values.PostText}/></span>
                {formik.errors.PostText ? <div className={s.errorMessage}>{formik.errors.PostText}</div> : null}
            </div>
            <button className={s.submitButton} type="submit">Add Post</button>
        </form>
    );
};

export default AddPostForm;