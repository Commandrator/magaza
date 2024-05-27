import { Typography, Grid, Button } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import { Form, useRouteError } from "react-router-dom";
const useError = () => {
    const Error = () => {        
        const code = useRouteError();
        console.log(code)
        switch(code.status){
            case 404:
                return Page404();
            default:
                return unexpectedError(code);
        }
    }
    const Page404 = () => {
        return (
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                >
                <Grid item marginTop={10}>
                    <Typography
                        variant="h1"
                        textAlign="center"
                        sx={{
                            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                            fontSize:150,
                            fontWeight:"bold"
                        }}
                        >404</Typography>
                    <Typography
                        sx={{
                            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                            fontWeight:"bold"
                        }}
                        >Sayfa bulunamadı</Typography>
                    <Typography
                        color="gray"
                        sx={{
                            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
                        }}
                        >Sayfa kaldırılmış veya değiştirilmiş olabilir.</Typography>
                </Grid>
                <Grid
                    item
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    marginTop={10}>
                    <Form method="get" action="/">
                        <Button
                            disableTouchRipple
                            sx={{
                                color:"gray",
                                ":hover&":{
                                    backgroundColor:"transparent",
                                    color:"black"
                                }
                            }}
                            startIcon={<HomeIcon/>}
                            type="submit"
                            >Anasayfa
                        </Button>
                    </Form>
                </Grid>
            </Grid>                    
        )
    }
    const unexpectedError = (code) => {
        return (
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                >
                <Grid item marginTop={10}>
                    <Typography
                        variant="h1"
                        textAlign="center"
                        sx={{
                            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                            fontSize:150,
                            fontWeight:"bold"
                        }}
                        >{code.status.toString()}</Typography>
                    <Typography
                        sx={{
                            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                            fontWeight:"bold"
                        }}
                        >{code.statusText}</Typography>
                    <Typography
                        color="gray"
                        sx={{
                            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                            minWidth:"400px"
                        }}
                        >{code.error.message}</Typography>
                </Grid>
                <Grid
                    item
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    marginTop={10}>
                    <Form method="get" action="/">
                        <Button
                            disableTouchRipple
                            sx={{
                                color:"gray",
                                ":hover&":{
                                    backgroundColor:"transparent",
                                    color:"black"
                                }
                            }}
                            startIcon={<HomeIcon/>}
                            type="submit"
                            >Anasayfa
                        </Button>
                    </Form>
                </Grid>
            </Grid>                    
        )
    }
    return {
        Page404,
        unexpectedError,
        Error
    }
}
export default useError;