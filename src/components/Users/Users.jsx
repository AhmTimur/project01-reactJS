import React from "react";
import {Paginator} from "../Common/Paginator/Paginator";
import User from "./User";
import styles from "./Users.module.css"

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
debugger
    return <div>
        <div className={styles.page}>
            <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged}/>
        </div>
            <div>{
                users.map(u => <User user={u} followingInProgress={props.followingInProgress} follow={props.follow} unfollow={props.follow} key={u.id}/>
                )
            }</div>

    </div>
}

export default Users;