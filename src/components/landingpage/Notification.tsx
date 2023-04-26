// material-ui
import { Container, Grid, Typography, Box, Stack, Button, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
// project imports
import FadeInWhenVisible from './Animation';
import { gridSpacing } from 'store/constant';
const CardBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    width: "70%",
    textAlign: "center",
    justifyContent: "center",
    gap: "30px",
    borderRadius: "20px",
    padding: "20px"
}));
const Notification = () => (
    <Container>
        <Grid container spacing={gridSpacing} gap={"20px"} sx={{ position: "relative" }}>
            <Grid item textAlign={"center"} xs={12} lg={12} md={12} zIndex={2}>
                <Typography variant="h1" component="div">
                    Ready to send your first notification?
                </Typography>
            </Grid>
            <Grid container zIndex={2}>
                <Grid item md={6} xs={12} display={"flex"} flexDirection={"column"} alignItems={"center"} p={3}>
                    <CardBox sx={{ backgroundColor: "#141414c4" }} >
                        <Stack direction={"column"} gap={"10px"}>
                            <Typography variant="h2" component="div">
                                Self-Hosted
                            </Typography>
                            <Typography variant="h4" component="div">
                                Run locally with docker-compose
                            </Typography>
                        </Stack>
                        <Button variant='outlined' color='inherit' sx={{ width: "60%", margin: "auto" }} size='medium'>
                            Read Docs
                        </Button>
                    </CardBox>
                </Grid>
                <Grid item md={6} xs={12} display={"flex"} flexDirection={"column"} alignItems={"center"} p={3}>
                    <CardBox sx={{ background: "linear-gradient(180deg,transparent 54.67%,rgba(0,0,0,.3)),linear-gradient(257.22deg,#fb3 21.09%,#e300bd 55.18%,#ff006a 92.64%)" }} >
                        <Stack direction={"column"} gap={"10px"}>
                            <Typography variant="h2" component="div" color={"black"}>
                                Cloud
                            </Typography>
                            <Typography variant="h4" component="div" color={"black"}>
                                Use our free managed service
                            </Typography>
                        </Stack>
                        <Button variant='contained' color='inherit' sx={{
                            width: "60%", margin: "auto", color: "white", background: "black", "&:hover": {
                                background: "#141414c4"
                            }
                        }} size='medium'>
                            get started
                        </Button>
                    </CardBox>
                </Grid>
            </Grid>
            <img src="/assets/images/header/background.svg" loading="lazy" alt="" aria-hidden="true" style={{ color: '#1414149e', position: "absolute", width: "100%", top: "0px", height: "100%" }}></img>
        </Grid>
        <Divider sx={{ mt: 15 }} />
    </Container >
);

export default Notification;
