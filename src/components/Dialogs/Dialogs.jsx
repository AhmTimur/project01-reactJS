import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>Timur</div>
                <div className={s.dialog}>Sasha</div>
                <div className={s.dialog}>Pasha</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hey</div>
                <div className={s.message}>Yo</div>
                <div className={s.message}>How are you doing?</div>
            </div>
        </div>
    );
}

export default Dialogs;