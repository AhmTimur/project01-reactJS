import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return <div className={s.dialogs + ' ' + s.active}>
        <img className={s.dialogImage} src='https://www.w3schools.com/howto/img_avatar.png' />
        <NavLink to={'/dialog/' + props.id}>{props.name}</NavLink>
    </div>
}

export default DialogItem;