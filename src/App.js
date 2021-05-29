import React  from 'react';
import { Route } from 'react-router';


import TimeLine from './Pages/TimeLine'; 

const App = () => {
    return(
        <>
        <Route exact path = '/' component = {() => <TimeLine />} /> 
        </>
    )
}

export default App;