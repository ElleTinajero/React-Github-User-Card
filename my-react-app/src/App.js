import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import Card from './components/Card';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users:{}
    }
  };

  componentDidMount() {
    axios.get("https://api.github.com/users/ElleTinajero")
    .then(res => {
      console.log('res', res)
      this.setState({
        users: res.data
      });
    })
    .catch(error => {
      console.log('err', error)
    })
  };

  render () {
    return (
      <div className="App">
          <h1> GitHub User Card: </h1>
          <Card users={this.state.users}/>
     </div>
    )
  } 
};

export default App;
