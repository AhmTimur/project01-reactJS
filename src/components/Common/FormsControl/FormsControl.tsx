import React from "react";
import styles from './FormsControl.module.css'
import {Field, WrappedFieldProps} from "redux-form";
import {FormValidatorType} from "../../../utils/validators/validators";

const Element = (Element: React.FC | string): React.FC<WrappedFieldProps> => ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <Element {...input} {...props}/>
            {hasError && <span>{error}</span>}
        </div>
    )
}


export const Textarea = Element('textarea')

export const Input = Element('input')

export function createField<FormKeys extends string> (placeholder: string | undefined, name: FormKeys, type: string, component: React.FC<WrappedFieldProps>, validators: Array<FormValidatorType>, props={}, text ='') {
    return(
        <div> {text}
            <Field placeholder={placeholder} name={name} type={type} component={component} validators={validators}
            />
        </div>
    )
}
export type GetFormDataKeys<T> = Extract<keyof T, string>