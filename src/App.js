import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">HeyDoc.com</h1>
        
        <img src={require('./photos/doctor.jpg')} className="image" />\
      </div>
    );
  }
}

export default App;
