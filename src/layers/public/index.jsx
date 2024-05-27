import Footer from 'components/Footer';
import PrimarySearchAppBar from 'components/NavigatorBar';
import PublicProvider from 'constexts/PublicContext';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
const Public = () => {
    return (
    <PublicProvider>        
        <PrimarySearchAppBar/>
        <Container 
            sx={{
              position: 'relative',
              zIndex: 1,
              top: 64,
              minHeight:"100vh"
            }}>
            <Outlet/>     
        </Container>
        <Footer/>
    </PublicProvider>
    )    
}
export default Public;