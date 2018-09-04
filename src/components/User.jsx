import React from 'react'

import UserName from './user/UserName.jsx';
import UserTag from './user/UserTag.jsx';
import UserClan from './user/UserClan.jsx';
import UserRecord from './user/UserRecord.jsx';
import UserFavouriteCard from './user/UserFavouriteCard.jsx';
import UserDonations from './user/UserDonations.jsx';
import UserTournament from './user/UserTournament.jsx';
import UserChallenge from './user/UserChallenge.jsx';

export default class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {...this.props}
    }
    
    render() {
        return (
            <div className="user">
                <UserName name={this.state.name} />
                <UserTag tag={this.state.tag} />
                <UserClan clan={this.state.clan} />
                <UserRecord {... {
                    battleCount: this.state.battleCount,
                    wins: this.state.wins,
                    losses: this.state.losses,
                    threeCrownWins: this.state.threeCrownWins,
                }}
                    
                />
                <UserFavouriteCard favourite={this.state.currentFavouriteCard} />
                <UserDonations userDonations={this.state.totalDonations} />
                <UserTournament {...{
                    tournamentBattleCount: this.state.tournamentBattleCount,
                    tournamentCardsWon: this.statetournamentCardsWon,
                }}
                />
                <UserChallenge {...{
                    challengeCardsWon: this.state.challengeCardsWon,
                    challengeMaxWins: this.state.challengeMaxWins,
                }}
                />
            </div>
        )
    }
}