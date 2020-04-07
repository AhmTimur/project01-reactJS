import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import {NavLink} from "react-router-dom";
import MessageItem from "./MessageItem/MessageItem";


const Dialogs = (props) => {
    let dialogElement = props.dialogs.dialogs.map ( d => (<DialogItem name={d.name} id={d.id}/>));
    let messageElement = props.dialogs.messages.map ( m => (<MessageItem message={m.message}/>))

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let messageText = newMessageElement.current.value;
        props.addMessage();
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.search}>
                <input type="text" placeholder='search'/>
            </div>
            <div className={s.dialogsItems}>
                <NavLink to={'dialog' + dialogElement.id}>{dialogElement}</NavLink>

                <div className={s.messages}> {messageElement} </div>

                <div className={s.entryField}><textarea onChange={onMessageChange} ref={newMessageElement} value={props.dialogs.newMessageText}></textarea></div>
                <button onClick={addMessage} className={s.entryFieldButton}>Send Message</button>
            </div>
        </div>
    );
}



export default Dialogs;