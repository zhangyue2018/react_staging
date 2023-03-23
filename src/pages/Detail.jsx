import React from 'react';
import {useSearchParams, useLocation} from 'react-router-dom';

export default function () {
    // setSearch:更新收到的search参数
    const [search, setSearch] = useSearchParams();
    const id = search.get('id');
    const title = search.get('title');
    const content = search.get('content');
    function updateSearch() {
        setSearch('id=005&title=两个黄鹂鸣翠柳&content=一行白鹭上青天');
    }

    let x = useLocation();
    console.log('@@@', x);
    return (
        <div>
            <ul>
                <li>消息id：{id}</li>
                <li>消息title：{title}</li>
                <li>消息content：{content}</li>
                <li><button onClick={updateSearch}>点我更新收到的参数</button></li>
            </ul>
        </div>
    )
}
