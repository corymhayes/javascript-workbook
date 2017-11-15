import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
     timelineData: [
         {name: 'renee', post: 'I love kitties', id: 1},
         {name: 'stevie', post: 'I love dogs', id: 2},
         {name: 'groot', post: 'I Am Groot', id: 3},
         {name: 'luke', post: 'blah blah blah', id: 4},
         {name: 'vader', post: 'I am your father', id: 5},
         {name: 'lea', post: 'Pizza', id: 6},
         {name: 'tamra', post: 'Workout', id: 7},
         {name: 'vicky', post: 'Coto Insurance', id: 8},
     ]
  };
  // handleInputChange=(e)=>{
  //    this.setState({inputValue: e.target.value})
  // };
  // handleItemSubmit=()=>{
  //    const newList = this.state.list;
  //    newList.push(this.state.inputValue);
  //    this.setState({list: newList, inputValue: ''})
  // };

  handleLikeClick=(obj)=>{
    //
    // console.log(`original id: ${obj['id']}`);
    //
    // const value = obj['id'] ? obj['id'] + 1 : 1;
    // newState = { obj['id'] = value };
    //
    // obj['id'] = value;
    this.setState({timelineData: {obj}});
    console.log(this.state.timelineData);
    // this.setState({timelineData: value});
  };

  renderPosts(){
    return this.state.timelineData.map((item) => {
        return <div key={item['id']}>
                  <p>{item['post']}</p>
                  <p>{item['name']}</p>
                  <p>{item['id']}</p>
                  <a onClick={() => this.handleLikeClick(item)}>like</a>
               </div>
    });
  }
  render() {
     /*User inputs task, on submit it's added to list */
    return(
        <div>
          {this.renderPosts()}
            {/* <h3>To Do App</h3>
            <input
                type="text"
                value={this.state.inputValue}
                onChange={this.handleInputChange}
            /> */}
            <button onClick={this.handleItemSubmit}>Submit</button>
            {/* {this.renderPosts()} */}
        </div>
    );
  }
}

export default App;
