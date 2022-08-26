import { createSelector } from 'reselect';
import { AppStateType } from './redux-store';

function getUsers(state: AppStateType) {
    return state.UsersPage.UsersData
}

export let getUsersSelector = createSelector( getUsers, (users) => {
    return users.filter(u => true)
})