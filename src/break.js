import React from "react";

function Break(props) {
    function breakIncrement() {
        if (props.breakCount !== 60) {
        props.onBreakChange(props.breakCount + 1);
        }
    }
    function breakDecrement() {
        if (props.breakCount !== 1) {
        props.onBreakChange(props.breakCount - 1);
        } 
    }
    return (
        <div id="break-controls">
            <h2 id="break-label">Break Length</h2>
            <button id="break-increment" onClick={breakIncrement}>+1</button>
            <h3 id="break-length">{props.breakCount}</h3>
            <button id="break-decrement" onClick={breakDecrement}>-1</button>
        </div>
    );
}

export default Break;