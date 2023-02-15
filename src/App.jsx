import React, { Component } from 'react';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import './App.css';
export default class App extends Component {

    state = {
        todos: [
            { id: '001', name: '吃饭', done: true },
            { id: '002', name: '睡觉', done: true },
            { id: '003', name: '打代码', done: false },
            { id: '004', name: '逛街', done: true },
        ]
    }

    addTodos(value) {
        const obj = {
            id: '00' + (this.state.todos.length + 1),
            name: value,
            done: false,
        };
        this.setState({
            todos: [obj, ...this.state.todos]
        });
    }

    render() {
        const { todos } = this.state;
        return (
            <div className='todo-container'>
                <div className='todo-wrap'>
                    <Header addTodos={this.addTodos.bind(this)}/>
                    <List todos={todos} />
                    <Footer />
                </div>
            </div>
        )
    }
}


