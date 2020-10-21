import React from 'react'
import Users from './Users'
import Preloader from '../Common/Preloader/Preloader'
import {useSelector} from 'react-redux'
import {getIsFetching} from '../../redux/users-selectors'

export const UsersContainer: React.FC = () => {

    const isFetching = useSelector(getIsFetching)

    return <>
        {isFetching ? <Preloader/> : null}
        <Users />
    </>


}