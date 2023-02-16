import React, { Component } from 'react'
import './index.css';
export default class Footer extends Component {

    handleCheckAll = (event) => {
        this.props.checkAllTodos(event.target.checked);
    }
    deleteDone = () => {
        this.props.deleteDone();
    }
    render() {
        const { todos } = this.props;
        const doneCount = todos.reduce((res, todo) => res + (todo.done ? 1 : 0), 0);
        return (
            <div className='todo-footer'>
                <label>
                    <input type="checkbox" checked={doneCount && doneCount === todos.length} onChange={this.handleCheckAll}/>
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{todos.length}
                </span>
                <button className='btn btn-danger' onClick={this.deleteDone}>清除已完成任务</button>
            </div>
        )
    }
}
