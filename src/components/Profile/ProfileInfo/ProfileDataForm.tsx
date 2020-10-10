import React from "react";
import s from "./ProfileInfo.module.css";
import {createField, GetFormDataKeys, Input, Textarea} from "../../Common/FormsControl/FormsControl";
import {InjectedFormProps, reduxForm} from "redux-form";
import styles from "../../Common/FormsControl/FormsControl.module.css";
import {ProfileType} from "../../../types/Types";

type ProfileOnwPropsType = {
    profile: ProfileType
}
type ProfileFormDataKeysType = GetFormDataKeys<ProfileType>

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, ProfileOnwPropsType> & ProfileOnwPropsType> = ({profile, handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {error && <div className={styles.formCommonError}><span>{error}</span></div>}
            <div><button>Save</button></div>
            <div>
                <b>FullName</b>: {createField<ProfileFormDataKeysType>('FullName','fullName', '', Input, [])}
            </div>
            <div>
                <b>Looking for a job</b>: {createField<ProfileFormDataKeysType>('','lookingForAJob', 'checkbox', Input, [],)}
            </div>
            <div>
                <b>My professional skills</b>: {createField<ProfileFormDataKeysType>('My professional skills','lookingForAJobDescription', 'checkbox', Textarea, [],)}
            </div>
            <div>
                <b>About me</b>: {createField<ProfileFormDataKeysType>('About me', 'aboutMe', '', Textarea, [], {})}
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

export const ProfileDataReduxForm = reduxForm<ProfileType, ProfileOnwPropsType>({form: 'edit-profile'})(ProfileDataForm)

