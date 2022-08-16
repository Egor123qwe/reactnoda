import { connect } from 'react-redux';
import Header from './Header';
import React from "react";
import { AuthLogOutThunk } from '../../redux/AuthReducer';

class HeaderApi extends React.Component {

    render() {
        return <Header AuthLogOutThunk={this.props.AuthLogOutThunk} Login={this.props.Login} isAuth={this.props.isAuth}/>
    }
}


function MapStateToProps(state) {
    return {
        Login: state.Auth.Auth.login,
        isAuth: state.Auth.Auth.isAuth
    }
}

let HeaderConteiner = connect(MapStateToProps, { AuthLogOutThunk })(HeaderApi);

export default HeaderConteiner