import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo';
import React from "react";
import { GetUserThunk, GetStatus, UpdateStatus, SetProfileImageThunk } from '../../../redux/ProfileReducer';
import withRouter from '../../../HOC/withRouter';

class ProfileInfoAPI extends React.Component {

    componentDidMount() {
        this.props.GetUserThunk( this.props.router.params.userId ? this.props.router.params.userId : this.props.MyId )
        this.props.GetStatus( this.props.router.params.userId ? this.props.router.params.userId : this.props.MyId )
    }

    componentDidUpdate(PrevProps) {
        if (PrevProps.UrlId !== this.props.UrlId) {
            this.props.GetUserThunk( this.props.router.params.userId ? this.props.router.params.userId : this.props.MyId )
            this.props.GetStatus( this.props.router.params.userId ? this.props.router.params.userId : this.props.MyId )
        }
    }

    render() {
        return (<ProfileInfo MyId={this.props.MyId} UserId={this.props.router.params.userId} 
                             UpdateStatus={this.props.UpdateStatus} ProfileInfoData={this.props.ProfileInfoData}
                             SetProfileImageThunk={this.props.SetProfileImageThunk}/>)
    }
} 

function MapStateToProps(state) {
    return {
        ProfileInfoData: state.ProfilePage.ProfileInfoData,
        MyId: state.Auth.Auth.id,
        UrlId: state.Url.UserIdInURL.id,
    }
}

let ProfileinfoContainer = connect(MapStateToProps, { GetUserThunk, GetStatus, UpdateStatus, SetProfileImageThunk })(withRouter(ProfileInfoAPI))

export default ProfileinfoContainer