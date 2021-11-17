import React from "react";

function Timer(props){
    function reset() {
        props.onReset();
    }
    function startStop() {
        props.onStartStop();
    }
    
        return (
            <div id="timer-container">
                <h2 id="timer-label">Current {props.label}:</h2>
                <h3 id="time-left">{(props.minutes < 10) ? "0" + props.minutes : props.minutes}:{(props.seconds < 10) ? "0" + props.seconds : props.seconds}</h3>
                <button id="start_stop" onClick={startStop}>Start/Stop</button>            
                <button id="reset" onClick={reset}>Reset</button>
            </div>
        );
}

export default Timer;
