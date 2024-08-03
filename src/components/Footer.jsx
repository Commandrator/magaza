import * as React from 'react';
import { Typography, Grid, Toolbar, Divider } from '@mui/material';
import items from 'data/footer.json';

const Footer = () => {
  return (
    <Toolbar disableGutters sx={{ top: 64 }}>
      <Grid container direction="row" sx={{ display: { xs: 'flex', sm: 'none', md: 'flex' } }}>
        <Grid item container direction="row" justifyContent="space-evenly" alignItems="flex-start">
          {items.map(NavigateRoute)}
        </Grid>
        <Grid item container>
          <Grid item>
            <Typography sx={{ mt: 2 }}>
              © Copyright {process.env.REACT_APP_DATE + " " + process.env.REACT_APP_COMPANY}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="row" sx={{ display: { xs: 'none', sm: 'flex', md: 'none' } }}>
        <Grid item container direction="row" justifyContent="center" alignItems="flex-start">
          {items.map(NavigateRoute)}
        </Grid>
        <Grid item container>
          <Grid item>
            <Typography sx={{ mt: 2, fontSize: '12px', fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
              © Copyright {process.env.REACT_APP_DATE + " " + process.env.REACT_APP_COMPANY}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Toolbar>
  );
};

const NavigateRoute = (group) => (
    <Grid item sx={{ minWidth: 250, mb: 2 }} key={group.id}>
      <Typography variant='h6'>{group.head}</Typography>
      <Divider sx={{ border: '2px solid' }} />
      {group.body.map((item) => (
        <Navigator key={item.id} item={item} />
      ))}
    </Grid>
);

const Navigator = ({ item }) => (
    <Typography sx={{ color: 'gray', ':hover': { color: 'black', transition: 'color 1s' } }}>
      {item.text}
    </Typography>
);
export default Footer;
