import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      stacks: {
        stack1: [0, 1, 2, 3],
        stack2: [],
        stack3: []
      },

      discHolder: []
    }
  }

  gameLogic=(e)=>{
    let stackLength = e.target.children.length;
    let selectedStack = [];
    let tempStackArray = this.state.stacks;

    const moveDisc=()=>{
      // When user clicks on stack should 'pick up' disc, if one is there
      // store that disc in a temp variable, then click another stack to
      // place that stored disc on to another stack
      console.log(selectedStack.length)
      if(stackLength && selectedStack.length === 0){
        selectedStack.push(tempStackArray[e.target.className].pop());
        this.setState({stacks: tempStackArray});
      } else if(selectedStack.length === 1){
        console.log('else if');
      } else {
        console.log('else');
      }
    }

    moveDisc();
  }



  render() {

     return (
      <div className="container">
        <div className="stack1" onClick={this.gameLogic}>
          {this.state.stacks.stack1.map(item => <div className="disc">{item}</div>)}
        </div>
        <div className="stack2" onClick={this.gameLogic}>
          {/* {this.state.stacks.stack2.map(item => <div>{item}</div>)} */}
        </div>
        <div className="stack3" onClick={this.gameLogic}>
          {/* {this.state.stacks.stack3.map(item => <div>{item}</div>)} */}
        </div>
      </div>
    );
  }
}

export default App;
