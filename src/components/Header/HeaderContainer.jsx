import React from 'react';
import {getAuthData} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import Header from './Header';

;

class HeaderContainer extends React.Component {
  componentDidMount() {
     this.props.getAuthData();
  }
  render() {
    return <Header {...this.props}/>
  }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getAuthData})(HeaderContainer);