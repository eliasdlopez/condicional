import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    checked: false
  }

  handleChange = (event) => {
    this.setState({
      checked: !this.state.checked
    })
  }
  render() {

    const content = this.state.checked ? <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velitesse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> : '';

    return (
      <div className="wrapper">
        <label><input type="checkbox" onChange={this.handleChange} /> Mostrar información importante</label>

          { content }

      </div>
    );
  }
}

export default App;
