import React, { Component } from 'react';

import MenuBar from './MenuBar';
import Image from './Image';
import Home from './Home';
import logo from '../myLogo.png';

import '../css/App.css';
import '../css/bootstrap.css';

class App extends Component {
  render() {
    return (
        <div className="App" >
            <div className="container-fluid">
                <div className="row-fluid">
                    <MenuBar activePage={0}/>
                </div>
                <div className="row-fluid">
                    <div >
                        <Home />
                        {/*<Image img={5}/>*/}
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
