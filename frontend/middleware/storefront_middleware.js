import * as ACTIONS from "../actions/storefront_actions";
import * as UTILS from "../util/storefront_util";

let success;

const preprocessData = (data) => {
  let itemsObj = JSON.parse(data);
  let processedItems = {};
  itemsObj.products.forEach((item, idx) => {
    processedItems[idx+1] = {id: idx+1, name: item.name, price: item.defaultPriceInCents, image: "http://"+item.mainImage.ref.substring(2, item.mainImage.ref.length)};
  });
  return processedItems;
};

const StorefrontMiddleware = ({state, dispatch}) => next => action => {
  switch(action.type){
    case "FETCH_ITEMS":
      success = (items) => {
        let processedItems = preprocessData(items)
        dispatch(ACTIONS.receiveItems(processedItems));
      };
      UTILS.fetchItems(success);
      return next(action);
    default:
      return next(action);
  }
};

export default StorefrontMiddleware;
