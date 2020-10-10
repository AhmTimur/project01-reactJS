import React from 'react';
import {LogOut} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import Header, {MapPropsType, DispatchPropsType} from './Header';
import {AppStateType} from "../../redux/redux-store";

class HeaderContainer extends React.Component<MapPropsType& DispatchPropsType> {
  render() {
    return <Header {...this.props}/>
  }
}

let mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {LogOut})(HeaderContainer);