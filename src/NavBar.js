import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
        <div class="h-40, w-40 bg-emerald-300">
            <Link to="about">About Page</Link>
            <Link to="contact">Contact Page</Link>
        </div>
    )
  }
}

export default Navbar;