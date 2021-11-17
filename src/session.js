import React from "react";

function Session(props) {
    function sessionIncrement() {
        if (props.sessionCount !== 60) {
        props.onSessionChange(props.sessionCount + 1);
        }
    }
    function sessionDecrement() {
        if (props.sessionCount !== 1) {
        props.onSessionChange(props.sessionCount - 1);
        } 
    }
    
    return (
        <div id="session-controls">
            <h2 id="session-label">Session Length</h2>
            <button id="session-increment" onClick={sessionIncrement}>+1</button>
            <h3 id="session-length">{props.sessionCount}</h3>
            <button id="session-decrement" onClick={sessionDecrement}>-1</button>
        </div>
    );
}

export default Session;