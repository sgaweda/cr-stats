import React from 'react'

export default class UserRecord extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            wins: props.wins,
            losses: props.losses,
            threeCrownwins: props.threeCrownWins,
        }
    }
    
    render() {
        return (
            <div className="user-tag">
                Wins: {this.state.wins}
                Losses: {this.state.losses}
                Win rate: {this.state.wins / (this.state.wins + this.state.losses)}%
            </div>
        )
    }
}