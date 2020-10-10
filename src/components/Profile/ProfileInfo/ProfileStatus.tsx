import React, {ChangeEvent} from 'react';

type StateType = {
    editMode: boolean
    status: string
}

type PropsType = {
    status: string
    updateStatus: (newStatus: string) => void
}

class ProfileStatus extends React.Component<PropsType> {
    state: StateType = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e:  ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: PropsType, prevState: StateType) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            }
            )
        }
    }

    render() {
        return (
            <div>
                {this.state.editMode != true
                    ? <div>
                        <span onDoubleClick={this.activateEditMode}>
                            {this.state.status}
                        </span>
                    </div> : <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                    </div>
                }
            </div>

        )


    }
}

export default ProfileStatus;