import React from 'react'
import PropTypes from 'prop-types';

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
        'Delaware - 11.jpg',
        'India - 01.jpg',
        'India - 02.jpg',
        'New Jersey - 01.jpg',
        'New Jersey - 02.jpg',
        'New York - 01.jpg',
        'New York - 02.jpg',
        'Sky - 01.jpg',
        'Sky - 02.jpg',
        'Sky - 03.jpg',
        'Snow day - 01.jpg',
        'Texas - 01.jpg',
        'US - 01.jpg',
        'Error.jpg'];
    currentImgIdx = 0;
    dynamic = false;

    constructor(props) {
        super(props);
        this.currentImgIdx = props.imgIdx;
        this.dynamic = props.isDynamic;
    }

    pic () {
        var fullImg = this.imgFolder + "\\" + this.images[this.currentImgIdx];
        return fullImg;
    }

    render() {
        if (!this.dynamic) {
            return (
                <div>
                    <img className="img-responsive imgsize img-rounded" src={this.pic()} alt="Pictures"/>
                </div>
            )
        }
        else
        {
            return (
                <div>
                    <img/>
                </div>
            )
        }
    }
}

Image.propTypes = {
    imgIdx: PropTypes.number.isRequired,
    isDynamic: PropTypes.bool
};

export default Image;