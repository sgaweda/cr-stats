import { Button } from 'semantic-ui-react'
import React from 'react'
import axios from 'axios'
export default class App extends React.Component {
    handleClick = (e) => {
        axios.get('/api/test').then((response) => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }
    render() {
        return <Button onClick={this.handleClick}>Semantic Test :)</Button>
    }
}