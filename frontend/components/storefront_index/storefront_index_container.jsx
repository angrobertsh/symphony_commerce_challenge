import { connect } from 'react-redux';
import StorefrontIndex from './storefront_index';
// import * as ACTIONS from '../../actions/storefront_actions';

const mapStateToProps = (state) => ({
  items: state.storefront.items,
  filters: state.storefront.filters
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StorefrontIndex);
