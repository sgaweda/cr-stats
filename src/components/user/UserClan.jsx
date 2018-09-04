import React from 'react'

export default class UserClan extends React.Component {
    constructor(props) {
        super(props)
        this.state = {userClanName: props.userClan.name}
    }
    
    render() {
        return (
            <div className="user-clan">
                Clan: {this.state.userClanName}
            </div>
        )
    }
}