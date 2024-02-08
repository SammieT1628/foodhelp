import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Navbar from './NavBar'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar/>
      <Route path="/" component={Home} />
      <Route path='/about' component={About} />

    </Router>
  );
}

export default App;
