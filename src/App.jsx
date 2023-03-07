import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Header from './components/Header';
// import './App.css';
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
                        <MyNavLink to='/zy/about'>About</MyNavLink>
                        <MyNavLink to='/zy/home'>Home</MyNavLink>
                    </div>
                </div>
                <div className='col-xs-6'>
                    <div className='panel'>
                        <div className='panel-body'>
                            <Switch>
                                <Route exact={true} path='/zy/about' component={About}/>
                                <Route exact path='/zy/home' component={Home}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
