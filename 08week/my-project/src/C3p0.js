import React, {Component} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

const style = {
  height: 600,
  width: 750,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class C3p0 extends Component {
  render(){
    return(
      <MuiThemeProvider>
        <Paper style={style} zDepth={1}>
          <img style={{height: 100, width: 'auto'}} src={require('./images/c3p0.png')} alt=""/>
          <h1>C-3P0</h1>
        </Paper>
      </MuiThemeProvider>
    )
  }
}

export default C3p0;
