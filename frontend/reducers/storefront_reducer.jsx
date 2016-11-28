import * as ACTIONS from '../actions/storefront_actions';
import merge from 'lodash/merge';

const defaultState = {
  items: {},
  filters: {price: 0}
};

let newState;

const StorefrontReducer = (state = defaultState, action) => {
  switch(action.type){
    case "RECEIVE_ITEMS":
      newState = merge({}, state, {items: action.items});
      return newState;
    case "PRICE_MAX":
      newState = merge({}, state, {filters: {price: action.price}});
      return newState;
    default:
      return state;
  }
};

export default StorefrontReducer;
