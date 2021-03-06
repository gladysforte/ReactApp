import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
    return(
        <header style={headerStyle}>
            <h1>My Todo List</h1>
            <Link to="/ReactApp" style={LinkStyle}>Home</Link> | <Link to="/About" style={LinkStyle}>About</Link>
        </header>
    )
}

const headerStyle = {
    color: '#fff',
    textAlign: 'center',
    padding: "10px",
    background: "linear-gradient(to bottom, teal, green)",
}

const LinkStyle = {
    color: "#fff",
    textDecoration: "none"
}

export default Header;