import React from 'react';
import s from '../Dialogs.module.css';

const MessageItem: React.FC<{message: string}> = (props) => {

    return <div className={s.messagesItems}>
        {props.message}
    </div>
}

export default MessageItem;