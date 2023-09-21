import { Routes, Route } from 'react-router';
import LoginPage from '../containers/LoginPage';
import ListingsPage from '../containers/ListingsPage';
import DetailsPage from '../containers/DetailsPage';
import AddListingPage from '../components/AddListingPage';

export default function Router() {
  return (
    <Routes>
      <Route path="/" Component={ListingsPage}/>
      <Route path="login" Component={LoginPage} />
      <Route path="listings/:id" Component={DetailsPage}/>
      <Route path="listings/new" Component={AddListingPage}/>
    </Routes>
  );
}