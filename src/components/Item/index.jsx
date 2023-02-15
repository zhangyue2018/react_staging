import React, { Component } from 'react'
import './index.css';

export default class Item extends Component {
    state = {mouse: false};

    handleMouse = (flag) => {
        return () => {
            this.setState({
                mouse: flag,
            });
        }
    }

    render() {
        const {name, done} = this.props;
        const {mouse} = this.state;
        return (
            <li style={{backgroundColor: mouse ? '#ddd' : '#fff'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" defaultChecked={done} />
                    <span>{name}</span>
                </label>
                <button className='btn btn-danger' style={{display: mouse ? 'block' : 'none'}}>删除</button>
            </li>
        )
        // return (
        //     <li>
        //         <label>
        //             <input type="checkbox" defaultChecked={done} />
        //             <span>{name}</span>
        //         </label>
        //         <button className='btn btn-danger'>删除</button>
        //     </li>
        // )
    }
}
