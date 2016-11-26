import { combineReducers } from 'redux';
import StorefrontReducer from './storefront_reducer';

const RootReducer = combineReducers({storefront: StorefrontReducer});

export default RootReducer
