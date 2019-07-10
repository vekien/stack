import ReactDOM from 'react-dom';
import React from 'react';
import Home from './Home';
import About from './About';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const root = document.getElementById('my_react_app');

ReactDOM.render(
    <div>
        <Router>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>

            <hr />

            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
        </Router>

    </div>,
    root
);
