import { connect } from 'react-redux';
import FilterBar from './filter_bar';
import * as ACTIONS from '../../actions/storefront_actions';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  priceMax: (price) => dispatch(ACTIONS.priceMax(price)),
  newSort: (sort) => dispatch(ACTIONS.newSort(sort))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterBar);
