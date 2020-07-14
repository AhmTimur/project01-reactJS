import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import {NavLink} from "react-router-dom";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
    let dialogElement = props.dialogs.dialogs.map ( d => (<DialogItem name={d.name} id={d.id}/>));
    let messageElement = props.dialogs.messages.map ( m => (<MessageItem message={m.message}/>))
    let newMessageElement = React.createRef();

    let onAddMessage = () => {
        props.addMessage();
    }
    let onMessageChange = () => {
        props.updateNewMessageText(newMessageElement.current.value);
    }

    alert(props.isAuth);

    return (
        <div className={s.dialogs}>
            <div className={s.search}>
                <input type="text" placeholder='search'/>
            </div>
            <div className={s.dialogsItems}>
                <NavLink to={'dialog' + dialogElement.id}>{dialogElement}</NavLink>
                <div className={s.dispatchMessage}>
                <div className={s.messages}> {messageElement} </div>
                    <div className={s.entryField}>
                        <textarea placeholder='Write your message' onChange={onMessageChange} ref={newMessageElement} value={props.dialogs.newMessageText}></textarea>
                    </div>
                    <div>
                        <button onClick={onAddMessage} className={s.entryFieldButton}>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Dialogs;