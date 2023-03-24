import React, { useState } from 'react';
import {NavLink, Outlet, useOutlet} from 'react-router-dom';
/**
 * useOutlet:用来呈现当前组件中渲染的嵌套路由
 * 如果嵌套路由没有挂载，则result为null
 * 如果嵌套路由已经挂载，则展示嵌套路由的对象
 * 
 */
export default function Home() {
    console.log('----useOutlet----', useOutlet());
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

