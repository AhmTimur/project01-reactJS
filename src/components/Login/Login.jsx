import React from 'react'
import {reduxForm} from "redux-form";
import {maxlengthCreator, required} from "../../utils/validators/validators";
import {createField, Input} from "../Common/FormsControl/FormsControl";
import {connect} from "react-redux";
import {LogIn} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from "../Common/FormsControl/FormsControl.module.css"

const maxLength50 = maxlengthCreator(50)

const LoginForm = ({handleSubmit, error, captcha}) => {
    return <form onSubmit={handleSubmit}>
        {createField('Email', 'email', '', Input, [required, maxLength50])}
        {createField('Password', 'password', 'password', Input, [required, maxLength50])}
        {createField('', 'rememberMe', 'checkbox', 'input', [], {}, 'Remember me')}
        {captcha && <img src={captcha}/>}
        {captcha && createField('Type symbols from image', 'captcha', '', Input, [required])}
        {error && <div className={styles.formCommonError}><span>{error}</span></div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.LogIn(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    if (props.isAuth) {
        return <Redirect to='/profile'/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha}/>
    </div>
}

const mapStateToProps = (state) => ({
    captcha: state.auth.captcha,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {LogIn})(Login)