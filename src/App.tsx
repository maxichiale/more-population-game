import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './App.css';
import Home from './pages/home/Home';
import Game from './pages/game/Game';
import Lost from './pages/lost/Lost';

function App() {
    return(
    <Router>
        <div>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/game">
                    <Game />
                </Route>
                <Route path="/lost">
                    <Lost />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    </Router>);
}

export default App;
