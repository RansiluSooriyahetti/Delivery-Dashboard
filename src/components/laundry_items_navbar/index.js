import React, { useState } from "react";
import "./style.css";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const LaundryNavbar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="item_navbar">
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="ALL" sx={{ fontSize: '16px',fontWeight: 'bold' }}/>
          <Tab label="Gents" sx={{ fontSize: '16px',fontWeight: 'bold' }}/>
          <Tab label="Ladies" sx={{ fontSize: '16px',fontWeight: 'bold' }}/>
          <Tab label="Kids"sx={{ fontSize: '16px',fontWeight: 'bold' }} />
        </Tabs>
      </Box>
    </div>
  );
}

export default LaundryNavbar;
