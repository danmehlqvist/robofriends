import React, { Component } from 'react';

import CardList from './Components/CardList/CardList';
import SearchBox from './Components/SearchBox/SearchBox'

import './App.css';
import 'tachyons';

import { robots } from './Data/robots';



class App extends Component {

  state = {
    robots,
    searchField: '',
  }

  onSearchChange = (event) => {
    const value = event.target.value;
    this.setState({
      searchField:value
    });
  }
  
  render() {
    const filteredRobots = this.state.robots.filter(robot => robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()))
    return (
      <div className="App">
        <h1 className="f1">Robofriends</h1>
        <SearchBox
          searchChange={this.onSearchChange}
        />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
