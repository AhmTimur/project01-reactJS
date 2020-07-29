import React from 'react';
import s from '../Dialogs.module.css';

const MessageItem = (props) => {

    return <div className={s.messagesItems}>
        {props.message}
    </div>
}

export default MessageItem;