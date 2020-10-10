import {NavLink} from "react-router-dom";
import styles from "./Users.module.css";
import userPhoto from "../../assets/userPhoto.png";
import React, {FC} from "react";
import {UserType} from "../../types/Types";

type PropsType = {
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    user: UserType
}

const User: FC<PropsType> = ({followingInProgress, follow, unfollow, user}) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={`profile/${user.id}`}>
                        <img className={styles.photo}
                             src={user.photos.small != null ? user.photos.small : userPhoto}/>
                    </NavLink>

                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id)
                        }}>Unfollow </button>
                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id)
                        }}>Follow </button>
                    }

                </div>
            </span>
            <span>
                <span>
                    <span>
                        {user.name}
                    </span>
                    <div>
                        {user.status}
                    </div>
                </span>
                <span>
                    <div>
                        {'user.location.country'},
                    </div>
                    <div>
                        {'user.location.city'}
                    </div>
                </span>
            </span>
        </div>
    )
}

export default User;