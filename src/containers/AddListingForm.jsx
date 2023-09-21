import { connect } from 'react-redux';
import AddListingForm from '../components/AddListingForm';
import { addListing } from '../redux/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    addListing: (listing) => dispatch(addListing(listing))
  };
}

export default connect(null, mapDispatchToProps)(AddListingForm);