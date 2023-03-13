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
                <button onClick={this.goFoward}>前进</button>&nbsp;
                <button onClick={this.back}>后退</button>
            </div>
        )
    }
}

export default withRouter(Header);
