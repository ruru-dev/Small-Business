import { connect } from 'react-redux';
import DetailsPage from '../components/DetailsPage';

const mapStateToProps = (state) => ({
  listings: state.listings,
  user: state.user
});

export default connect(mapStateToProps)(DetailsPage);