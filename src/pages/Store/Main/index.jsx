import ImageGallery from "react-image-gallery";
import MultiActionAreaCard from 'components/Card';
import { Grid } from '@mui/material'; 
import data from "data.json"
import { useEffect, useState } from 'react';
const Main = () => {
    const [products, setProducts]=useState([]);
    const [images, setImages]=useState([]);
    const loader = () => {
      setProducts(data.p);
      setImages(data.i)
    }
    useEffect(loader, []);
    return (
        <Grid container justifyContent="center" alignItems="center">
          <Grid item container justifyContent="center" alignItems="center" sx={{p:4}}>
            <Grid item xs={12} md={8} sx={{ maxWidth: "100%", height: "auto" }}>
              <ImageGallery
                items={images}
                showThumbnails={false}
                autoPlay={true}
                disableSwipe={false}
                lazyLoad={true}
                showPlayButton={false}
                showBullets={true}
                showFullscreenButton={false}/>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            sx={{ display: { xs: 'flex', md: 'none', sm:'none' } }}
            >
            {products.map(Product)}
          </Grid>
          <Grid
            item
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="stretch"
            sx={{ display: { xs: 'none', sm: 'flex' } }}
            >
            {products.map(Product)}
          </Grid>
        </Grid>
    );
}
const Product = (product) => <MultiActionAreaCard product={product} key={product.id}/>
export default Main;