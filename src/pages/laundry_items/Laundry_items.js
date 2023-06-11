import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import  LaundryNavbar from "../../components/laundry_items_navbar";

import "./laundry_items.css";

const Laundry_items = () => {
  return (
    <div className = "laundry_items">
      
      <div className="navbar">
            <Navbar/>
        </div>

        <div className="sidebar">
            <Sidebar/>
            
        </div>

        <div className="dashboardData">

            <div className="nav">
              
              < LaundryNavbar/>
            </div>

            <div className="item_images">
              <div className="item_image">
                <img src={require("../../assets/cloth_items/tshirt.jpg")} alt="1" className="imgs" />	
                <div className="item_image_details">T-Shirt</div>
                <div className="item_image_price">200</div>
              </div>

              <div className="item_image">
              <img src={require("../../assets/cloth_items/shirt.jpeg")} alt="1" className="imgs"/>
              <div className="item_image_details">Shirt</div>
              <div className="item_image_price">300</div>
              </div>

              <div className="item_image">
              <img src={require("../../assets/cloth_items/trouser.jpeg")} alt="1" className="imgs"/>
              <div className="item_image_details">Trouser</div>
              <div className="item_image_price">200</div>
              </div>

              <div className="item_image">
              <img src={require("../../assets/cloth_items/short.jpg")} alt="1" className="imgs"/>
              
              <div className="item_image_details">Short</div>
              <div className="item_image_price">200</div>
              </div>

              <div className="item_image">
              <img src={require("../../assets/cloth_items/mens denim.jpg")} alt="1" className="imgs"/>
              <div className="item_image_details">Denim</div>
              <div className="item_image_price">200</div>
              </div>

              <div className="item_image">
              <img src={require("../../assets/cloth_items/sweater.jpg")} alt="1" className="imgs"/>
              <div className="item_image_details">sweater</div>
              <div className="item_image_price">400</div>
              </div>
              <div className="item_image">
              <img src={require("../../assets/cloth_items/cap.jpg")} alt="1" className="imgs"/>
              <div className="item_image_details">Cap</div>
              <div className="item_image_price">100</div>
              </div>
              <div className="item_image">
              <img src={require("../../assets/cloth_items/jacket.jpg")} alt="1" className="imgs"/>
              <div className="item_image_details">jacket</div>
              <div className="item_image_price">200</div>
              </div>
              <div className="item_image">
              <img src={require("../../assets/cloth_items/lblouse.jpg")} alt="1" className="imgs"/>
              <div className="item_image_details">Blouse</div>
              <div className="item_image_price">200</div>
              </div>
              <div className="item_image">
              <img src={require("../../assets/cloth_items/ldenim.jpg")} alt="1" className="imgs"/>
              <div className="item_image_details">Ladies denim</div>
              <div className="item_image_price">200</div>
              </div>
              <div className="item_image">
              <img src={require("../../assets/cloth_items/lehega.jpg")} alt="1" className="imgs"/>
              <div className="item_image_details">lehega</div>
              <div className="item_image_price">150</div>
              </div>

              <div className="item_image">
              <img src={require("../../assets/cloth_items/lfrock.jpg")} alt="1" className="imgs"/>
              <div className="item_image_details">Frock</div>
              <div className="item_image_price">300</div>
              </div>

              <div className="item_image">
              <img src={require("../../assets/cloth_items/lskirt.jpeg")} alt="1" className="imgs"/>
              <div className="item_image_details">Skirt</div>
              <div className="item_image_price">200</div>
              </div>

              <div className="item_image">
              <img src={require("../../assets/cloth_items/saree.jpg")} alt="1" className="imgs"/>
              <div className="item_image_details">Saree</div>
              <div className="item_image_price">2000</div>
              </div>





            </div>

            

        
        </div>

    </div>

  )
}

export default Laundry_items