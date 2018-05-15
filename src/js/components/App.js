import React, { Component } from 'react';

import MenuBar from './MenuBar';
import Home from './Home';

import '../../css/App.css';
import '../../css/bootstrap.css';

class App extends Component {
  render() {
    return (
        <div className="App" >
            <div className="container-fluid">
                <div className="row-fluid">
                    <MenuBar activePage={0}/>
                </div>
                <div className="row-fluid">
                        <Home />
                </div>
            </div>
        </div>
    );
  }
}

export default App;
