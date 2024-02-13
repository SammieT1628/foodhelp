import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
        <div>
             <h1>Hello world!</h1>
            <Link to="about">About Page</Link>
            <Link to="contact">Contact Page</Link>
        </div>
    )
  }
}

export default Navbar;