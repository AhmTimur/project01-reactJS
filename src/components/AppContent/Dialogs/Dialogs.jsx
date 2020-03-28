import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {
    let dialogElement = props.dialogs.map ( d => (<DialogItem name={d.name} id={d.id}/>));

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let messageText = newMessageElement.current.value;
        alert(messageText);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.search}>
                <input type="text" placeholder='search'/>
            </div>
            <div className={s.dialogsItems}>
                <NavLink to={'dialog' + dialogElement.id}>{dialogElement}</NavLink>
                <div><textarea ref={newMessageElement}></textarea></div>
                <button onClick={addMessage}>Send Message</button>
            </div>
        </div>
    );
}

export default Dialogs;