export default class UserDonations extends React.Component {
    constructor(props) {
        super(props)
        this.state = {userName: props.userDonations}
    }
    
    render() {
        return (
            <div className="user-donations">
                {this.state.userDonations}
            </div>
        )
    }
}