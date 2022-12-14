import React from 'react'
import { useFormik } from 'formik';
import s from './Login.module.css'
import { connect } from 'react-redux';
import { AuthLoginThunk } from '../../redux/AuthReducer';
import { lengthControl } from '../../utils/TextAreaUtils';
import { Navigate } from 'react-router-dom';


const validate = values => {
    const errors = {};

    let lengthEmailControl = lengthControl(40)
    if (lengthEmailControl(values.email)) { errors.email = lengthEmailControl(values.email) }
  
    let lengthPasswordControl = lengthControl(15)
    if (lengthPasswordControl(values.Password)) { errors.Password = lengthPasswordControl(values.Password) }
  
    return errors;
};

const LoginForm = (props) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            Password: '',
            isRemember: false,
            Captcha: ''
        },
        validate,
        onSubmit: (values, submitProps) => {
            props.AuthLoginThunk(values.email, values.Password, values.isRemember, values.Captcha, submitProps.setStatus)
        },
    });

    if (props.isAuth) {
        return <Navigate to={'/profile/' + props.MyId} />
    }

    function MainError() {
        return formik.status ? formik.status.error : null
    }

    return (
        <form className={s.LoginForm} onSubmit={formik.handleSubmit}>
            <div className={s.title}>
                Login
            </div>
            <div className={s.item}>Nickname: 
                <span className={formik.errors.email ? s.error : s.email}><input id='email' type="email" onChange={formik.handleChange} value={formik.values.email}/></span>
                {formik.errors.email ? <div className={s.errorMessage}>{formik.errors.email}</div> : null}
            </div>

            <div className={s.item}>Password:
                <span className={formik.errors.Password ? s.error : s.Password}><input id='Password' type="Password" onChange={formik.handleChange} value={formik.values.Password}/></span>
                {formik.errors.Password ? <div className={s.errorMessage}>{formik.errors.Password}</div> : null}
            </div>

            <div className={s.item} >
                <input id='isRemember' type="checkbox" onChange={formik.handleChange} value={formik.values.isRemember}/>
                Remember Me
            </div>

            { props.Captcha ?
            <div>
                <div className={s.item}>-----------------------------------------</div>
                <div><img className={s.CaptchaImg} alt='' src={props.Captcha} /></div>
                <span className={s.item} >Captcha: <input id='Captcha' type="Captcha" onChange={formik.handleChange} value={formik.values.Captcha}/></span>
            </div> : <></> }

            <div className={s.item}>-----------------------------------------</div>
            <button className={s.submitButton} type="submit">Log In</button>
            <div className={s.errorMessage}>{ MainError() }</div>
        </form>
    );
};

let MapStateToProps = (state) => {
    return {
        isAuth: state.Auth.Auth.isAuth,
        MyId: state.Auth.Auth.id,
        Captcha: state.Auth.Auth.Captcha,
    }
}

let Login = connect(MapStateToProps, { AuthLoginThunk })(LoginForm)

export default Login;
