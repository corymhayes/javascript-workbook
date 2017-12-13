import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Tabs, Tab} from 'material-ui/Tabs';
import Droids from './Droids';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      droids: []
    }
  }


  componentDidMount = () => {
    // const that = this;
    fetch('https://swapi.co/api/people/')
      .then((response) => response.json())
      .then((people) => {
        this.setState({droids: [...this.state.droids, people.results]});
      }).catch((error) => {
        console.error(error);
      })
  }

  renderDroids = () => {
    return this.state.droids.map((droid, key) => {
      return <Droids key={key} droid={droid} />
    });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Router>
          <div>
            <Tabs>
              <Tab label={<Link to="/">R2D2</Link>}>
                <div>
                  <Route exact path="/" component={() => (
                    <Droids imageName="r2d2" name={
                      this.state.droids.map(item => item[2].name)
                    } />
                  )} />
                </div>
              </Tab>
              <Tab label={<Link to="/">C3P0</Link>}>
                <div>
                  <Route exact path="/" component={() => (
                    <Droids imageName="c3p0" name={
                      this.state.droids.map(item => item[1].name)
                    } />
                  )} />
                </div>
              </Tab>
            </Tabs>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
