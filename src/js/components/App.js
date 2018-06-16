import React, { Component } from 'react';

import MenuBar from './MenuBar';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import Photos from './Photos';

import '../../css/App.css';
import '../../css/bootstrap.css';

class App extends Component {
  render() {
    return (
                    <Home />
    );
  }
}

export default App;
