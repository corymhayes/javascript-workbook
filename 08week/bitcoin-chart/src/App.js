import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardHeader, CardMedia, CardTitle } from 'material-ui';
import Graph from './Graph';
import './App.css';

class App extends Component {
  state = {
    bitcoin: []
  }

  // hashDate = () => {
  //   const bitcoinTempArr = this.state.bitcoin;
  //   const myDate = this.state.bitcoinTempArr.map((item) => {
  //     let myDate = new Date((item.x) * 1000).toUTCString().slice(5, 16);
  //
  //   });
  //   this.setState({bitcoin: bitcoinTempArr})
  // }

  componentDidMount = () => {
    const that = this;
    fetch('https://api.blockchain.info/charts/market-price?timespan=all&format=json')
    .then((response) => response.json())
    .then((responseJson) => {
      that.setState({bitcoin:
        responseJson.values.map((item) => {
          return {x: new Date(item.x * 1000).toUTCString().slice(8, 16), y: item.y}
        })
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
