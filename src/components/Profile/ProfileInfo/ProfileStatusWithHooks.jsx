import React, {useState, useEffect} from 'react';

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateMode = () => {
         setEditMode(true)
    }
    const deActivateMode = () => {
         setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateMode}>{props.status || "set a status message"}</span>
            </div>}
            {editMode &&
            <div>
                <input autoFocus={true} onBlur={deActivateMode} onChange={onStatusChange} value={status}/>
            </div>}
        </div>
    )
}


export default ProfileStatusWithHooks;