import {InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {createField, Input} from "../Common/FormsControl/FormsControl";
import {maxlengthCreator, required} from "../../utils/validators/validators";

const maxLength100 = maxlengthCreator(100)

type NewMessageFormType = {
    messageText: string
}
type PropsType = {} // для запоминания структуры InjectedProps или для примера
type AddMessageFormDataKeysType = Extract<keyof NewMessageFormType, string>
const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormType, PropsType> & PropsType> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            {createField<AddMessageFormDataKeysType>('Write your message', "messageText", '', Input, [required, maxLength100])}
        </div>
        <div>
            <button>Send message</button>
        </div>
    </form>
}

export const DialogAddMessageFormRedux = reduxForm<NewMessageFormType>({form: 'dialogsAddMessageForm'})(AddMessageForm)