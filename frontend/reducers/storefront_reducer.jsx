import * as ACTIONS from '../actions/storefront_actions';
import merge from 'lodash/merge';

const defaultState = {
  items: {}
};

let newState;

const StorefrontReducer = (state = defaultState, action) => {
  switch(action.type){
    case "RECEIVE_ITEMS":
      newState = merge({}, state, {items: action.items});
      return newState;
    default:
      return state;
  }
};

export default StorefrontReducer;
