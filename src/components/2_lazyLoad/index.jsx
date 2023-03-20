import React, { Component, lazy, Suspense } from 'react';
import { Route, NavLink, Switch,Redirect } from 'react-router-dom';
import Loading from './Loading';
// import About from './About';
// import Home from './Home';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

export default class Demo extends Component {
  render() {
    return (
        <div>
            <div className='row'>
                <div className='col-xs-offset-2 col-xs-8'>
                </div>
            </div>
            <div className='row'>
                <div className='col-xs-2 col-xs-offset-2'>
                    <div className='list-group'>
                        <NavLink to='/about'>About</NavLink>
                        <NavLink to='/home'>Home</NavLink>
                    </div>
                </div>
                <div className='col-xs-6'>
                    <div className='panel'>
                        <div className='panel-body'>
                            <Suspense fallback={ <Loading /> }>
                                <Switch>
                                    <Route path='/about' component={About}/>
                                    <Route path='/home' component={Home}/>
                                </Switch>
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
