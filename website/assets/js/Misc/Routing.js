import {BrowserRouter as Router, Link} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import React from "react";

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

</div>
