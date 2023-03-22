import React, { Component } from 'react';
import Child from './Child';

export default class Parent extends Component {
    state = {
        hasError: null
    };
    static getDerivedStateFromError(error) {
        console.log('@@@', error);
        return {
            hasError: error
        }
    }

    componentDidCatch(error, info) {
        // 此处统计错误，反馈给服务器，用于通知编码人员进行bug的解决
        console.log(error, info);
    }

    render() {
        return (
            <div>
                我是parent组件<br />
                {this.state.hasError ? '网络不稳定，请稍后再试！': <Child />}
            </div>
        )
    }
}
