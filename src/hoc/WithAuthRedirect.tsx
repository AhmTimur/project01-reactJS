import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

let mapStateToPropsForRedirect = (state: AppStateType)=> ({
    isAuth: state.auth.isAuth
})

type mapPropsType = {
    isAuth: boolean
}

export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType) {

    const RedirectComponent: React.FC<mapPropsType> = (props) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to='/login'/>
        return <WrappedComponent {...restProps as WCP}/>
    }

    let ConnectedAuthRedirectComponent = connect<mapPropsType, {}, WCP, AppStateType>(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}
