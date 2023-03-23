import React from 'react';
import {useLocation} from 'react-router-dom';

export default function () {
    const {state: {id, title, content}} = useLocation();
    return (
        <div>
            <ul>
                <li>消息id：{id}</li>
                <li>消息title：{title}</li>
                <li>消息content：{content}</li>
            </ul>
        </div>
    )
}
