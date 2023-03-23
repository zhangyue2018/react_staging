import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

export default function Message() {
    const navigate = useNavigate();
    const [messages] = useState([
        { id: '001', title: '消息1', content: '锄禾日当午' },
        { id: '002', title: '消息2', content: '汗滴禾下土' },
        { id: '003', title: '消息3', content: '谁知盘中餐' },
        { id: '004', title: '消息4', content: '粒粒皆辛苦' },
    ]);
    function showDetail(msg) {
        // 如果是传params或者search参数，直接拼在第一个参数中
        navigate('detail', {
            replace: false,
            state: {
                id: msg.id,
                title: msg.title,
                content: msg.content
            }
        });
    }

    return (
        <div>
            <ul>
                {
                    messages.map(msg => {
                        // 路由链接
                        return <li key={msg.id}>
                            <Link
                                to='detail'
                                state={{
                                    id: msg.id,
                                    title: msg.title,
                                    content: msg.content
                                }}>
                                {msg.title}
                            </Link>
                            <button onClick={() => showDetail(msg)}>点我查看详情</button>
                        </li>
                    })
                }
            </ul>
            {/**指定路由组件的展示位置 */}
            <Outlet />
        </div>
    )
}
