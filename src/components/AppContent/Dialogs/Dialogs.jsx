import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogElement = props.dialogs.map ( d => (<DialogItem name={d.name} id={d.id}/>));


    return (
        <div className={s.dialogs}>
            <div className={s.search}>
                <input type="text" placeholder='search'/>
            </div>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>

        </div>
    );
}

export default Dialogs;