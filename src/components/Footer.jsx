import * as React from 'react';
import {Typography, Grid, Toolbar, Divider} from '@mui/material';
import items from "data/footer.json";
const Footer = () => {
    
    return (
        <Toolbar
            disableGutters //Kenardaki boşlukları kaldırmak için
            sx={{top: 64}}>
            <Grid
                container
                direction="row"
                sx={{ display: { xs: 'none', md:"flex", sm: 'flex'  } }}>
                <Grid
                    item
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="flex-start">
                    {items.map(NavigateRoute)}
                </Grid>
                <Grid
                    item
                    container>
                    <Grid item>
                        <Typography sx={{mt:2}}>© Copyright {process.env.REACT_APP_DATE + " " + process.env.REACT_APP_COMPANY}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                container
                direction="row"
                sx={{ display: { xs: 'flex', md:"none", sm:"none" } }}>
                <Grid
                    item
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="flex-start">
                    {items.map(NavigateRoute)}
                </Grid>
                <Grid
                    item
                    container>
                    <Grid item>
                        <Typography sx={{mt:2, fontSize:"12px", fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'}}>© Copyright {process.env.REACT_APP_DATE + " " + process.env.REACT_APP_COMPANY}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Toolbar>
)}
const NavigateRoute = (group) => {
    return(
        <Grid item sx={{minWidth:250, mb:2}}>
            <Typography variant='h6'>{group.head}</Typography>
            <Divider sx={{border:"2px solid"}}/>          
            {group.body.map(Navigator)}
        </Grid>
    )
}
const Navigator = (item) => {
    return (
        <Typography sx={{color:"gray",":hover&":{color:"black", transition:"color 1s"}}}>{item.text}</Typography>
    )
}
export default Footer;