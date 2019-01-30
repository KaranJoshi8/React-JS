import React from 'react';
//import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Contact = () => <h2>Contact</h2>;

class App extends React.Component{
render(){
 return(
 <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
        </ul>
      </nav>
      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/contact/" component={Contact} />
    </div>
  </Router>
  );
}
}
class Home extends React.Component {
  render() {
     return (
        <div>
           <h1>Home div</h1>
        </div>
     )
  }
}

class Abouts extends React.Component {
  render() {
     return (
        <div>
           <h1>About div</h1>
        </div>
     )
  }
}

class Contacts extends React.Component {
  render() {
     return (
        <div>
           <h1>Contact div</h1>
        </div>
     )
  }
}
export default App;