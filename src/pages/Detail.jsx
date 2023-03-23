import React from 'react';
import {useParams, useMatch} from 'react-router-dom';

export default function () {
    const { id, title, content } = useParams();
    // 以下这种方法也可以
    // const x = useMatch('/Home/messages/detail/:id/:title/:content');
    // const { id, title, content } = x;

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
