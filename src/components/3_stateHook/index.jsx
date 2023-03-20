import React from 'react';

function Demo() {
    console.log('demo');
    let [sum, setCount] = React.useState(0);  // react底层做了处理，第一次调用后，sum被存储，之后重新渲染再次调用时，不会覆盖已存储的值
    const [name, setName] = React.useState('zy');
    function add() {
        // setCount(sum+1); // 第一种写法,参数为非函数值，直接指定新的状态值，内部用其覆盖原来的状态值
        setCount(count => count +1); // 第二种写法，参数为函数，接收原本的状态值，返回新的状态值，内部用其覆盖原来的状态值
        setName(name => name + 'zy');
    }
    return (
        <div>
            <div>当前求和为：{sum}</div>
            <div>我的名字是：{name}</div>
            <button onClick={add}>点我+1</button>
        </div>
    );
}

export default Demo;