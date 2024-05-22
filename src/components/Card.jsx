import {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Skeleton } from '@mui/material';
import 'App.css';
export default function MultiActionAreaCard(props) {
  const {product}=props;
  const [image,setImage]=useState();
  const [productName, setProductName]=useState();
  const [productAbout, setProductAbout]=useState();
  const [productPrice, setProductPrice]=useState();
  const [productPriceCurrency, setProductPriceCurrency]=useState();
  const [loaded, setLoaded]=useState(false);
  const loader = () => {
    if (product){
      if (product.image)
        setImage(product.image);
      setProductName(product.name);
      setProductAbout(product.about);
      setProductPrice(product.price);
      setProductPriceCurrency(product.currency)
      setLoaded(true)
    }
  }
  useEffect(loader, [product]);
  return (
    <Card sx={{ maxWidth: 250, m:2 }} className="product-card">
      <CardActionArea>
        {(loaded && image) ?
          <CardMedia
            component="img"
            height="140"
            src={image.url}
            loading="lazy"
            alt={image.alt}
          />:
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={250}
            height={140} />
        }
        <CardContent>
          {loaded && productName? 
            <Typography gutterBottom variant="h5" component="div">
              {productName}
            </Typography>:
            <Skeleton
              width="auto"
              animation="wave"/>}
          {loaded && productAbout?
            <Typography variant="body2" color="text.secondary" textAlign="left">
              {productAbout}
            </Typography>:
            <Skeleton
              animation="wave" 
              width="auto" />}
          {loaded && productPrice?
            <Typography textAlign="right" sx={{mt:2}}>{productPrice + productPriceCurrency}</Typography>:
            <Skeleton
              animation="wave" 
              width={100} />}
        </CardContent>
      </CardActionArea>
      <CardActions sx={{justifyContent:"left"}} className="button-container">
        <Button disabled={!loaded} size="small" color="primary" fullWidth variant="contained">
          Sepete Ekle
        </Button>
      </CardActions>
    </Card>
  );
}