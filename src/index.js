import React from 'react';
import ReactDOM from 'react-dom';

function MyInfo(){
  return (
    <div class="container-biography">
      <h1>Aleksandra</h1>
      <p>I'm from Macedonia, and work how Frontend Developer</p>
      <ul>
        <li>Santorini</li>
        <li>Malta</li>
        <li>Turkey</li>
      </ul>
    </div>

  )
}

ReactDOM.render (
  <MyInfo />,
  document.getElementById('root')
)
