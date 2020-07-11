import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import React from 'react'
import App from './pages/app'
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'
import NotMatch from './pages/404'

export default function IRouter() {
    return <Router>
     <Switch>
        <Route exact path='/' component={App}></Route>
        <Route path='/Login' component={Login}></Route>
        <Route path='/home' component={Home}>
            {/*<Redirect to="/login"></Redirect>*/}
        </Route>
        <Route path='/detail/:id' component={Detail}></Route>
        <Route path="*" component={NotMatch}></Route>
        </Switch>
        </Router>
}