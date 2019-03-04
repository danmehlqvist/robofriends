import React, { Component } from 'react';

import CardList from './Components/CardList/CardList';
import SearchBox from './Components/SearchBox/SearchBox';
import Title from './Components/Title/Title';

import './App.css';
import 'tachyons';

class App extends Component {

  state = {
    robots: [],
    searchField: '',
    isLoading: true,
  }

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        const robots = json.map(x => ({
          id: x.id,
          name: x.name,
          username: x.username,
          email: x.email,
        }));
        this.setState({
          robots,
          isLoading: false,
        });
      })
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()))
    return (
      <div className="App">
        <Title />
        <SearchBox
          searchChange={this.onSearchChange}
        />
        <CardList
          onCardClick={this.onCardClick}
          robots={filteredRobots}
          isLoading={this.state.isLoading}
        />
      </div>
    );
  }

  onSearchChange = (event) => {
    const value = event.target.value;
    this.setState({
      searchField: value
    });
  }

  onCardClick = (indexOfRobotToRemove) => {
    const newRobots = this.state.robots.filter(x => x.id != indexOfRobotToRemove);
    this.setState({
      robots: newRobots,
    });
  }

}

export default App;
