import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import ContactCard from './ContactCard.js';

function App() {
    return (
        <div className="contacts">
            <ContactCard
                contact={{name: "Mr. Roby", imgUrl: "https://placekitten.com/300/200", phone: "077/511-405", email: "aleksandra.lazoroska@gmail.com"}}
            />
        </div>    
    )
}

export default App;


