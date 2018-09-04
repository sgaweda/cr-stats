import React from 'react'

export default class UserClan extends React.Component {
    constructor(props) {
        super(props)
        this.state = {clan: {...props.clan}}
    }
    
    render() {
        return (
            <div className="user-clan">
                Clan: {this.state.clan.name}
            </div>
        )
    }
}