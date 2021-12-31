import { Grid } from '@mui/material';
import React from 'react';

const ToppingsOptions = ({
  name,
  imagePath,
}: {
  name: string;
  imagePath: string;
}): React.ReactElement => {
  return (
    <Grid>
      <img src={`http://localhost:3030${imagePath}`} alt={`${name} toppings`} />
    </Grid>
  );
};

export default ToppingsOptions;
