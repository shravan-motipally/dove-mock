import React from 'react';

class MenuBar extends React.Component {
    pages = ['Home', 'Photos', 'About'];
    activePage = 0;

    constructor(props) {
        super(props);
        this.activePage = props.activePage;
    }

    renderPages() {

    }


    render() {
        return (
            <div className="navbar navbar-inverse topMost" >
                <div className="navbar-inner">
                    <a className="brand" href="#">SM</a>
                    <ul className="nav">
                        <li className={(this.activePage == 0) ? "active" : ""}><a href="#">{this.pages[0]}</a></li>
                        <li className={(this.activePage == 1) ? "active" : ""}><a href="#">{this.pages[1]}</a></li>
                        <li className={(this.activePage == 2) ? "active" : ""}><a href="#">{this.pages[2]}</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MenuBar;