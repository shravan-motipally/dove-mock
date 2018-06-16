import React from 'react';

import Box from './Box';
import MenuBar from './MenuBar';

const Photos = () => (
    <div className="App" >
        <div className="container-fluid">
            <div className="row-fluid">
                <MenuBar />
            </div>
            <div className="row-fluid">
                <div className="container-fluid">
                    <div className="row-fluid">
                        <Box width={100} height={15} widthUnit={"%"} heightUnit={"vh"}/>
                        <div className='rightPanel span6 offset3'>
                            <div className="row-fluid bodyHeader">
                                <h1><span className="welcomeHeaderText">My Photos!</span></h1>
                            </div>
                            <div className="row-fluid">
                                <p className="bodyText">
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Photos;