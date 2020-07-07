import React from 'react';


class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabsIndex: 0,
      tabSelected: "tab1"
    };
    this.looping = this.looping.bind(this);
    this.selectedtab = this.selectedtab.bind(this);
    this.selectedcontent = this.selectedcontent.bind(this);

    this.clicked = this.clicked.bind(this);

    // this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    console.log('Component DID MOUNT!')
    this.looping();
  }
  componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
  }
  selectedtab(tab){
    let val = "";

        if (this.state.tabSelected === tab){

          val = "selected";
          console.log(val);
        } else {
          val = "not";
        }
    return val;
  }
  selectedcontent(tab){
    let val = "";

        if (this.state.tabSelected === tab){

          val = "selectedcontent";
          console.log(val);
        } else {
          val = "hiddencontent";
        }
    return val;
  }


  clicked(tab){

    this.setState({tabSelected: tab[0]});
    // e.preventDefault();
  }
  // handleSearch(e){
  //   this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
  //   e.preventDefault();
  // }


  looping(){
      console.log(this.props.else[1]);
  }
  render() {
   return (
     <div className="tabscontainer">

       <ul className="tabsul">
       {
        this.props.else.map(tab =>
          {
            return <li className="tabsli" onClick={this.clicked.bind(this, tab)} id={this.selectedtab(tab[0]).toString()} key= {tab[0]}>{tab[1]} </li>
          })
        }
       </ul>
       {
        this.props.else.map(tab =>
          {
            return <h1 id={this.selectedcontent(tab[0]).toString()} key= {tab[1]}>{tab[2]} </h1>
          })
        }


    </div>
    )
  }
}


export default Tabs;
