import { connect } from 'react-redux';
import Navbar from './Navbar';
import { SetUserIdInURL } from '../../redux/UrlReducer';


function MapStateToProps(state) {
    return {
        UserId: state.Auth.Auth.id
    }
}

let NavbarContainer = connect(MapStateToProps, { SetUserIdInURL })(Navbar)

export default NavbarContainer;