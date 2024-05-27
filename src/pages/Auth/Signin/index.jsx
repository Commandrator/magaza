import { Divider, Grid, TextField, Typography, Button, Paper } from "@mui/material";
import { Logo } from "components/NavigatorBar";
import { Link, useNavigate } from "react-router-dom";
const Signin = () => {
    const navigate = useNavigate();
    const handleLogin = () =>  {};
    const handleSignup = () => navigate("/auth/signup");
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center">
            <Grid item sx={{ display: { xs: 'none', md:"flex", sm: 'flex'  } }}>
                <Paper
                    elevation={5}
                    sx={{maxWidth:300, minHeight:400, px:4, py:3, borderRadius:"20px"}}>
                    <Grid
                        container
                        direction="column">
                        <Grid item sx={{mb:4}}>
                            <Logo/>
                        </Grid>
                        <Grid item sx={{mb:2}}>
                            <Typography variant="h6">GİRİŞ</Typography>
                            <Divider sx={{border:"solid 1px black", width:"55px"}}/>
                        </Grid>
                        <Grid item>
                            <Grid item>
                                <TextField
                                    fullWidth
                                    label="E-posta"
                                    variant="outlined" />                                
                                <TextField
                                    sx={{mt:2,mb:1}}
                                    fullWidth
                                    label="Prola"
                                    variant="outlined" />
                            </Grid>
                            <Grid item sx={{display:"flex", justifyContent:"end"}}>
                                <Link
                                    to="/auth/recovery"
                                    style={{
                                        textDecoration:"none",
                                        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                                        fontSize: 14}}
                                >Şifrenizi unuttunuz mu?</Link>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="flex-end"
                            sx={{mt:15}}
                            >
                            <Button
                                sx={{borderRadius:"20px", mr:4}}
                                onClick={handleSignup}
                                variant="text">
                            Hesap Oluştur
                            </Button>
                            <Button
                                onClick={handleLogin}
                                variant="contained"
                                type="submit"
                                sx={{borderRadius:"20px"}}>
                            Giriş Yap
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item sx={{ display: { xs: 'flex', md:"none", sm:"none" } }}>
                <Grid
                    container
                    direction="column">
                    <Grid item sx={{mb:4}}>
                        <Logo/>
                    </Grid>
                    <Grid item sx={{mb:2}}>
                        <Typography variant="h6">GİRİŞ</Typography>
                        <Divider sx={{border:"solid 1px black", width:"55px"}}/>
                    </Grid>
                    <Grid item>
                        <Grid item>
                            <TextField
                                size="small"
                                fullWidth
                                label="E-posta"
                                variant="outlined" />  
                            <TextField
                                size="small"
                                fullWidth
                                label="E-posta"
                                variant="outlined" />                                
                            <TextField
                                size="small"
                                sx={{mt:2,mb:1}}
                                fullWidth
                                label="Prola"
                                variant="outlined" />
                        </Grid>
                        <Grid item sx={{display:"flex", justifyContent:"end"}}>
                            <Link
                                to="/auth/recovery"
                                style={{
                                    textDecoration:"none",
                                    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                                    fontSize: 14}}
                            >Şifrenizi unuttunuz mu?</Link>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-end"
                        sx={{mt:15}}
                        >
                        <Button
                            sx={{borderRadius:"20px", mr:4}}
                            onClick={handleSignup}
                            variant="text">
                        Hesap Oluştur
                        </Button>
                        <Button
                            onClick={handleLogin}
                            variant="contained"
                            type="submit"
                            sx={{borderRadius:"20px"}}>
                        Giriş Yap
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
export default Signin;