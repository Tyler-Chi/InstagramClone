import { RECEIVE_USER_INFO } from '../actions/user_actions';

import merge from 'lodash/merge';

export default( oldState = {}, action ) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_USER_INFO:
      return action.userInfo

    default:
      return oldState;

  }
}
