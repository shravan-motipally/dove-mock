import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {about_path, base_path, home_path, photos_path, not_found_path} from '../constants/all-routes';
import {ABOUT, HOME, PHOTOS, ERROR} from "../constants/page-types";
import {goToAbout, goToHome, goToPhotos, goToError} from "../dispatchers/locationDispatchers";

const mapStateToProps = state => {
  return { currentPage: state.currentPage };
};

const mapDispatchToProps = (dispatch) => {
    return {
        goToHome : () => goToHome(dispatch),
        goToPhotos: () => goToPhotos(dispatch),
        goToAbout: () => goToAbout(dispatch),
        goToError: () => goToError(dispatch)
    };
};

class MenuBar extends React.Component {
    pages = ['Home', 'Photos', 'About'];
    activePage = 0;

    constructor(props) {
        super(props);
        this.activePage = props.activePage;
    }

    componentWillMount()
    {
        let locationPath = this.props.location.pathname;
        let currentPage = this.props.currentPage;

        if ((locationPath === not_found_path) && currentPage !== ERROR)
            this.props.goToError();
        else if ((locationPath === base_path || locationPath === home_path) && currentPage !== HOME)
            this.props.goToHome();
        else if (locationPath === photos_path && currentPage !== PHOTOS)
            this.props.goToPhotos();
        else if (locationPath === about_path && currentPage !== ABOUT)
            this.props.goToAbout();
    }

    render() {
        let currentPage = this.props.currentPage;

        return (
            <div className="navbar navbar-inverse topMost" >
                <div className="navbar-inner">
                    <a className="brand" href="">SM</a>
                    <ul className="nav">
                        <li className={(currentPage === HOME) ? "active" : ""}
                            onClick={this.props.goToHome}>
                            <Link to={base_path}>{this.pages[0]}</Link>
                        </li>
                        <li className={(currentPage === PHOTOS) ? "active" : ""}
                            onClick={this.props.goToPhotos}>
                            <Link to={photos_path}>{this.pages[1]}</Link>
                        </li>
                        <li className={(currentPage === ABOUT) ? "active" : ""}
                            onClick={this.props.goToAbout}>
                            <Link to={about_path}>{this.pages[2]}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MenuBar));