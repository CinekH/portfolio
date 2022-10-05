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
          <Grid item xs={6} paddingLeft={'1rem'} justifyContent="center">
            <Level level={level} text={text} />
          </Grid>
        </Grid>
  )
}

export default Skill