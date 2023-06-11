// import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

import "./style.css";

const index = (props) => {
  return (
    <div className="widgets">

                <div className="widget_box">
                    <div className="widget_box_icon">{props.icon}</div>
                    <div className="widget_box_detail">
                          <div className="widget_box_number">{props.value}</div>
                          <div className="widget_box_description">{props.description}</div>
                    </div>
                    
                </div>
                

            </div>
  )
}

export default index