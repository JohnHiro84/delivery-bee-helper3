import React from 'react';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';

// const Root = () => <h1>Congratulations, you did it!</h1>;

// function Root() {
//   constructor(props) {
//   //   super(props);
//   //   // your code here
//   //   this.state = {
//   //     array: "hello"
//   //   }
//   // this.array = ["a"];
//   }
//
//   return (
//     <div>
//         <h1>Hello</h1>
//         <Clock/>
//         <Tabs something="whoa"/>
//     </div>
//   )
//
// }


class Root extends React.Component {
  constructor(props) {
    super(props);
    // your code here
    this.interval = "";
    this.state = {
      array: [["tab1","a", "Amazing Thing that happened - today there was an amazing thing that happened. read further for more info!"], ["tab2", "b", "Why traveling to Spain is a great idea - Spain is a wonderful country, my favorite one in fact and here are my top 5 reasons why.."], ["tab3", "c", "Why you should stuff"]]
    };
  }

  render() {
    return (
      <div id="page-container">
        <h1>Widgets App</h1>

        <Clock/>
        <Tabs  else={this.state.array}/>
      </div>
    )
  }
}
export default Root;
