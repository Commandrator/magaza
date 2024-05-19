import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import '../App.css';
export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 250, mt:3 }} className="product-card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR0N-ZarQchdOpvTQndV2E-JJCtH38cYTBXW28wB9im0MwVpCrYpSkx_YlvAtoaiOWEwWjQDEGhhHYB87Yb_FqYz_GOJfNvP89la6lbATIrLpNIkJAbJizQ&usqp=CAE"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Ürün Adı
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="left">
            Ürün özellikleri hakkında detay. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
          <Typography textAlign="right" sx={{mt:2}}>999.9₺</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{justifyContent:"left"}} className="button-container">
        <Button size="small" color="primary" fullWidth variant="contained">
          Sepete Ekle
        </Button>
      </CardActions>
    </Card>
  );
}