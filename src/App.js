import React from 'react';
import './App.css';
import Home from './views/Home';
import WhitePage from './views/WhitePage';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/past-trials">
                    <WhitePage page="Past Trials" />
                </Route>
                <Route path="/how-it-works">
                    <WhitePage page="How It Works" />
                </Route>
                <Route path="/login">
                    <WhitePage page="Log In" />
                </Route>
                <Route path="/sign-up">
                    <WhitePage page="Sign Up" />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
