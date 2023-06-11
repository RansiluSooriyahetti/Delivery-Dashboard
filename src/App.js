import {BrowserRouter as Router,
        Routes,
        Route,
        Link,
        } from "react-router-dom";

import Dashboard from './pages/dashboard/Dashboard';
import Deliveries from './pages/deliveries/Deliveries';
import Pickups from './pages/pickups/Pickups';
import Invoices from './pages/invoices/Invoices';
import Laundry_items from "./pages/laundry_items/Laundry_items";
import Ratings from "./pages/ratings/Ratings";
import Store_locations from "./pages/store_locations/Store_locations";
import Settings from "./pages/settings";
// import Login from "./pages/login";


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/deliveries" element={<Deliveries/>} />
          <Route path="/pickups" element={<Pickups/>} />
          <Route path="/invoices" element={<Invoices/>} />
          <Route path="/laundry_items" element={<Laundry_items/>} />
          <Route path="/ratings" element={<Ratings/>} />
          <Route path="/store_locations" element={<Store_locations/>} />
          <Route path="/settings" element={<Settings/>} />
          {/* <Route path="/login" element={<Login/>} /> */}
        </Routes>
      </Router>


    </div>



  );
}



export default App;
