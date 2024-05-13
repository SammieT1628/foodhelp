import { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
        <div className='bg-medium-blue text-pastel-blue w-min-w-48 w-1/4 max-w-60 text-xl space-y-4 h-screen pl-10 pt-10'>
          <h1><Link to="/">Home</Link></h1>
          <h1><Link to="/profile">Profile</Link></h1>
          <h1>Recipes Saved</h1>
          <h1>Account Settings</h1>
        </div>
    )
  }
}

export default Sidebar;