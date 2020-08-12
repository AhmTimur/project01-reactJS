import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import {NavLink, Redirect} from "react-router-dom";
import MessageItem from "./MessageItem/MessageItem";
import {DialogAddMessageFormRedux} from "./AddMessageForm";
import photo from "./../../assets/userPhoto.png"

const Dialogs = (props) => {
    let dialogElement = props.dialogs.dialogs.map ( d => (<DialogItem name={d.name} id={d.id}/>));
    let messageElement = props.dialogs.messages.map ( m => (<MessageItem message={m.message}/>));

    let addNewMessage = (values) => {
        props.addMessage(values.messageText);
    }

    if(!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.search}>
                <input type="text" placeholder='search'/>
            </div>
            <div className={s.dialogsItems}>
                <NavLink to={'dialog' + dialogElement.id}>
                    {dialogElement}
                </NavLink>
                <div className={s.dispatchMessage}>
                <div className={s.messages}> {messageElement} </div>
                    <DialogAddMessageFormRedux onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    );
}



export default Dialogs;