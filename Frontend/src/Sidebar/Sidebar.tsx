import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
        <div className='bg-blue-300 w-min-w-48 w-1/4 max-w-64 h-screen'>
             <h1>Profile</h1>
             <h1>Recipes Saved</h1>
             <h1>Account Settings</h1>

        </div>
    )
  }
}

export default Sidebar;