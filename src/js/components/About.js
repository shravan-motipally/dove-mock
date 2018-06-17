import React from 'react';
import Image from './Image';
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
                        <div className='rightPanel span9 offset3'>
                            <div className="row-fluid bodyHeader">
                                <h1><span className="welcomeHeaderText">About</span></h1>
                                <Box width={100} height={1} widthUnit={"%"} heightUnit={"vh"}/>
                            </div>
                            <div className="row-fluid">
                                <Box width={100} height={5} widthUnit={"%"} heightUnit={"vh"}/>
                            </div>
                            <div className="row-fluid">
                                <div className="span3">
                                    <Image imgIdx={6} />
                                </div>
                                <div className="span6">
                                    <p className="bodyText">
                                        Greetings traveller! Thank you for visiting my site.
                                        <br/>
                                        My name is Shravan Motipally.  One of my many goals is to photograph this entire world.
                                        Feel free to check out the photos page to explore my adventures!
                                    </p>
                                </div>
                            </div>
                            <div className="row-fluid">
                                <Box width={100} height={5} widthUnit={"%"} heightUnit={"vh"}/>
                            </div>
                            <div className="row-fluid">
                                <div className="span3">
                                    <Image imgIdx={15} />
                                </div>
                                <div className="span6">
                                    <p className="bodyText">
                                        While you're there, buy your favorite pictures to support my adventure.
                                        Each photo sold will come with a free choice of frame!  So shop now!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default About;