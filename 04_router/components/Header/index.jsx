import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Header extends Component {

    goFoward = () => {
        this.props.history.goForward();
    }
    back = () => {
        this.props.history.goBack();
    }

    // componentDidMount() {
    //     setTimeout(() => {
    //         console.log('----props-----', this.props);
    //     }, 2000);
    // }

    render() {
        return (
            <div className='page-header'>
                <h2>React Router Demo</h2>
                <button onClick={this.goFoward}>εθΏ</button>&nbsp;
                <button onClick={this.back}>ει</button>
            </div>
        )
    }
}

export default withRouter(Header);
