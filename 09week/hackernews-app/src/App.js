import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer'
import Story from './Story';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      stories: [],
      open: false
    }
  }

  componentDidMount = () => {
    // const that = this;
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .then((response) => response.json())
      .then((storyIds) => {
        for(let i = 0; i < 20; i++){
          fetch(`https://hacker-news.firebaseio.com/v0/item/${storyIds[i]}.json?print=pretty`)
            .then((response) => response.json())
            .then((story) => {
              this.setState({stories: [...this.state.stories, story]});
            });
        }
      }).catch((error) => {
        console.error(error);
      })
  }

  sideMenu = () => {
    this.setState({open: !this.state.open})
  }


  renderList(){
    return this.state.stories.map((story, key) => {
      return <Story key={key} story={story}/>
    });
  }

  render() {
    return(
      <MuiThemeProvider>
        <AppBar title="HackerNews" style={{backgroundColor: '#fb4500'}} onLeftIconButtonClick={this.sideMenu} />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        />
        {this.renderList()}
      </MuiThemeProvider>
    );
  }
}

export default App;
