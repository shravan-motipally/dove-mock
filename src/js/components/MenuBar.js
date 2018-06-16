import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { changeLocation } from "../actions/locationActions";
import { Link } from 'react-router-dom';

const mapStateToProps = state => {
  return { currentPage: state.currentPage };
};

const mapDispatchToProps = (dispatch) => {
    return {
        goToHome : () => {
            dispatch(changeLocation("HOME"));
        },
        goToPhotos: () => {
            dispatch(changeLocation("PHOTOS"));
        },
        goToAbout: () => {
            dispatch(changeLocation("ABOUT"));
        }};
};

class MenuBar extends React.Component {
    pages = ['Home', 'Photos', 'About'];
    activePage = 0;

    constructor(props) {
        super(props);
        this.activePage = props.activePage;
    }

    render() {
        return (
            <div className="navbar navbar-inverse topMost" >
                <div className="navbar-inner">
                    <a className="brand" href="">SM</a>
                    <ul className="nav">
                        <li className={(this.props.currentPage === "HOME") ? "active" : ""}
                            onClick={this.props.goToHome}>
                            <Link to="/">{this.pages[0]}</Link>
                        </li>
                        <li className={(this.props.currentPage === "PHOTOS") ? "active" : ""}
                            onClick={this.props.goToPhotos}>
                            <Link to="/photos">{this.pages[1]}</Link>
                        </li>
                        <li className={(this.props.currentPage === "ABOUT") ? "active" : ""}
                            onClick={this.props.goToAbout}>
                            <Link to="/">{this.pages[2]}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MenuBar));