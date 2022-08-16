import './App.css';
//import ProfileContainer from './components/Profile/ProfileContainer';
import { Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
//import DialogsContainer from './components/Dialogs/DialogsContainer';
//import UsersContainer from './components/Users/UsersContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import HeaderConteiner from './components/Header/HeaderConteiner';
import Login from './components/Login/Login';
import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { Initialize } from './redux/AppReducer';
import Preloader from './components/Common/Preloader/Preloader';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))


class AppMain extends React.Component {

  componentDidMount() {
    this.props.Initialize()
  }

  render() {
    if (!this.props.isInitialazed) {
      return <Preloader />
    }
    else {
      return (
        <div className="App">
          <HeaderConteiner />
          <NavbarContainer />
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path='/login' element={<Login />}/>
                <Route path='profile/' element={<ProfileContainer />}/>
                <Route path='profile/:userId' element={<ProfileContainer />}/>
                <Route path='/dialogs/*' element={<DialogsContainer />}/>
                <Route path='/users/*' element={<UsersContainer />}/>
                <Route path='/news' element={<News/>}/>
                <Route path='/music' element={<Music/>}/>
                <Route path='/settings' element={<Settings/>}/>
              </Routes>
            </Suspense>
        </div>
      )
    }
  }
}

function MapStateToProps(state) {
  return {
    isInitialazed: state.App.initialize.isInitialazed
  }
}

let App = connect(MapStateToProps, {Initialize})(AppMain)

export default App;
