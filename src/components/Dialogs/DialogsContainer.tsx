import React from 'react';
import {actions} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.messagePage
    }
}

export default compose(
    connect(mapStateToProps, {...actions}),
    withAuthRedirect
)(Dialogs) as React.ComponentType