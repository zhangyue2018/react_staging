import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Header from './components/Header';
import './App.css';
import MyNavLink from './components/MyNavLink';

export default class App extends Component {
  render() {
    return (
        <div>
            <div className='row'>
                <div className='col-xs-offset-2 col-xs-8'>
                    <Header />
                </div>
            </div>
            <div className='row'>
                <div className='col-xs-2 col-xs-offset-2'>
                    <div className='list-group'>
                        {/* <NavLink activeClassName='selected' className='list-group-item' to='/about'>About==</NavLink> */}
                        {/* <NavLink activeClassName='selected' className='list-group-item' to='/home'>Home==</NavLink> */}
                        <MyNavLink to='/about'>About</MyNavLink>
                        <MyNavLink to='/home'>Home</MyNavLink>
                    </div>
                </div>
                <div className='col-xs-6'>
                    <div className='panel'>
                        <div className='panel-body'>
                            <Route path='/about' component={About}/>
                            <Route path='/home' component={Home}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
