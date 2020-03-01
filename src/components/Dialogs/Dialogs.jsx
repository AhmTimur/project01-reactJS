import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={'/dialog/' + props.id}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.message}>
        <div>{props.message}</div>
    </div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Timur' id='1'/>
                <DialogItem name='Sasha' id='2'/>
                <DialogItem name='Pasha' id='3'/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi'} />
                <Message message={'Yo'} />
                <Message message={'How are you doing?'} />
            </div>
        </div>
    );
}

export default Dialogs;