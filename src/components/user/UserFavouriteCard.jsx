import React from 'react'

export default class UserFavouriteCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {favourite: props.favourite.name}
    }
    
    render() {
        return (
            <div className="user-favourite-card">
                Favorite: {this.state.favourite}
            </div>
        )
    }
}