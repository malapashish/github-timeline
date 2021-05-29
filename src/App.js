import React , {useState , useEffect} from 'react';
import axios from 'axios';
import { Redirect, Route } from 'react-router';


import Login from './Pages/Login';
import TimeLine from './Pages/TimeLine';

const App = () => {
    return(
        <>
        <Route exact path = '/' component = {() => <Login />} />
        <Route path = '/timeline'  render = {(props) => <TimeLine {...props} />} />
        </>
    )
}

export default App;