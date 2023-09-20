import { useParams } from 'react-router';
import DetailsCard from './DetailsCard';

export default function DetailsPage({user, listings}) {
  const { id } = useParams();
  const listing = listings.find(listing => listing.id == id);

  return (
    listing ? <DetailsCard business={listing}/> : <><h3>Listing with id {id} not found</h3></>
  );
}
