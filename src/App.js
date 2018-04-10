import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import Bear from './Bear';

const API_URL = 'http://localhost:8000/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      bears: []
    }
  }
  renderBears = () => {
    this.setState({ loading: true });
    axios.get(API_URL).then(res => {
      this.setState({ loading: false, bears: res.data });
    });
  }
  componentDidMount() {
    this.renderBears();
  }
  render() {
    return (
      <div className='container'>
        <h1>Bear</h1>
        {this.state.loading && (<p>Loading...</p>)}
        {!this.state.loading && (<Bear bears={this.state.bears} />)}
        <a href='#' onClick={this.renderBears}>Refresh</a>
      </div>
    );
  }
}

export default App;
