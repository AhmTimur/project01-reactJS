import {Field, Form, Formik} from 'formik'
import React from 'react'
import {FilterType} from '../../redux/users-reducer'
import {useSelector} from 'react-redux'
import {getFilter} from '../../redux/users-selectors'

const UserSearchFormValidate = (values: any) => {
    const errors = {}
    return errors
}
type FriendFormType = 'true' | 'false' | 'null'
type FormType = {
    term: string
    friend: FriendFormType
}

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}

export const UsersSearchForm: React.FC<PropsType> = (props) => {
    const filter = useSelector(getFilter)
    const submit = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        }

        props.onFilterChanged(filter)
        setSubmitting(false)
    }

    return <Formik
        enableReinitialize
        initialValues={{term: filter.term, friend: String(filter.friend) as FriendFormType}}
        validate={UserSearchFormValidate}
        onSubmit={submit}
    >
        {({isSubmitting}) => (
            <Form>
                <Field type='text' name='term'/>
                <Field name='friend' as='select'>
                    <option value='null'>All</option>
                    <option value='true'>Only followed</option>
                    <option value='false'>Only unfollowed</option>
                </Field>
                <button type="submit" disabled={isSubmitting}>
                    Find
                </button>
            </Form>
        )}
    </Formik>
}