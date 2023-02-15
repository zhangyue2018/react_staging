import React, { Component } from 'react'
import './index.css';

export default class Item extends Component {
    state = {
        mouse: false,
        done: this.props.done
    };

    handleMouse = (flag) => {
        return () => {
            this.setState({
                mouse: flag,
            });
        }
    }

    handleCheck = (id) => {
        return (event) => {
            const {target: {checked = false}} = event;
            this.props.updateTodos(id, checked);
        }
    }

    render() {
        const {id, name, done} = this.props;
        const {mouse} = this.state;
        return (
            <li style={{backgroundColor: mouse ? '#ddd' : '#fff'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)} />
                    <span>{name}</span>
                </label>
                <button className='btn btn-danger' style={{display: mouse ? 'block' : 'none'}}>删除</button>
            </li>
        )
    }
}
