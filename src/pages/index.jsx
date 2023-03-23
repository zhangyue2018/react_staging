import React from 'react';
import { NavLink, useRoutes } from 'react-router-dom';
import routes from '../routes';

import './index.css';

export default function Demo() {

    const elements = useRoutes(routes);

    function computedClassName({isActive}) {
        return isActive ? 'guigu': ''
    }
    return (
        <div>
            <h3>ReactRouter6</h3>
            <div>
                <NavLink className={computedClassName} to="/About">About</NavLink><br />
                <NavLink className={computedClassName} to="/Home">Home</NavLink>
            </div>
            <div>
                {/**注册路由 */}
                {elements}
            </div>
        </div>
    )

}
