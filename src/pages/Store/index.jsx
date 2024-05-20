
import 'App.css';
import ImageGallery from "react-image-gallery";
import MultiActionAreaCard from 'components/Card';
import { Container, Grid } from '@mui/material'; 
import Footer from 'components/Footer';
import PrimarySearchAppBar from 'components/NavigatorBar';
const Main = () => {
    const images = [
    {
        original: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8dZg3-XSWHwJWZfR4FboxEBvztDegQPLfu1jiMlujtA&s"
    },
    {
        original: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8dZg3-XSWHwJWZfR4FboxEBvztDegQPLfu1jiMlujtA&s"
    }
    ];
    return (
        <div className="App">
          <PrimarySearchAppBar/>
          <Container 
            sx={{
              display: "inline-block",
              justifyContent: "center",
              alignItems: "center",
              position: 'relative',
              zIndex: 1,
              top: 64
            }}>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item container justifyContent="center" alignItems="center" sx={{border:"solid 1px black", p:4}}>
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
              <Grid item container direction="row-reverse"
                justifyContent="space-evenly"
                alignItems="center" sx={{border:"solid 1px black"}}>
                <MultiActionAreaCard/>
                <MultiActionAreaCard/>
                <MultiActionAreaCard/>
                <MultiActionAreaCard/>
    
                <MultiActionAreaCard/>            
                <MultiActionAreaCard/>            
                <MultiActionAreaCard/>            
                <MultiActionAreaCard/>
                
                <MultiActionAreaCard/>            
                <MultiActionAreaCard/>            
                <MultiActionAreaCard/>            
                <MultiActionAreaCard/>
              </Grid>
            </Grid>
          </Container>
          <Footer/>
        </div>
    );
}
export default Main;