import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Todoitem from './components/Todoitem.js';
import todosData from './components/todosData.js';

function App() {
    const Todoitems = todosData.map(item => <Todoitem key={item.id} item={item}/>)

    return (
        <div className="todo-list">
            {Todoitems}
        </div>
    )  
}   

export default App;


