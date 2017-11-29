
import { RECEIVE_POSTS , RECEIVE_POST , CURRENTLY_LOADING  } from '../actions/post_actions';

import merge from 'lodash/merge';



export default (oldState = {}, action) => {

  Object.freeze(oldState);

  switch (action.type){

    case CURRENTLY_LOADING:
      return Object.assign({},oldState, {loading: true})


    case RECEIVE_POSTS:
      return Object.assign({},oldState,{loading:false})

    case RECEIVE_POST:
      return Object.assign({}, oldState, {loading: false})




    default:
      return Object.assign({}, oldState, {loading:false})
  }





}
