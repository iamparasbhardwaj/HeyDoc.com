import React, { Component } from 'react';
import fire from './config/Fire';
import Home from './home';
import Login from './login';

class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }
    componentDidMount() {
      this.authListener();
    }
    authListener() {
      fire.auth().onAuthStateChanged((user) => {
        console.log(user);
        if (user) {
          this.setState({ user });
          localStorage.setItem('user', user.uid);
        } else {
          this.setState({ user: null });
          localStorage.removeItem('user');
        }
      });
    }
  render() {
    return (
      <div className="App">
        <h1 className="title">HeyDoc.com</h1>
        <div className="do"></div>
        <div>{this.state.user ? ( <Home/>) : (<Login />)}</div>
      </div>
    );
  }
}
 export default App;