import { AddPost } from '../../../redux/ProfileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
	return { 
		ProfilePage : state.ProfilePage 
	}
}

let MyPostConteiner = connect(mapStateToProps, {AddPost})(MyPosts);

export default MyPostConteiner;

