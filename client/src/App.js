import React from 'react';
import axios from 'axios';
import PlayerList from './components/PlayerList';

class App extends React.Component {
  constructor() {
    super();
    //this state sets the data retrieved from the API
    this.state = {
      players: [],
    }
  }

  //fetching the server data and setting it to state
  componentDidMount() {
    axios.get('http://localhost:5000/api/players').then(res => {
      // console.log(res.data)
      this.setState({
        players: res.data
      })
    }).catch(error => {
      console.log('error', error)
    })
  }
  
  //passes the state into the PlayerList components
  render() {
  return (
    <div className="App">
      <PlayerList players={this.state.players}/>
    </div>
  );
  }
}

export default App;
