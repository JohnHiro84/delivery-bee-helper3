import React from 'react';


class Clock extends React.Component {
  constructor(props) {
    super(props);
    // your code here
    this.interval = "";
    this.state = {
      time: new Date()
    };
    this.tick = this.tick.bind(this);
  }

  tick(){
    console.log("tick")
    this.setState({time: new Date()})
  }
  componentDidMount() {
    console.log('Component DID MOUNT!')
    this.interval = setInterval(this.tick , 1000);
    // this.interval = setInterval(function(tick){ tick; }, 1000);
  }
  componentWillUnmount() {
        clearInterval(this.interval);
        console.log('Component WILL UNMOUNT!')
  }

  render() {
   return (
     <div className="time">
       <h2>Current Time:</h2>
       <h3>{this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()}</h3>
    </div>
    )
  }
}


export default Clock;
