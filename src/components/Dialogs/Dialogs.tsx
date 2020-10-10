import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import {NavLink, Redirect} from "react-router-dom";
import MessageItem from "./MessageItem/MessageItem";
import {InjectedFormProps} from "redux-form";
import {InitialStateType} from "../../redux/dialogs-reducer";
import {DialogAddMessageFormRedux} from "./AddMessageForm";

type MapStatePropsType = {
    dialogs: InitialStateType
    isAuth: boolean
    messageText: string
}
type DispatchStatePropsType = {
    addMessage: (messageText: string)=> void
}
type PropsType = MapStatePropsType & DispatchStatePropsType

const Dialogs: React.FC<InjectedFormProps<PropsType> & PropsType> = (props) => {
    debugger
    let dialogElement = props.dialogs.dialogs.map ( d => (<DialogItem key={d.id} name={d.name} id={d.id}/>));
    let messageElement = props.dialogs.messages.map ( m => (<MessageItem key={m.id} message={m.message}/>));
    let addNewMessage = (values: {messageText: string}) => {
        debugger
        props.addMessage(values.messageText)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.search}>
                <input type="text" placeholder='search'/>
            </div>
            <div className={s.dialogsItems}>
                {dialogElement}
                <div className={s.dispatchMessage}>
                <div className={s.messages}>
                    {messageElement}
                </div>
                <DialogAddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    );
}



export default Dialogs;