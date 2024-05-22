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
                direction="row">
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
        </Toolbar>
)}
const NavigateRoute = (group) => {
    return(
        <Grid item>
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