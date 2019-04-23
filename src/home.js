import React, { Component } from 'react';
import fire from './config/Fire';
import {BrowserRouter, Route} from 'react-router-dom'
import App from './components/App'

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
        <div>
            <BrowserRouter>
            <div>
                 <a href="/" className="next">Add Symptoms</a>
                 <Route path='/' components={App} />
                 </div>
            </BrowserRouter>
        </div>
        );

    }

}

export default Home;