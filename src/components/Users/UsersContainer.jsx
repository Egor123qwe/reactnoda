import { connect } from 'react-redux';
import Users from "./Users";
import { GetUsersThunk, GetUsersOnNewPageThunk, FollowThunk, UnFollowThunk } from '../../redux/UsersReducer';
import React from "react";
import { getUsersSelector } from '../../redux/userSelector';
import { SetUserIdInURL } from '../../redux/UrlReducer';


class UsersContainerAPI extends React.Component {
    
    componentDidMount() {
        this.props.GetUsersThunk(this.props.UsersCountOnPage, this.props.ChoosingPage)
    }

    OnToogleFollow(id, isFollow) {
        isFollow ? this.props.UnFollowThunk(id) : this.props.FollowThunk(id)
    }

    OnChoosePage(page) {
        this.props.GetUsersOnNewPageThunk(this.props.UsersCountOnPage, page)
    }

    render() {
        return <Users
                    SetUserIdInURL={this.props.SetUserIdInURL}
                    UsersData={this.props.UsersData} 
                    UsersCount={this.props.UsersCount} 
                    UsersCountOnPage={this.props.UsersCountOnPage}
                    ChoosingPage={this.props.ChoosingPage}
                    OnChoosePage={this.OnChoosePage.bind(this)}
                    OnToogleFollow={this.OnToogleFollow.bind(this)}
                    Preloader={this.props.Preloader}
                    DisabledButtons={this.props.DisabledButtons}
                />
    }
}



let MapStateToProps = (state) => {
    return {
        UsersData: getUsersSelector(state),
        UsersCountOnPage: state.UsersPage.UsersCountOnPage,
        UsersCount: state.UsersPage.UsersCount,
        ChoosingPage: state.UsersPage.ChoosingPage,
        Preloader: state.UsersPage.Preloader,
        DisabledButtons: state.UsersPage.DisabledButtons
    }
}

let UsersContainer = connect(MapStateToProps, { GetUsersThunk, GetUsersOnNewPageThunk, FollowThunk, UnFollowThunk, SetUserIdInURL })(UsersContainerAPI)

export default UsersContainer;