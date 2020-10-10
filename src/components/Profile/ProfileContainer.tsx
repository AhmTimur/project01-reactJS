import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getStatus, getUserProfile, updateStatus, sendPhoto, saveProfileData} from '../../redux/profile-reducer';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType} from "../../types/Types";

type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: () => void
    sendPhoto: () => void
    saveProfileData: () => Promise<void>

}

type PathParamsType = {
    userId: string
}
type OwnProps = {
    profile: ProfileType
}

type PropsType = MapDispatchPropsType & MapStatePropsType & RouteComponentProps<PathParamsType> & OwnProps

class ProfileContainer extends React.Component<PropsType> {
    refreshProfile() {
        let userId: number | null = +this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        if (!userId) {
            console.error("ID should exists in params or in state ('authorizedId')")
        } else {
            this.props.getUserProfile(userId);
            this.props.getStatus(userId);

        }
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: PropsType, prevState: AppStateType) {
        if (prevProps.match.params.userId != this.props.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     sendPhoto={this.props.sendPhoto}
                     saveProfileData={this.props.saveProfileData}/>
        )
    }
}


let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, sendPhoto, saveProfileData}),
    withRouter,
)(ProfileContainer) as React.ComponentType;