import { Routes, Route } from 'react-router';
import LoginPage from '../containers/LoginPage';
import ListingsPage from '../containers/ListingsPage';
import DetailsPage from '../containers/DetailsPage';

export default function Router() {
  return (
    <Routes>
      <Route path="/" Component={ListingsPage}/>
      <Route path="login" Component={LoginPage} />
      <Route path="listings/:id" Component={DetailsPage}/>
    </Routes>
  );
}