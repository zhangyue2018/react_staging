import React, { Component } from 'react';
import './index.css';

export default class Parent extends Component {
    render() {
        return (
            <div className='parent'>
                我是parent组件
                {/* <A><B/></A> */}
                <A render={(name) => <B name={name}/>}></A>
            </div>
        )
    }
}

class A extends Component {
    state = {name: 'name_A'}
    render() {
        const { name } = this.state;
        return (
            <div className='a'>
                我是A组件
                {/* {this.props.children} */}
                {this.props.render(name)}
            </div>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div className='b'>
                我是B组件,name：{this.props.name}
            </div>
        )
    }
}
