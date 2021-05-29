import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Signup from './components/Signup'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

class App extends React.Component {

  render(){
 
    return (
      <Router>
        <Navbar/>
        <Switch>
          <Route path ="/" exact component={Home} />
          <Route path ="/about" exact component={About} />
          <Route path ="/services" exact component={Services} />
          <Route path ="/contact-me" exact component={Contact} />
          <Route path ="/sign-up" exact component={Signup} />
        </Switch>
      </Router>
     
    );
  }
}

export default App;
