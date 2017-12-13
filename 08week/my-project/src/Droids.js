import React, {Component} from "react";
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
      <Paper style={style} zDepth={1}>
        <img style={{height: 100, width: 'auto'}} src={require('./images/' + this.props.imageName + '.png')} alt="Droid Pictures" />
        <h1 style={{marginLeft: 15}}>{this.props.name}</h1>
      </Paper>
    )
  }
}

export default Droids;
