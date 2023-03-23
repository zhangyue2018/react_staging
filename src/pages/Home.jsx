import React, { useState } from 'react';
import {NavLink, Outlet} from 'react-router-dom';

export default function Home() {
    return (
        <div>
                <h3>我是Home里的内容</h3>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <NavLink className='list-group-item' to="news">News</NavLink>
                            {/**注释的两总方法也都可以有同样的效果 */}
                            {/* <NavLink className='list-group-item' to="./news">News</NavLink> */}
                            {/* <NavLink className='list-group-item' to="/Home/news">News</NavLink> */}
                        </li>
                        <li>
                            <NavLink className='list-group-item' to="messages">Message</NavLink>
                            {/**注释的两总方法也都可以有同样的效果 */}
                            {/* <NavLink className='list-group-item' to="./messages">Message</NavLink> */}
                            {/* <NavLink className='list-group-item' to="/Home/messages">Message</NavLink> */}
                        </li>
                    </ul>
                    <Outlet/>
                </div>
            </div>
    )
}

