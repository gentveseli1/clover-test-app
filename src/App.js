import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Post from "./components/Post";
import Details from "./components/Details";
import Header from "./components/Header";

import {BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component{
    render(){
        return (
            <Router>
                <Header />
                <div className="App">
                    <Route path="/" exact component={Dashboard}/>
                    <Route path="/posts" component={Post}/>
                    <Route path="/pages/details/:noteId" component={Details}/>
                </div>
            </Router>

        );
    }
}

export default App;

