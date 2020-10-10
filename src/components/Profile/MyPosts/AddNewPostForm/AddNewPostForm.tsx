import React from "react";
import {createField, GetFormDataKeys, Input} from "../../../Common/FormsControl/FormsControl";
import {InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../../../utils/validators/validators";

export type PostFormDataType = {
    newPostText: string
}
type PostFormDataKeysType = GetFormDataKeys<PostFormDataType>

const AddNewPostForm: React.FC<InjectedFormProps<PostFormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            {createField<PostFormDataKeysType>('Write your post text', 'newPostText', '', Input, [required])}
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

export const AddNewPostReduxForm = reduxForm<PostFormDataType>({form: 'ProfileAddNewPost'})(AddNewPostForm)