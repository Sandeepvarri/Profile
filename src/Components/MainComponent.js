import React,{Component} from 'react';
import Header from './HeaderComponent';
import Home from "./HomeComponent";
import Resume from './ResumeComponent';
import Contact from "./ContactComponent";
import {Switch,Route, Redirect} from 'react-router-dom';
class Main extends Component {
    render(){
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route exact path='/resume' component={Resume}/>
                    <Route exact path='/contact' component={Contact}/>
                    <Redirect to='/home'/>
                <Home/>
                </Switch>
            </div>
        );
    }
}

export default Main;