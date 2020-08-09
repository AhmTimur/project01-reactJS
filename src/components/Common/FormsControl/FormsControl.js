import React from "react";
import styles from './FormsControl.module.css'
import {Field} from "redux-form";

const Element = Element => ({input, meta: {touched, error}, ...props}) => {
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

export const createField = (placeholder, name, type, component, validators, props={}, text='') => {
    return(
        <div> {text}
            <Field placeholder={placeholder} name={name} type={type} component={component} validators={validators}
            ></Field>
        </div>
    )
}
