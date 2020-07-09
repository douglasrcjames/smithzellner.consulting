import React, { Component } from 'react'
import { Route, Switch, withRouter } from "react-router-dom";

import withTracker from './components/misc/WithTracker';
import { Page404 } from "./components/misc/Page404";

// Pages
import Home from './components/pages/Home'
import About from './components/pages/About';
import BooksFilms from './components/pages/BooksFilms';
import Events from './components/pages/Events';
import Alliances from './components/pages/Alliances';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={withTracker(Home)} />
                <Route exact path="/about" component={withTracker(About)} />
                <Route exact path="/books-films" component={withTracker(BooksFilms)} />
                <Route exact path="/events" component={withTracker(Events)} />
                <Route exact path="/alliances" component={withTracker(Alliances)} />
                <Route component={withTracker(Page404)} />
            </Switch>
        )
    }
}

export default withRouter(Routes);