import React, { Component } from 'react';
import { CardList } from './components/CardList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  } 
  
  getFilteredMonsters() {
    const { monsters, searchField } = this.state;
    return monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLowerCase()) 
    );
  } 

  render() {

    return (
      <div className='App'>
      <input 
        type='search' 
        placeholder='search monsters' 
        onChange={e => this.setState({searchField: e.target.value})} />
        <CardList monsters={getFilteredMonsters()} />
      </div>
    );
  } 
}

export default App;
