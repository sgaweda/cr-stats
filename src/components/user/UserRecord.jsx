export default class UserRecord extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            wins: props.record.wins,
            losses: props.record.losses,
            threeCrownwins: props.record.threeCrownWins,
        }
    }
    
    render() {
        return (
            <div className="user-tag">
                Wins: {this.state.wins}
                Losses: {this.state.losses}
                Win rate: {this.state.wins / (this.state.wins + this.state.losses)}%
            </div>
        )
    }
}