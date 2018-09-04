import React from 'react'

export default class UserTournament extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tournamentBattleCount: props.tournamentBattleCount,
            tournamentCardsWon: props.tournamentCardsWon,
        }
    }
    
    render() {
        return (
            <div className="user-tournament">
                Tournament battle count: {this.state.tournamentBattleCount}
                Tournament cards won: {this.state.tournamentCardsWon}
            </div>
        )
    }
}