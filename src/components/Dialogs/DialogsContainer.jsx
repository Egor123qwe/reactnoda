import Dialogs from './Dialogs'
import { SendMessage } from '../../redux/DialogReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import WithRedirect from '../../HOC/withRedirect';


let mapStateToProps = (state) => {
	return { 
		DialogPage : state.DialogPage,
	}
}

let DialogsContainer = compose(
	connect(mapStateToProps, {SendMessage}),
	WithRedirect
)(Dialogs)

export default DialogsContainer;