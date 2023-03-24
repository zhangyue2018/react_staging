import React from 'react';
import {useNavigationType} from 'react-router-dom';
/**
 * useNavigationType:返回当前的导航类型（用户是如何来到当前页面的）
 * 返回值：POP、PUSH、REPLACE
 * 注：POP是指在浏览器中直接打开了这个路由组件（刷新页面）
 */
export default function News() {
    console.log(useNavigationType());
  return (
    <div>
        <ul>
            <li>news001</li>
            <li>news002</li>
            <li>news003</li>
        </ul>
    </div>
  )
}
