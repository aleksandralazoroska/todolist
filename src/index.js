import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function App() {
  const date = new Date()
  const hours = date.getHours()
  let timeOftheDay
  const styles= {
    fontSize: 25 
  }

  if (hours < 10 ) {
    timeOftheDay = "morning"
    styles.color= "yellow"
  } else if (hours >= 10 && hours < 18 ) {
    timeOftheDay = "afternoon"
    styles.color= "orange"
  } else  {
    timeOftheDay = "night"
    styles.color= "blue"
  }

  return (
    <h1 style={styles}>Good {timeOftheDay}!</h1>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
