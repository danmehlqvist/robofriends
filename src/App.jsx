import React, { Component } from 'react';

import CardList from './Components/CardList/CardList';
import SearchBox from './Components/SearchBox/SearchBox';
import Scroll from './Components/Scroll/Scroll';

import './App.css';
import 'tachyons';

class App extends Component {

  state = {
    robots: [],
    searchField: '',
    isLoading: true,
  }

  onSearchChange = (event) => {
    const value = event.target.value;
    this.setState({
      searchField: value
    });
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
        <h1 className="f1">Robofriends</h1>
        <SearchBox
          searchChange={this.onSearchChange}
        />
        {/* <Scroll> */}
        <CardList
          robots={filteredRobots}
          isLoading={this.state.isLoading}
        />
        {/* </Scroll> */}
      </div>
    );
  }
}

export default App;
