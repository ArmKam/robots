import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.coponent';
import { SearchBox } from './components/search-box/search-box.components';
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchfield: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ monsters: data }));
  }



  handleChange(e) {
    this.setState({ searchfield: e.target.value })
  }

  render() {
    const { monsters, searchfield } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchfield.toLocaleLowerCase())
    )
    return (
      <div className="App">
        <h1>Monseters Rolodex</h1>
        <SearchBox

          placeholder="search monster"
          handleChange={this.handleChange}
        />



        <CardList monsters={filteredMonsters} />
      </div >
    );
  };
}

export default App;
