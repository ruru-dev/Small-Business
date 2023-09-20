import { connect } from 'react-redux';
import ListingsPage from '../components/ListingsPage';
import { removeListing } from '../redux/actions';

const mapStateToProps = (state) => ({
  listings: state.listings,
  user: state.user
});

const mapDispatchToProps = (dispatch) => {
  return {
    removeListing: (id) => dispatch(removeListing(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingsPage);