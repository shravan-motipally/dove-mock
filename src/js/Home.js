import React, { Component} from 'react';

class Home extends Component {

    logo = 'img\\logo.svg';

    text() {
        return (
        "To my adventure.  To many wonders.  To experience the same sights.");
    };

    render() {
        return (
          <div className="container-fluid">
              <div className="row-fluid">
                  <div className='leftPanel span3'>
                  </div>
                  <div className='rightPanel span6 offset5'>
                      <div className="row-fluid bodyHeader">

                          <h1><img className="imgToLogo" src={this.logo} alt="Delaware park"/><span className="welcomeHeaderText">WELCOME</span></h1>
                      </div>
                      <div className="row-fluid">
                          <p className="bodyText">
                              {this.text()}
                          </p>
                      </div>
                  </div>
              </div>
          </div>
        );
    }

}

export default Home;