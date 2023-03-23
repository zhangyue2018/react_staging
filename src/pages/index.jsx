import React from 'react';
import { NavLink, Route, Routes, Navigate } from 'react-router-dom';

import About from './About';
import Home from './Home';

export default function Demo() {
    return (
        <div>
            <h3>ReactRouter6</h3>
            <div>
                <NavLink to="/About">About</NavLink><br />
                <NavLink to="/Home">Home</NavLink>
            </div>
            <div>
                <Routes>
                    {/**Route组件还有replace属性，设置成true时是replace模式（默认是push模式）; caseSensitive：匹配时是否区分大小写*/}
                    <Route path='/About' caseSensitive element={<About />} />
                    <Route path='/Home' caseSensitive element={<Home />} />
                    <Route path='/' element={<Navigate to="/Home" />}/>
                </Routes>
            </div>
        </div>
    )

}
