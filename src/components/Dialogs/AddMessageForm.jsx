import s from './Dialogs.module.css';
import React from 'react';
import { lengthControl } from '../../utils/TextAreaUtils';
import { useFormik } from 'formik';


const validate = values => {
    const errors = {};

    let lengthEmailControl = lengthControl(40)
    if (lengthEmailControl(values.MessageText)) { errors.MessageText = lengthEmailControl(values.MessageText) }
  
    return errors;
};


const AddMessageForm = (props) => {

    const formik = useFormik({
        initialValues: {
            MessageText: '',
        },
        validate,
        onSubmit: values => {
            props.SendMessage(values.MessageText)
            values.MessageText = ''
        },
    });

    return (
        <form className={s.AddMessageForm} onSubmit={formik.handleSubmit}>
            <div className={s.MessageText}>
                <span className={formik.errors.MessageText ? s.error : s.MessageText}><input id='MessageText' type="MessageText" onChange={formik.handleChange} value={formik.values.MessageText}/></span>
                {formik.errors.MessageText ? <div className={s.errorMessage}>{formik.errors.MessageText}</div> : null}
            </div>
            <button className={s.submitButton} type="submit">Send message</button>
        </form>
    );
};

export default AddMessageForm;