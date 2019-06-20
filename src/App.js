import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

// function App(props) {

//   return (
//        <div>
//          <h1>props.whatever</h1>
//       </div>
//    )  
// }   

class App extends React.Component {

    yourMethodHere() {

    }
    render() {
          return (
            <div>
                <h1>{this.props.whatever}</h1>
            </div>
        ) 
    }
}

export default App;


