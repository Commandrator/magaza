import PublicProvider from 'constexts/PublicContext';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
const Auth = () => {
    return (
    <PublicProvider>        
        <Container 
            sx={{
              position: 'relative',
              zIndex: 1,
              top: 64
            }}>
            <Outlet/>     
        </Container>
    </PublicProvider>
    )    
}
export default Auth;