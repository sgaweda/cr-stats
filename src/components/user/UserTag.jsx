export default class UserTag extends React.Component {
    constructor(props) {
        super(props)
        this.state = {userTag: props.userTag}
    }
    
    render() {
        return (
            <div className="user-tag">
                {this.state.userTag}
            </div>
        )
    }
}