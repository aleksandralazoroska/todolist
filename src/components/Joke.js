import React from 'react';

function Joke(props) {
    return (
        <div>
            <h2 style={{dispaly:!props.question && "none"}}>Question: {props.question}</h2>
            <h2 style={{color: !props.question && "#888888"}}>Answer: {props.punchLine}</h2>
        </div>
    )

}


export default Joke;