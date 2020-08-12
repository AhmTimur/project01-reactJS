import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import photo from "./../../../assets/userPhoto.png"

const DialogItem = (props) => {
    return <div className={s.dialogs + ' ' + s.active}>
        <img className={s.dialogImage} src={photo} />
        <NavLink to={'/dialog/' + props.id}>{props.name}</NavLink>
    </div>
}

export default DialogItem;