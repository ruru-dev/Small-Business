// Importing our components.
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import store from "./redux/store";
import Router from "./components/Router";
import Navbar from "./containers/Navbar";

// Importing the main CSS file for the App
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
