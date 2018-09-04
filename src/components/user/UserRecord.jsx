import React from 'react'

export default class UserRecord extends React.Component {
    constructor(props) {
        super(props)
        this.state = {...props}
    }
    
    render() {
        return (
            <div className="user-tag">
                Wins: {this.state.wins}<br />
                Losses: {this.state.losses}<br />
                Win rate: {this.state.wins / (this.state.wins + this.state.losses)}%
            </div>
        )
    }
}