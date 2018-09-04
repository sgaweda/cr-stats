import React from 'react'

export default class UserTag extends React.Component {
    constructor(props) {
        super(props)
        this.state = {userTag: props.userTag}
    }
    
    render() {
        return (
            <div className="user-tag">
                Tag: {this.state.userTag}
            </div>
        )
    }
}