import React, {Component} from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Home from './HomePage';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Header from './Header';
import WebApp from './WebApplications/WebApp';
import MobileApp from './MobileApplications/MobileApp';
import Client from './Client';
import Admin from './Admin'
import { Jumbotron } from 'reactstrap';

class Main extends Component{
    render(){
        return (
            <div>
                <Header />

            <switch>
                <Route path = '/home' component={Home}/>
                <Route exact path = '/aboutus' component={About}/>
                <Route exact path = '/contactus' component={Contact}/>
                <Route exact path = '/webapplication' component={WebApp}/>
                <Route exact path = '/mobileapplication' component={MobileApp}/>
                <Route exact path = '/Client' component={Client}/>
                <Route exact path = '/Admin' component={Admin}/>

            </switch>
            </div>
        )
    }
}
export default withRouter((Main));