import { Button } from 'semantic-ui-react'
import React from 'react'
import axios from 'axios'
export default class App extends React.Component {
    handleClick = (e) => {
        fetch('http://localhost:3000/', {
            mode: 'no-cors' // 'cors' by default
          }).then((response) => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
    render() {
        return <Button onClick={this.handleClick}>Semantic Test :)</Button>
    }
}