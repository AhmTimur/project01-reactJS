import React, {useEffect} from 'react'
import {Paginator} from '../Common/Paginator/Paginator'
import User from './User'
import styles from './Users.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {
    getCurrentPage, getFilter,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from '../../redux/users-selectors'
import {FilterType, follow, unfollow, usersRequest} from '../../redux/users-reducer'
import {UsersSearchForm} from './UsersSearchForm'

let Users: React.FC = () => {
    const currentPage = useSelector(getCurrentPage)
    const totalItemsCount = useSelector(getTotalUsersCount)
    const pageSize = useSelector(getPageSize)
    const followingInProgress = useSelector(getFollowingInProgress)
    const users = useSelector(getUsers)
    const filter = useSelector(getFilter)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(usersRequest(currentPage, pageSize, filter))
    }, [])

    const onPageChanged = (pageNumber: number) => {
        dispatch(usersRequest(pageNumber, pageSize, filter))
    }
    const onFilterChanged = (filter: FilterType) => {
        dispatch(usersRequest(1, pageSize, filter))
    }
    const _follow = (userId: number) => {
        dispatch(follow(userId))
    }
    const _unfollow = (userId: number) => {
        dispatch(unfollow(userId))
    }

    return <div>
        <UsersSearchForm onFilterChanged={onFilterChanged}/>
        <div className={styles.page}>
            <Paginator totalItemsCount={totalItemsCount} pageSize={pageSize} currentPage={currentPage}
                       onPageChanged={onPageChanged}/>
        </div>
        <div>{
            users.map(u => <User user={u}
                                 key={u.id}
                                 followingInProgress={followingInProgress}
                                 follow={_follow}
                                 unfollow={_unfollow}
                                 />
            )
        }</div>

    </div>
}

export default Users