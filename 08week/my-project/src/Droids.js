import React, {Component} from "react";
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';

const style = {
  height: 600,
  width: 750,
  margin: 20,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

class Droids extends Component {
  render(){
    return(
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Paper style={style} zDepth={1}>
          <img style={{height: 100, width: 'auto'}} src={require('./images/' + this.props.imageName + '.png')} />
          <h1 style={{marginLeft: 15}}>{this.props.name}</h1>
        </Paper>
      </MuiThemeProvider>
    )
  }
}

export default Droids;
