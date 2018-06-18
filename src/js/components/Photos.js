import React from 'react';
import Image from './Image';
import Box from './Box';
import MenuBar from './MenuBar';

import '../../css/App.css';
import '../../css/bootstrap.css';

const Photos = () => (
    <div className="App" >
        <div className="container-fluid">
            <div className="row-fluid">
                <MenuBar />
            </div>
            <div className="row-fluid">
                <div className="container-fluid">
                    <div className="row-fluid">
                        <Box width={100} height={10} widthUnit={"%"} heightUnit={"vh"}/>
                        <div className='rightPanel span9 offset3'>
                            <div className="container-fluid">
                                <div className="row-fluid bodyHeader">
                                    <h1><span className="welcomeHeaderText">My Photos!</span></h1>
                                </div>
                                <Box width={100} height={5} widthUnit={"%"} heightUnit={"vh"}/>
                                <div className="row-fluid">
                                    <div className="span10">
                                        <Image imgIdx={6} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Photos;