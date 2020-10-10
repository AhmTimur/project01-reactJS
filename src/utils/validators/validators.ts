export type FormValidatorType = (value: string) => string | undefined

export const required: FormValidatorType = (value) => {
    if(value) return undefined
    return 'Field is required'
}

export const maxlengthCreator = (maxLength: number): FormValidatorType => value => {
    if(value && value.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined;
}