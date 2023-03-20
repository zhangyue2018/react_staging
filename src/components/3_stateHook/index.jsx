import React from 'react';
import root from '../../index';


// class Demo extends React.Component {

//     state = { count: 0 }

//     myRef = React.createRef();

//     add = () => {
//         this.setState(state => ({ count: state.count + 1 }));
//     }

//     unmount = () => {
//         root.unmount(document.getElementById('root'));
//     }

//     show = () => {
//         alert(this.myRef.current.value);
//     }

//     componentDidMount() {
//         this.timer = setInterval(() => {
//             this.setState(state => ({ count: state.count + 1 }))
//         }, 1000);
//     }

//     componentWillUnmount() {
//         clearInterval(this.timer)
//     }

//     render() {
//         return (
//             <div>
//                 <input type="text" ref={this.myRef}/>
//                 <div>当前求和为：{this.state.count}</div>
//                 <button onClick={this.add}>点我+1</button>
//                 <button onClick={this.unmount}>卸载组件</button>
//                 <button onClick={this.show}>显示输入</button>
//             </div>
//         )
//     }
// }


function Demo() {
    let [sum, setCount] = React.useState(0);  // react底层做了处理，第一次调用后，sum被存储，之后重新渲染再次调用时，不会覆盖已存储的值
    const [name, setName] = React.useState('zy');

    let myRef = React.useRef();

    /**
     * React.useEffect中的第一个传参是函数，此函数在组件加载之后必定会被调用
     * 第二个传参是一个数组，标识哪个状态被监测变化，如果是空数组，则所有状态的变化都不监测（第一个函数相当于componentDidMount）
     * 如果第二个参数不传参，则监测所有的状态的变化（第一个函数相当于componentDidUpdate）
     */
    React.useEffect(() => {
        console.log('hello');
        let timer = setInterval(() => {
            console.log('----hh----');
            setCount(sum++);
        }, 1000);
        // 返回的函数相当于componentWillUnmount，在此做一些收尾的工作，比如清除定时器，取消订阅等
        return () => {
            clearInterval(timer)
        }
    }, []);

    function add() {
        // setCount(sum+1); // 第一种写法,参数为非函数值，直接指定新的状态值，内部用其覆盖原来的状态值
        setCount(count => count + 1); // 第二种写法，参数为函数，接收原本的状态值，返回新的状态值，内部用其覆盖原来的状态值
    }

    function change() {
        setName(name => name + 'zy');
    }

    function unmount() {
        root.unmount(document.getElementById('root'));
    }

    function show() {
        alert(myRef.current.value)
    }

    return (
        <div>
            <input ref={myRef} type="text" />
            <div>当前求和为：{sum}</div>
            <div>我的名字是：{name}</div>
            <button onClick={add}>点我+1</button>
            <button onClick={change}>点我改名</button>
            <button onClick={unmount}>卸载组件</button>
            <button onClick={show}>点我提示数据</button>
        </div>
    );
}

export default Demo;