import { Button } from 'semantic-ui-react'
import React from 'react'
import axios from 'axios'
import User from './User.jsx'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: null
        }
    }

    handleClick = (e) => {
        axios.get('/api/test').then((response) => {
            this.setState({userInfo: response.data.body})
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        console.log(this.state.userInfo)
        const user = this.state.userInfo ? <User {...this.state.userInfo} /> : null
        return (
            <div>
                <Button onClick={this.handleClick}>Semantic Test :)</Button>
                {user}
            </div>
        )
    }
}