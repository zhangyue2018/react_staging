import React, { Component } from 'react';
import './index.css';
// 创建context对象
const MyContext = React.createContext();

export default class A extends Component {
    state = { username: 'tom', age: 18 }
    render() {
        const { username, age } = this.state;
        return (
            <div className='classA'>
                <h1>我是A组件</h1>
                <div>我的用户名是:{username}， 年龄是: {age}</div>
                <MyContext.Provider value={{ username, age }}>
                    <B />
                </MyContext.Provider>
            </div>
        )
    }
}


export class B extends Component {
    render() {
        return (
            <div className='classB'>
                <h1>我是B组件</h1>
                <C />
            </div>
        )
    }
}

// export class C extends Component {
//     // 声明接收context
//     static contextType = MyContext;
//     render() {
//         const {username, age} = this.context;
//         return (
//             <div className='classC'>
//                 <h1>我是C组件</h1>
//                 <div>我的用户名是:{username},我的年龄是:{age}</div>
//             </div>
//         )
//     }
// }

export function C() {
    return (
        <div className='classC'>
            <h1>我是C组件</h1>
            {/**此方法类组件和函数组件都能用 */}
            <div>我的用户名是:<MyContext.Consumer>{value => value.username}</MyContext.Consumer>,我当前年龄是:<MyContext.Consumer>{value => value.age}</MyContext.Consumer></div>
        </div>
    )

}
