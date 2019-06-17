import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Joke from './Joke.js';

function App() {
    return (
        <div>
            <Joke 
                question="What do you call an elephant that doesn’t matter?" 
                punchLine="An irrelephant." 
            />
            <Joke 
                question="What do you call sad coffee?”" 
                punchLine="Despresso."
            />
            <Joke 
                question="How do you organize a space party?" 
                punchLine="You planet!"
            />
            <Joke 
                question="Where did the computer go to dance?" 
                punchLine="To a disc-o."
            />
            <Joke 
                question="What do you call a bee that lives in America?"
                punchLine="USB"
            />
        </div>    
    )
}

export default App;


