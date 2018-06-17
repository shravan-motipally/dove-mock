import React from 'react';
import Box from './Box';
import MenuBar from './MenuBar';

import '../../css/App.css';
import '../../css/bootstrap.css';

const About = () => (
    <div className="App" >
        <div className="container-fluid">
            <div className="row-fluid">
                <MenuBar/>
            </div>
            <div className="row-fluid">
                <div className="container-fluid">
                    <div className="row-fluid">
                        <Box width={100} height={15} widthUnit={"%"} heightUnit={"vh"}/>
                        <div className='rightPanel span6 offset3'>
                            <div className="row-fluid bodyHeader">
                                <h1><span className="welcomeHeaderText">About</span></h1>
                                <Box width={100} height={5} widthUnit={"%"} heightUnit={"vh"}/>
                            </div>
                            <div className="row-fluid">
                                <p className="bodyText">
                                    Greetings traveller! Thank you for visiting my site.
                                    <br/>
                                    My name is Shravan Motipally.  One of my many goals is to photograph this entire world.
                                    <br/>
                                    Feel free to check out the photos page to explore my adventures!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default About;