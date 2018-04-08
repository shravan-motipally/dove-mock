import React from 'react'

class Image extends React.Component {
    imgFolder ='img';
    images = ['Delaware - 01.jpg',
        'Delaware - 02.jpg',
        'Delaware - 03.jpg',
        'Delaware - 04.jpg',
        'Delaware - 05.jpg',
        'Delaware - 06.jpg',
        'Delaware - 07.jpg',
        'Delaware - 08.jpg',
        'Delaware - 09.jpg',
        'Delaware - 09.jpg',
        'Delaware - 10.jpg',
        'Delaware - 11.jpg'];
    currentImg = 0;

    constructor(props) {
        super(props);
        this.currentImg = props.img;
    }

    pic () {
        var fullImg = this.imgFolder + "\\" + this.images[this.currentImg];
        return fullImg;
    }

    render() {
        return (
            <img className="img-responsive imgsize" src={this.pic()} alt="Pictures"/>
        )
    }
}

export default Image;