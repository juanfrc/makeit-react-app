import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import './App.css';

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const NoMatch = () => <h1>Página no encontrada</h1>;
const Message = (props) => <h1>Mensaje {props.params.id}</h1>

const Template = (props) => {
  return (
    <div>
      <h1>Mi super aplicación</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="about">About</Link></li>
      </ul>
      {props.children}
    </div>

  )
}

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Template} >
          <IndexRoute component={Home} />
          <Route path="/about" component={About} />
        </ Route >
        <Route path="messages/:id" component={Message} />
        <Route path="*" component={NoMatch} />
      </Router>
    )
  }
}

export default App;
