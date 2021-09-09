import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// COMPONENTS
import Home from './components/Home';

import './styles.css';

const Body = () =>{

    return(
        <div className="body">
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                
                <Route exact path="/">
                    <Redirect to="/home"/>
                </Route>

            </Switch>
        </div>
    );
}

export default Body;