import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Home from '../components/pages/home';

const Routes = () => {
    return (  
        <>
            <Route path="/home" component={Home} />
            <Redirect from="/" to="/home" />
        </>
    );
}
 
export default Routes;