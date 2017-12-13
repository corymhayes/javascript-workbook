import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardHeader, CardMedia, CardTitle } from 'material-ui';
import Graph from './Graph';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      bitcoin: [],
      lastAmount: 0
    }
  }

  componentDidMount = () => {
    const that = this;
    fetch('https://api.blockchain.info/charts/market-price?timespan=all&cors=true&format=json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({bitcoin:
        responseJson.values.map((item) => {
          return {x: new Date(item.x * 1000).toUTCString().slice(8, 16), y: item.y}
        }), lastAmount: responseJson.values[responseJson.values.length-1].y
      })
    }).catch((error) => {
      console.error(error);
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <Card>
          <CardHeader
            title="Bitcoin"
            titleStyle={{fontSize: 24}}
            subtitle={"Current Amount: $" + this.state.lastAmount.toLocaleString()}
          />
          <CardMedia>
            <Graph chartData={this.state.bitcoin}/>
          </CardMedia>
        </Card>
      </MuiThemeProvider>
    );
  }
}

export default App;
