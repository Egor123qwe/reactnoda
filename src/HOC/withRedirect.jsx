import { connect } from 'react-redux';
import React from "react";
import { Navigate } from 'react-router-dom';

function WithRedirect(Component) {
    function ComponentWithRouter(props) {
        if(!props.isAuth) {
            return <Navigate to='/login' />
        }
        else {
            return <Component {...props}/>
        }
    }

    function MapStateToProps(state) {
        return {
            isAuth : state.Auth.Auth.isAuth
        }
    }

    let ComponentWithRouterProps = connect(MapStateToProps)(ComponentWithRouter)

    return ComponentWithRouterProps
}

export default WithRedirect