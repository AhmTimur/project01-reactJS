import React, {FC} from "react";
import {Paginator} from "../Common/Paginator/Paginator";
import User from "./User";
import styles from "./Users.module.css"
import {UserType} from "../../types/Types";

type PropsType = {
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
    users: Array<UserType>

    followingInProgress: Array<number>
    follow: () => void
    unfollow: () => void
}


let Users: FC<PropsType> = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
    return <div>
        <div className={styles.page}>
            <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged}/>
        </div>
            <div>{
                users.map(u => <User user={u} followingInProgress={props.followingInProgress} follow={props.follow} unfollow={props.unfollow} key={u.id}/>
                )
            }</div>

    </div>
}

export default Users;