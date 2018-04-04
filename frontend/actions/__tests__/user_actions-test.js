// import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../user_actions';
import * as APIUtil from '../../util/users';

const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);

let testUser = {
    id: 1,
    username: 'Sneezy',
   password: 'thepassword'
}


describe('actions', () => {
    test('receive user info should take info and dispatch action with that info', () => {
        const expectedAction = {
            type: actions.RECEIVE_USER_INFO,
            userInfo: testUser
        };

        expect(actions.receiveUserInfo(testUser)).toEqual(expectedAction);
    });
});