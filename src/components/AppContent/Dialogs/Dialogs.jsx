import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import {NavLink, Redirect} from "react-router-dom";
import MessageItem from "./MessageItem/MessageItem";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {
    let dialogElement = props.dialogs.dialogs.map ( d => (<DialogItem name={d.name} id={d.id}/>));
    let messageElement = props.dialogs.messages.map ( m => (<MessageItem message={m.message}/>));

    let addNewMessage = (values) => {
        props.addMessage(values.messageText);
    }

    if(!props.isAuth) return <Redirect to={'/login'}/>

    const AddMessageForm = (props) => {
        return <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Write your message' component='textarea' name='messageText'/>
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    }

    const onSubmit = (formData) => {
        console.log(formData);
    }

    const DialogAddMessageFormRedux = reduxForm({form: 'dialogsAddMessageForm'})(AddMessageForm)

    return (
        <div className={s.dialogs}>
            <div className={s.search}>
                <input type="text" placeholder='search'/>
            </div>
            <div className={s.dialogsItems}>
                <NavLink to={'dialog' + dialogElement.id}>{dialogElement}</NavLink>
                <div className={s.dispatchMessage}>
                <div className={s.messages}> {messageElement} </div>
                    <DialogAddMessageFormRedux onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    );
}



export default Dialogs;