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
                <UserName userName={this.state.userInfo.name} />
                <UserTag userTag={this.state.userInfo.tag} />
                <UserClan userClan={this.state.userInfo.clan} />
                <UserRecord
                    battleCount = {this.state.userInfo.battleCount}
                    wins = {this.state.userInfo.wins}
                    losses = {this.state.userInfo.losses}
                    threeCrownWins = {this.state.userInfo.threeCrownWins}
                />
                <UserFavouriteCard favourite={this.state.userInfo.currentFavouriteCard} />
                <UserDonations userDonations={this.state.userInfo.totalDonations} />
                <UserTournament
                    tournamentBattleCount = {this.state.userInfo.tournamentBattleCount}
                    tournamentCardsWon = {this.state.userInfo.tournamentCardsWon}
                />
                <UserChallenge {...{
                    challengeCardsWon: this.state.userInfo.challengeCardsWon,
                    challengeMaxWins: this.state.userInfo.challengeMaxWins,
                }}
                />
            </div>
        )
    }
}