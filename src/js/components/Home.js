import React, {Component} from 'react';
import Box from './Box';
import Image from './Image';
import MenuBar from './MenuBar';
import '../../css/App.css';
import '../../css/bootstrap.css';

let text = () => {
    return "";
};

const Home = () => (
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
                                <h1><span className="welcomeHeaderText">Welcome to my journey!</span></h1>
                            </div>
                            <div className="row-fluid">
                                <p className="bodyText">
                                    {text()}
                                </p>
                            </div>
                        </div>
                        <Box width={100} height={5} widthUnit={"%"} heightUnit={"vh"}/>
                    </div>
                    <div className='pictures'>
                        <div className="container-fluid">
                            <div className="row-fluid">
                                <div className='span3 offset3'>
                                    <Image imgIdx={0}/>
                                </div>
                                <div className='span3 '>
                                    <Image imgIdx={1}/>
                                </div>
                                <div className='span3 '>
                                    <Image imgIdx={2}/>
                                </div>
                            </div>
                        </div>
                        <Box width={100} height={5} widthUnit={"%"} heightUnit={"vh"}/>
                        <div className="container-fluid">
                            <div className="row-fluid">
                                <div className='span3 offset3'>
                                    <Image imgIdx={3}/>
                                </div>
                                <div className='span3 '>
                                    <Image imgIdx={4}/>
                                </div>
                                <div className='span3 '>
                                    <Image imgIdx={5}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Home;