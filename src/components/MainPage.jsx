import { Button, Input } from 'semantic-ui-react'
import React from 'react'
import axios from 'axios'
import User from './User.jsx'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tag: '',
            userInfo: null
        }
    }
    handleInputChange(e) {
        const savedEvent = e.target.value
        console.log(savedEvent)
        this.setState(state => ({
            tag: savedEvent
        }))
    }
    handleClick = (e) => {
        console.log('called' + this.state.tag)
        axios.get(`/api/test?tag=${this.state.tag}`).then((response) => {
            this.setState(state => ({userInfo: response.data.body}))
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
                <Input focus action={{ content: 'search', onClick: this.handleClick }}
                        onChange={e => this.handleInputChange(e)} placeholder='Search...' />
                {user}
            </div>
        )
    }
}