// Importing our components.
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import ListingsPage from './components/ListingsPage';

// Importing our CSS file that React created.
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [listings, setListings] = useState([]);

  useEffect(() =>  {
    const fetchedListings = [
      {
        name: "Home Slice Pizza",
        description: "Home Slice Pizza is an independent neighborhood pizza joint serving authentic NY-style pizza - by the pie or by the slice - to nice people like you. We offer our homemade, hand tossed, bond fide pies to either dine in or carry out.",
        hours: "11AM - 11PM",
        address: "1215 S Congress Ave, Austin, TX 78704",
      },
      {
        name: "Joe's Coffee",
        description: "Stumptown coffee, backed goods & sandwiches in colorful digs with outdoor area for people-watching.",
        hours: "7AM - 9PM",
        address: "242 W 2nd St. Austin, TX 78701"
      }
    ];
    setListings(fetchedListings);
  }, []);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn}/>
      <LoginPage setIsLoggedIn={setIsLoggedIn}/>
      {/* <ListingsPage listings={listings}/> */}
    </>
  );
}

export default App;
