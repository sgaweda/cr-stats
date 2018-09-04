import React from 'react'

export default class UserTag extends React.Component {
    constructor(props) {
        super(props)
        this.state = {tag: props.tag}
    }
    
    render() {
        return (
            <div className="user-tag">
                Tag: {this.state.tag}
            </div>
        )
    }
}