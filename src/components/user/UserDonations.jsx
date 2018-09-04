import React from 'react'

export default class UserDonations extends React.Component {
    constructor(props) {
        super(props)
        this.state = {userDonations: props.userDonations}
    }
    
    render() {
        return (
            <div className="user-donations">
                Donations: {this.state.userDonations}
            </div>
        )
    }
}