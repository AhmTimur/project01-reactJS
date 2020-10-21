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
import { useHistory } from 'react-router-dom'
import * as queryString from 'querystring'

type QueryParamsType = { term?: string, friend?: string, page?: string }
let Users: React.FC = () => {
    const currentPage = useSelector(getCurrentPage)
    const totalItemsCount = useSelector(getTotalUsersCount)
    const pageSize = useSelector(getPageSize)
    const followingInProgress = useSelector(getFollowingInProgress)
    const users = useSelector(getUsers)
    const filter = useSelector(getFilter)
    const history = useHistory()

    const dispatch = useDispatch()


    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1)) as QueryParamsType

        let actualPage = currentPage
        let actualFilter = filter
        if(parsed.page) actualPage = Number(parsed.page)
        if(!!parsed.term) actualFilter = {...actualFilter, term: parsed.term as string}
        if(!!parsed.friend) actualFilter = {...actualFilter, friend: parsed.friend === 'null' ? null : parsed.friend === 'true' ? true : false}

        dispatch(usersRequest(actualPage, pageSize, actualFilter))
    }, [])
    useEffect(()=>{
        const query: QueryParamsType = {}
        if(!!filter.term) query.term = filter.term
        if(filter.friend !== null) query.friend = String(filter.friend)
        if(currentPage !==1) query.page = String(currentPage)

        history.push({
            pathname: '/users',
            search: queryString.stringify(query)
        })
    },[filter, currentPage])

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