export default class UserFavoriteCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {favorite: props.favorite}
    }
    
    render() {
        return (
            <div className="user-favorite-card">
                {this.state.favorite}
            </div>
        )
    }
}