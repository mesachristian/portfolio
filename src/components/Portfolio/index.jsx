import React from 'react';

import Body from './components/Body';
import Navbar from './components/Navbar';

import {BrowserRouter as Router} from 'react-router-dom';

import './styles.css';

const Portfolio = () =>{
    return(
        <div className="portfolio">
            <Router>
                <Navbar/>
                <Body/>
            </Router>
        </div>
    );
}

export default Portfolio;