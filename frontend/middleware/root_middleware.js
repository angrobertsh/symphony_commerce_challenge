import { applyMiddleware } from 'redux';
import StorefrontMiddleware from './storefront_middleware';

const RootMiddleware = applyMiddleware(StorefrontMiddleware);

export default RootMiddleware;
