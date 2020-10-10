import React from 'react'
import {InjectedFormProps, reduxForm} from "redux-form";
import {maxlengthCreator, required} from "../../utils/validators/validators";
import {createField, GetFormDataKeys, Input} from "../Common/FormsControl/FormsControl";
import {connect} from "react-redux";
import {LogIn} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from "../Common/FormsControl/FormsControl.module.css"
import {AppStateType} from "../../redux/redux-store";

const maxLength50 = maxlengthCreator(50)

type LoginFormOwnProps = {
    captcha: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormDataType, LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit, error, captcha}) => {
    return <form onSubmit={handleSubmit}>
        {createField<LoginFormDataKeysType>('Email', "email", '', Input, [required, maxLength50])}
        {createField<LoginFormDataKeysType>('Password', 'password', 'password', Input, [required, maxLength50])}
        {createField<LoginFormDataKeysType>('', 'rememberMe', 'checkbox', Input, [], {}, 'Remember me')}
        {captcha && <img src={captcha}/>}
        {captcha && createField<LoginFormDataKeysType>('Type symbols from image', 'captcha', '', Input, [required])}
        {error && <div className={styles.formCommonError}><span>{error}</span></div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<LoginFormDataType, LoginFormOwnProps>({form: 'login'})(LoginForm)

type MapStatePropsType = {
    captcha: string | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    LogIn: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}
type LoginFormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
type LoginFormDataKeysType = GetFormDataKeys<LoginFormDataType>

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData: LoginFormDataType) => {
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

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    captcha: state.auth.captcha,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {LogIn})(Login)