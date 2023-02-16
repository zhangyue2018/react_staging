import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
import './index.css';

export default class List extends Component {
    // 对接收的props进行类型、必要性的限制
    static propTypes = {
        todos: PropTypes.array.isRequired,
        updateTodos: PropTypes.func.isRequired,
        deleteTodos: PropTypes.func.isRequired
    }

    render() {
        const { todos } = this.props;
        return (
            <ul className='todo-main'>
                {
                    todos.map(todo => <Item key={todo.id} {...todo} {...this.props}/>)
                }
            </ul>
        )
    }
}
