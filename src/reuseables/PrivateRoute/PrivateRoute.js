import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({component: Component, ...rest}) => {
    const state = useSelector(state => state.auth);

    return(
        <Route {...rest} component={(props) => {
            const user = state.authenticated ? true: false;

            if(user){
                return <Component {...props} />
            }else{
                return <Redirect to='/login' />
            }

        }} />
    )

 }

export default PrivateRoute;