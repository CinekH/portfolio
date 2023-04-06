import React from 'react';
import Level from './Level';
import { Grid, Typography, Icon } from '@mui/material';

const Skill = ({ icon, name, level, text}) => {
  return (
    <Grid item md={6} container alignItems="center">
          <Grid item xs={3}>
            <Icon
              component={icon}
              sx={{ width: "5rem", height: "5rem", mr: "2rem" }}
            />
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h5" color="primary">
              {name}
            </Typography>
          </Grid>
        </Grid>
  )
}

export default Skill
