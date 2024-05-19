import * as React from 'react';
import {Typography, Grid, Toolbar} from '@mui/material';
const Footer = () => (
    <Toolbar
        disableGutters //Kenardaki boşlukları kaldırmak için
        sx={{top: 64}}>
        <Grid
            sx={{border:"solid 1px black"}}
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center">
            <Grid item>
                <Typography>Footer İtem</Typography>            
                <Typography>Footer İtem</Typography>
                <Typography>Footer İtem</Typography>            
                <Typography>Footer İtem</Typography>
            </Grid>
            <Grid item>
                <Typography>Footer İtem</Typography>            
                <Typography>Footer İtem</Typography>
                <Typography>Footer İtem</Typography>            
                <Typography>Footer İtem</Typography>
            </Grid>
        </Grid>
    </Toolbar>
)
export default Footer;