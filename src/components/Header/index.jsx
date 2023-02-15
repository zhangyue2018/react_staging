import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default class Header extends Component {
    // 对接收的props进行类型、必要性的限制
    static propTypes = {
        addTodos: PropTypes.func.isRequired
    }

    handleKeyUp = (event) => {
        const {keyCode, target} = event;
        if(keyCode === 13) {
            console.log(target.value);
            if(!target.value) {
                return alert('输入的数据不能为空');
            }
            this.props.addTodos(target.value);
            target.value = '';
        }
    }

    render() {
        return (
            <div className='todo-header'>
                <input onKeyUp={this.handleKeyUp} type="text" placeholder='请输入你的任务名称，按回车键确认'/>
            </div>
        )
    }
}
