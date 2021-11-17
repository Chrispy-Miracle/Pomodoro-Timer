import React from 'react';
import './App.css';
import Break from './break';
import Session from './session';
import Timer from './timer';
import mp3 from '../src/01.mp3';
import ReactFCCtest from 'react-fcctest';

const audioRef = React.createRef();

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      breakCount: 5,
      sessionCount: 25,
      label: "Session",
      counting: true,
      minutes: 25,
      seconds: 0
    }
  }
  onBreakChange = this.onBreakChange.bind(this);
  onSessionChange = this.onSessionChange.bind(this);
  onReset = this.onReset.bind(this);
  onStartStop = this.onStartStop.bind(this);
  
  onBreakChange(newBreakCount) {
    this.setState({
      breakCount: newBreakCount
    });
    if (this.state.label === "Break") {
      this.setState({
        minutes: newBreakCount
      });
    }
  }
  onSessionChange(newSessionCount) {
    this.setState({
      sessionCount: newSessionCount
    });
    if (this.state.label === "Session") {
      this.setState({
        minutes: newSessionCount
      });
    }
  }
  count(){
    if (this.state.counting){
      this.myInterval = setInterval(() => {
        if (this.state.minutes === 0 && this.state.seconds === 0){
          audioRef.current.play();
          if (this.state.label === "Session") {
            this.setState({
            seconds: 1, // was 60
            minutes: this.state.breakCount, // was this.state.breakCount -1,
            label: "Break"
          })
          } else {
            this.setState({
              seconds: 1,
              minutes: this.state.sessionCount,
              label: "Session"
            })
          }          
        } else if (this.state.seconds === 0) {
          this.setState({
            seconds: 60, 
            minutes: this.state.minutes - 1
          })
        }         
       this.setState({
            seconds: this.state.seconds - 1
        })
      }, 1000) 
    } 
  }
  onStartStop() {
    this.setState({
      counting: !this.state.counting
    });
    if(this.state.counting){
      this.count();
    }
    else {
      clearInterval(this.myInterval)
    }
  }
  onReset() {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    clearInterval(this.myInterval)
    this.setState({
      breakCount: 5,
      sessionCount: 25,
      counting: false,
      minutes: 25,
      seconds: 0,
      label: "Session"
    });
    this.onStartStop();
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Pomodoro Timer</h1>
        </header>
        <div id="bigger-container">
          <Break
            onBreakChange={this.onBreakChange}
            breakCount={this.state.breakCount}/>
          <Session
            onSessionChange={this.onSessionChange}
            sessionCount={this.state.sessionCount}/>
          <Timer 
            breakCount={this.state.breakCount}
            sessionCount={this.state.sessionCount}
            label={this.state.label}
            minutes={this.state.minutes}
            seconds={this.state.seconds}
            onReset={this.onReset}
            onStartStop={this.onStartStop}
            counting={this.state.counting}/>
        </div>
        <ReactFCCtest />
        <audio id="beep" src={mp3} type="audio/mp3" ref={audioRef}></audio>
      </div>
    );
  }
}

export default App;
