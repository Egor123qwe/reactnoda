import { createSelector } from 'reselect';

function getUsers(state) {
    return state.UsersPage.UsersData
}

export let getUsersSelector = createSelector( getUsers, (users) => {
    return users.filter(u => true)
})