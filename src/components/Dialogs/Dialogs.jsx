import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogElement = props.dialogs.map ( d => (<DialogItem name={d.name} id={d.id}/>));
    let messageElement = props.messages.map ( m => (<Message message={m.message} id={m.id}/>));

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                {messageElement}
            </div>
        </div>
    );
}

export default Dialogs;