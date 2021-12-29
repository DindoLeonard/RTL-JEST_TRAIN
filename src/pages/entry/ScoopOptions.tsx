import { Grid } from '@mui/material';
import React from 'react';

const ScoopOptions = ({
  name,
  imagePath,
}: {
  name: string;
  imagePath: string;
}): React.ReactElement => {
  return (
    <Grid xs={12} sm={6} md={4} item>
      <img
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} scoop`}
        style={{ width: '75%' }}
      />
    </Grid>
  );
};

export default ScoopOptions;
