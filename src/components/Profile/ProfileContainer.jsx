import React from 'react';
import { compose } from 'redux';
import Profile from './Profile';
import WithRedirect from '../../HOC/withRedirect';
import withRouter from '../../HOC/withRouter';
import { connect } from 'react-redux';


function ProfileContainer() {

    return (
        <Profile />
      );
}

function MapStateToProps(state) {
  return {}  
}

export default compose(WithRedirect, connect(MapStateToProps, {}))(withRouter(ProfileContainer))