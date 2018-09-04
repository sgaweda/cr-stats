import React from 'react'

export default class UserChallenge extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            challengeCardsWon: props.challengeCardsWon,
            challengeMaxWins: props.challengeMaxWins,
        }
    }
    
    render() {
        return (
            <div className="user-challenge">
                Challenge cards won: {this.state.challengeCardsWon}
                Challenge max wins: {this.state.challengeMaxWins}
            </div>
        )
    }
}