export default class UserName extends React.Component {
    constructor(props) {
        super(props)
        this.state = {userName: props.userName}
    }
    
    render() {
        return (
            <div className="user-name">
                {this.state.userName}
            </div>
        )
    }
}