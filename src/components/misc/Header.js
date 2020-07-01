import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { HashLink as NavLink } from 'react-router-hash-link';

class Header extends Component {
    constructor(props) {
        super(props)
    
        this.hamburgerRef = React.createRef();
        this.topNavRef = React.createRef();
    }

    componentDidMount(){
        if(this.hamburgerRef && this.topNavRef){
            this.hamburgerRef.current.addEventListener('click', () => {
                this.hamburgerRef.current.classList.toggle('active');
                this.topNavRef.current.classList.toggle("responsive")
              });
        }
        
    }

    componentWillUnmount(){
        this.hamburgerRef.current.removeEventListener('click');
    }

    render() {
        return (
            <header>
                <div className="top-nav" ref={this.topNavRef}>
                    <NavLink exact to="/" className="nav-l-text" activeClassName="nav-select">
                        ZELLNER CONSULTING
                    </NavLink>
                    <NavLink 
                        exact
                        to="/about" 
                        className="nav-link" 
                        activeClassName="nav-select">
                        About
                    </NavLink>
                    <NavLink 
                        exact
                        to="/events" 
                        className="nav-link" 
                        activeClassName="nav-select">
                        Events
                    </NavLink>
                    <NavLink 
                        exact
                        to="/books-films" 
                        className="nav-link" 
                        activeClassName="nav-select">
                        Books &amp; Films
                    </NavLink>
                    <NavLink 
                        exact
                        to="/#Contact" 
                        className="nav-link right" 
                        activeClassName="nav-select">
                        Contact
                    </NavLink>
                    <a className="icon" href="# ">
                        <svg className="ham hamRotate ham1" viewBox="0 0 100 100" width="40" ref={this.hamburgerRef}>
                            <path
                                    className="line top"
                                    d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
                            <path
                                    className="line middle"
                                    d="m 30,50 h 40" />
                            <path
                                    className="line bottom"
                                    d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
                        </svg>
                    </a>
                    
                </div>
            </header>
        )
    }
}

export default withRouter(Header);