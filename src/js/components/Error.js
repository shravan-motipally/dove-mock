import React from 'react';
import Image from './Image';
import MenuBar from './MenuBar';

const Error = () => (
    <div className="App" >
        <div className="container-fluid">
            <div className="row-fluid">
                <MenuBar/>
            </div>
            <div className="row-fluid">
                <div className="container-fluid">
                    <div className="row-fluid">
                        <div className="span8 offset3">
                            <Image imgIdx={24} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Error;