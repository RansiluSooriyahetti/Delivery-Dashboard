import Stars from './Stars';
// import img from '../../assets/user-2.jpg';

import "./style.css";
const index = (props) => {


  return (
    

    <div className="box">

            <div className="star_box">
                <div className="star_box_pic">
                <img src={props.img} alt="user image" className="pic"/>
                </div>

                <div className="star_box_stars">
                <Stars val={props.val}/>
                </div>

                <div className="star_box_name">
                <h2>{props.name}</h2>
                </div>                
            </div>


            <div className="review">
                <p>{props.description}</p>
                
            </div>

            
            
        

    </div>
  )
}

export default index