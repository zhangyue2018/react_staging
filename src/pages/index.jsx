import React, { Component } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

import About from './About';
import Home from './Home';

export default class Demo extends Component {
    render() {
        return (
            <div>
                <h3>ReactRouter6</h3>
                <div>
                    <NavLink to="/About">About</NavLink><br />
                    <NavLink to="/Home">Home</NavLink>
                </div>
                <div>
                    <Routes>
                        <Route path='/About' element={<About />}/>
                        <Route path='/Home' element={<Home />}/>
                    </Routes>
                </div>
            </div>
        )
    }
}
