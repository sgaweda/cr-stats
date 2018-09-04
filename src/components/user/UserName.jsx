import React from 'react'

export default class UserName extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: props.name}
    }
    
    render() {
        return (
            <div className="user-name">
                Name: {this.state.name}
            </div>
        )
    }
}