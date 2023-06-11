
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';



export default function BasicRating(props) {

    const val = props.val;
  const [value, setValue] = React.useState(val);

  return (
    <Box className="stars"
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend"></Typography>
        <Rating name="read-only" value={val}  />
    </Box>
  );
}