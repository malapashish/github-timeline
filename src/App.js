import React  from 'react';
import { Route } from 'react-router';


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