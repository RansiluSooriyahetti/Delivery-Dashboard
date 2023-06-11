import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import Googlemap from "../../components/googlemap"

import "./store_locations.css";

const Store_locations = () => {
  const storesLocations=[
    {lat:6.903382281815686, lng:79.86111515576222},
    {lat:6.857041632617108, lng:79.92147421004535},
    {lat:6.899188463673474, lng:79.89315240122593},
    {lat:6.894051192796972, lng:79.96108360795768},
    {lat:6.919908310943717, lng:79.8589134288351},
    {lat:6.897948002743019, lng:79.87243443300454},
  ]
  return (
    
    <div className = "store_location">
      
      <div className="navbar">
            <Navbar/>
        </div>

        <div className="sidebar">
            <Sidebar/>
            
        </div>

        <div className="dashboardData">

        <div className="googlemap">
            <Googlemap locations={storesLocations} zoom={12}/>
          </div>

        <div className="store_location_data">

          <div className="store_location_data_1">
              <h3>THUMMULLA OUTLET</h3>
              <span>No.126, Reid Avenue, Colombo 04</span><br/>
              <span>T: 0117774400</span>
          </div>

          <div className="store_location_data_2">
              <h3>MAHARAGAMA OUTLET</h3>
              <span>No 229 , Highlevel Road , Maharagama</span><br/>
              <span>T: 0117774430</span>
          </div>

          <div className="store_location_data_3">
              <h3>NAWALA OUTLET</h3>
              <span>No 452 , Nawala Road , Nawala</span><br/>
              <span>T: 0117774450</span>
          </div>
          <div className="store_location_data_4">
              <h3>MALABE OUTLET</h3>
              <span>Glomark , Athurugiriya Road , Malabe</span><br/>
              <span>T: 0117774418</span>
          </div>
          <div className="store_location_data_5">
              <h3>UNION PLACE OUTLET</h3>
              <span>320 Building , Union Place , Colombo 02</span><br/>
              <span>T: 0769886342</span>
          </div>
          <div className="store_location_data_6">
              <h3>CHITHRA LANE OUTLET</h3>
              <span>No 41/3 Chithra Lane,Colombo 5</span><br/>
              <span>T: 0117774455</span>
          </div>


          </div>
           


        </div>

    </div>



  )
}

export default Store_locations