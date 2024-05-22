import { Typography, Grid, Button } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import { Form } from "react-router-dom";
const useError = () => {
    const Page404 = () => {
        return (
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                >
                <Grid item>
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
    return {
        Page404
    }
}
export default useError;