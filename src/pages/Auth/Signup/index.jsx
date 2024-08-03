import { Divider, Grid, TextField, Typography, Button, Paper, Radio, FormControl, FormLabel, FormGroup } from "@mui/material";
import { Logo } from "components/NavigatorBar";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
    const navigate = useNavigate();
    const handleLogin = () =>  navigate("/auth/signin");
    const handleSignup = () => navigate("/auth/signup");
    const [authType, setAuthType]=useState(0);
    const handleChangeType = (e) => {
        const type = e.target.id;
        let tempType = 0;
        switch (type) {
            case "auth_type_0":
                tempType = 0
                break;
            case "auth_type_1":
                tempType = 1
                break;
            default:
                tempType = 0
                break;
        }
        if (tempType !== authType){
            setAuthType(tempType)
        }
    }
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
                            <Typography variant="h6">KAYIT</Typography>
                            <Divider sx={{border:"solid 1px black", width:"55px"}}/>
                        </Grid>
                        <Grid item>
                            <Grid item>    
                                <TextField
                                    fullWidth
                                    label="E-posta"
                                    type="email"
                                    variant="outlined" />                             
                                <TextField
                                    sx={{mt:2,mb:1}}
                                    fullWidth
                                    label="Prola"
                                    type="password"
                                    variant="outlined" />
                                <TextField
                                    sx={{mt:1,mb:1}}
                                    fullWidth
                                    label="Kullanıcı Adı"
                                    variant="outlined" />
                                {/* <FormGroup>
                                    <FormControl>
                                        
                                    <Radio
                                        checked={authType === 0}
                                        id="auth_type_0"
                                        onClick={handleChangeType}/>
                                    </FormControl>
                                    <FormLabel>Bireysel</FormLabel>
                                </FormGroup>
                                <Radio
                                    id="auth_type_1"
                                    checked={authType === 1}
                                    onClick={handleChangeType}/><Typography>Kurumsal</Typography> */}
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
                                onClick={handleLogin}
                                variant="text">
                            Üye Girişi
                            </Button>
                            <Button
                                onClick={handleSignup}
                                variant="contained"
                                type="submit"
                                sx={{borderRadius:"20px"}}>
                            Kayıt Ol
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
                            onClick={handleLogin}
                            variant="text">
                        Üye Girişi
                        </Button>
                        <Button
                            onClick={handleSignup}
                            variant="contained"
                            type="submit"
                            sx={{borderRadius:"20px"}}>
                        Kayıt Ol
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Signup