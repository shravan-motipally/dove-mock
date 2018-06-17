import React from 'react';

export default class Box extends React.Component {

    width = 100;
    height = 25;
    widthUnit = "vw";
    heightUnit = "%";

    constructor(props) {
        super(props);
        this.width = props.width;
        this.height = props.height;
        this.widthUnit = props.widthUnit;
        this.heightUnit = props.heightUnit;
    }

    render () {
        return (
            <div>
                <span className="homeBox" style={{width:this.width + this.widthUnit, height: this.height + this.heightUnit, display: "inline-block"}}/>
            </div>
        );
    }
}

