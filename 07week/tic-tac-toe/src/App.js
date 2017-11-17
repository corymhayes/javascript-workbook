import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      board: ['','','',
              '','','',
              '','',''],
      player: 'X',
      outcome: false
    }
  }

  gameLogic = (e) => {

    const handlesPlayerTurn = () => {
      // getting the data-cell attribute from the div
      const playersPick = e.target.dataset.cell;
      // getting the state of player (either X or O)
      const playerTurn = this.state.player;
      // setup a temp board array to store the player's move and then at the end return it in order to setState of this new array
      const tempBoard = this.state.board;


      // if there is nothing in the space the player picked
      if(!tempBoard[playersPick]){
        // this if block determines which state player is in and then based off that
        // to place either X or O and switch player state to next player
        if(playerTurn === 'X'){
          tempBoard[playersPick] = playerTurn;
          this.setState({player: 'O'});
        } else {
          tempBoard[playersPick] = playerTurn;
          this.setState({player: 'X'});
        }
      }

      this.setState({board: tempBoard});
      return playerTurn;
    }


    const handlesWinOrLoss = () => {
      const tempBoard = this.state.board;
      const playerTurn = handlesPlayerTurn();

      if(tempBoard[0] === 'X' && tempBoard[1] === 'X' && tempBoard[2] === 'X'){
        this.setState({outcome: true, player: playerTurn});
      }
    }

    handlesPlayerTurn();
    handlesWinOrLoss();
  }

  // sets the reset button up to bring state back to default
  handlesBoardReset = (e) => {
    this.setState({board: ['','','','','','','','',''], player: 'X', outcome: false});
  }





  render() {
    return (
      <div>
        <div style={{ pointerEvents: this.state.outcome ? 'none' : 'auto' }}>
          <h1>{this.state.outcome ? `${this.state.player} WINS!` : ''}</h1>
          <div className="row">
            <div data-cell="0" onClick={this.gameLogic}>{this.state.board[0]}</div>
            <div data-cell="1" onClick={this.gameLogic}>{this.state.board[1]}</div>
            <div data-cell="2" onClick={this.gameLogic}>{this.state.board[2]}</div>
          </div>
          <div className="row">
            <div data-cell="3" onClick={this.gameLogic}>{this.state.board[3]}</div>
            <div data-cell="4" onClick={this.gameLogic}>{this.state.board[4]}</div>
            <div data-cell="5" onClick={this.gameLogic}>{this.state.board[5]}</div>
          </div>
          <div className="row">
            <div data-cell="6" onClick={this.gameLogic}>{this.state.board[6]}</div>
            <div data-cell="7" onClick={this.gameLogic}>{this.state.board[7]}</div>
            <div data-cell="8" onClick={this.gameLogic}>{this.state.board[8]}</div>
          </div>
        </div>

        <button onClick={this.handlesBoardReset}>reset</button>
      </div>
    );
  }
}

export default App;
