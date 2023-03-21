import React, { Component, PureComponent } from 'react';
import './index.css';

/**
 * Component的2个问题
 * 1.只要执行setState()，即使不改变状态数据，组件也会重新render()
 * 2.只要当前组件重新render()，就会自动重新render子组件，纵使子组件没有用到父组件的任何数据
 * 注：默认情况下，Component中的shouldComponentUpdate返回值总是true
 */

/**
 * PureComponent重写了shouldComponentUpdate，只有state或props数据变化才会返回true
 * 注意：
 * 只是进行state和props数据的浅比较，如果只是数据对象内部数据变了，返回false
 * pureComponent首先比较state的this.state和nextState的地址，若不同在比较对象中的第一层数据（即浅比较）
 */

// export default class Parent extends Component {

//     state = {
//         carName: '奔驰'
//     }
//     changeCar = () => {
//         this.setState({ carName: '迈巴赫' });
//         // this.setState({});
//     }
//     shouldComponentUpdate(nextProps, nextState) {
//         if(this.state.carName === nextState.carName) return false; 
//         return true;
//     }

//     render() {
//         console.log('parent---render----');
//         const { carName } = this.state;
//         return (
//             <div className='parent'>
//                 <h3>我是Parent组件</h3>
//                 <span>我的车名字是:{carName}</span><br />
//                 <button onClick={this.changeCar}>点我换车</button>
//                 <Child carName={carName} />
//                 {/* <Child /> */}
//             </div>
//         )
//     }
// }


// class Child extends Component {

//     shouldComponentUpdate(nextProps, nextState) {
//         if(this.props.carName === nextProps.carName) return false; 
//         return true;
//     }

//     render() {
//         console.log('child---render')
//         return (
//             <div className='child'>
//                 <h3>我是Child组件</h3>
//                 {/* <span>我接到的车是:{this.props.carName}</span> */}
//             </div>
//         )
//     }
// }


export default class Parent extends PureComponent {

    state = {
        carName: '奔驰',
        age: 19
    }
    changeCar = () => {
        this.setState({ carName: '迈巴赫' });
    }

    render() {
        console.log('parent---render----');
        console.log('this.state---render----', this.state);
        const { carName, age } = this.state;
        return (
            <div className='parent'>
                <h3>我是Parent组件</h3>
                <span>我的车名字是:{carName}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>车龄：{age}</span><br />
                <button onClick={this.changeCar}>点我换车</button>
                <Child carName={carName} />
                {/* <Child /> */}
            </div>
        )
    }
}


class Child extends PureComponent {

    render() {
        console.log('child---render')
        return (
            <div className='child'>
                <h3>我是Child组件</h3>
                {/* <span>我接到的车是:{this.props.carName}</span> */}
            </div>
        )
    }
}

