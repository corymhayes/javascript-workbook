import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar'
import {Tabs, Tab} from 'material-ui/Tabs';
import Droid from './Droids';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Router>
          <div>
            <Tabs>
              <Tab label={<Link to="/">R2D2</Link>}>
                <div>
                  <Route exact path="/" component={() => ( <Droid imageName="r2d2" name="R2D2" /> )} />
                </div>
              </Tab>
              <Tab label={<Link to="/">C3P0</Link>}>
                <div>
                  <Route exact path="/" component={() => ( <Droid imageName="c3p0" name="C-3P0" /> )} />
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
