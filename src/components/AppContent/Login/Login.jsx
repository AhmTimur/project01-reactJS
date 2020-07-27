import React from 'react'
import {Field, reduxForm} from "redux-form";
import {maxlengthCreator, required} from "../../../utils/validators/validators";
import {Input} from "../../Common/FormsControl/FormsControl";
import {connect} from "react-redux";
import {LogIn} from "../../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from "./../../Common/FormsControl/FormsControl.module.css"

const maxLength50 = maxlengthCreator(50)

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'login'} name={'email'} component={Input} validate={[required, maxLength50]}/>
        </div>
        <div>
            <Field placeholder={'password'} name={'password'} type={'password'} component={Input} validate={[required, maxLength50]}/>
        </div>
            Remember me
           <Field component={'input'} name={'rememberMe'} type={'checkbox'}/>
        <div>
            {props.error &&
            <div className={styles.formCommonError}>
                <span>{props.error}</span>
            </div>}
            <button onClick={props.logIn}>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.LogIn(formData.email, formData.password, formData.rememberMe);
    }
    if(props.isAuth) {
        return <Redirect to='/profile'/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {LogIn})(Login)