import * as ACTIONS from "../actions/storefront_actions";
import * as UTILS from "../util/storefront_util";

let success;

const StorefrontMiddleware = ({state, dispatch}) => next => action => {
  switch(action.type){
    case "FETCH_ITEMS":
      success = (items) => {
        dispatch(ACTIONS.receiveItems(items));
      };
      UTILS.fetchItems(success);
      return next(action);
    default:
      return next(action);
  }
};

export default StorefrontMiddleware;
