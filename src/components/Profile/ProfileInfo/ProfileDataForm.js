import React from "react";
import s from "./ProfileInfo.module.css";
import {createField, Input, Textarea} from "../../Common/FormsControl/FormsControl";
import {reduxForm} from "redux-form";
import styles from "../../Common/FormsControl/FormsControl.module.css";


const ProfileDataForm = ({profile, handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {error && <div className={styles.formCommonError}><span>{error}</span></div>}
            <div><button>Save</button></div>
            <div>
                <b>FullName</b>: {createField('FullName','fullName', '', Input, [])}
            </div>
            <div>
                <b>Looking for a job</b>: {createField('','lookingForAJob', 'checkbox', Input, [],)}
            </div>
            <div>
                <b>My professional skills</b>: {createField('My professional skills','lookingForAJobDescription', 'checkbox', Textarea, [],)}
            </div>
            <div>
                <b>About me</b>: {createField('About me', 'aboutMe', '', Textarea, [], {})}
            </div>
            <div>
                <b>Contacts</b>:
                <div className={s.contacts}>{Object.keys(profile.contacts).map(key => {
                    return <div key={key}>
                        <b>{key}</b>: {createField(key, 'contacts.'+key, '', Input, [])}
                    </div>
                })}</div>
            </div>
        </form>
    )
}

export const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

