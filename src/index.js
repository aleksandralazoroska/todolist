import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './style.css';

// #1
class App extends React.Component {
    render() {
        return (
            <div>
                <Header username="vsschool"/>
                <Greeting />
            </div>
        ) 
    }  
}

// #2
class Header extends React.Component {
    render() {
        return (
            <header>
                <p>Welcome, {this.props.username}!</p>
            </header>
        )
    }
}

// #3
class Greeting extends Component {
    render() {
        const date = new Date()
        const hours = date.getHours()
        let timeoftheDay
    
        if (hours < 12) {
            timeoftheDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeoftheDay = "afternoon"
        } else {
            timeoftheDay = "night"
        }
        return (
            <h1>Good {timeoftheDay} to you, sir or madam!</h1>
        )
    }
}
   

ReactDOM.render (
    <App />,
    document.getElementById('root')

)