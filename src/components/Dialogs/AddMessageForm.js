import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../Common/FormsControl/FormsControl";
import {maxlengthCreator, required} from "../../utils/validators/validators";

const maxLength100 = maxlengthCreator(100)

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder='Write your message' component={Textarea} name='messageText' validate={[required, maxLength100]}/>
        </div>
        <div>
            <button>Send message</button>
        </div>
    </form>
}

export const DialogAddMessageFormRedux = reduxForm({form: 'dialogsAddMessageForm'})(AddMessageForm)