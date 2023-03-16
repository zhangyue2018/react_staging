import React, { Component } from 'react';
// 引入store，用于获取redux中保存的状态

export default class Count extends Component {
    state = {
        count: 0
    }

    componentDidMount(){
        
    }

    increment = () => {
        const {value} = this.selectNumber;
        this.props.increment(value*1);
    }

    decrement = () => {
        const {value} = this.selectNumber;
        this.props.decrement(value*1);
    }

    incrementIfOdd = () => {
        const {value} = this.selectNumber;
        const curCount = this.props.count;
        if(curCount%2 !== 0) {
            this.props.increment(value*1);
        }
        
    }

    incrementAsync = () => {
        const {value} = this.selectNumber;
        this.props.incrementAsync(value*1, 600);
    }

    render() {
        return (
            <div>
                <h1>当前求和为：{this.props.count}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;
            </div>
        )
    }
}
