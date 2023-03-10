import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom'
import Detail from './Detail';

export default class Message extends Component {

    state = {
        messageArr: [
            { id: '001', title: '消息1', content: '消息11' },
            { id: '002', title: '消息2', content: '消息22' },
            { id: '003', title: '消息3', content: '消息33' }
        ]
    }
    render() {
        const { messageArr } = this.state;
        return (
            <div>
                <ul>
                    {
                        messageArr.map((message) => {
                            return (
                                <li key={message.id}>
                                    {/* 向路由组件传递params参数 */}
                                    {/* <Link to={`/home/message/detail/${message.id}/${message.title}/${message.content}`}>{message.title}</Link> */}
                                    {/**向路由组件传递search参数 */}
                                    {/* <Link to={`/home/message/detail/?id=${message.id}&title=${message.title}&content=${message.content}`}>{message.title}</Link> */}
                                    {/**向路由组件传递search参数 */}
                                    <Link replace to={{pathname: '/home/message/detail', state: {id: message.id, title: message.title, content: message.content}}}>{message.title}</Link>
                                </li>
                            ) 
                        })
                    }
                </ul>
                {/** 声明接收params参数 */}
                {/* <Route path='/home/message/detail/:id/:title/:content' component={Detail}/> */}

                {/** search参数不用声明接收，正常注册路由即可 */}
                {/* <Route path='/home/message/detail' component={Detail}/> */}

                {/** state参数不用声明接收，正常注册路由即可 */}
                <Route path='/home/message/detail' component={Detail}/>
            </div>
        )
    }
}
