import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const img = require('./logo192.png')
class Header extends Component {
    render() {
        return (
            <nav className="navArea">
                <Link to='/'><img src={img} className="logoImg"/></Link>
                <div>
                    <Link to="/posts" className="navLink"><b>Post</b></Link>
                    <Link to="/introduce" className="navLink"><b>Introduce</b></Link>
                </div>
            </nav>
        );
    }
}

export default Header;