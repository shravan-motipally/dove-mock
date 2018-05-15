import React, { Component} from 'react';
import Box from './Box';

class Home extends Component {

    text() {
        return "";
    };

    render() {
        return (
          <div className="container-fluid">
              <div className="row-fluid">
                  <Box width={100} height={25} widthUnit={"%"} heightUnit={"vh"}/>
                  <div className='rightPanel span6 offset5'>
                      <div className="row-fluid bodyHeader">
                          <h1><span className="welcomeHeaderText">Welcome to my journey!</span></h1>
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