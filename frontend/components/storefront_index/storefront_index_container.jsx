import { connect } from 'react-redux';
import StorefrontIndex from './storefront_index';

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
