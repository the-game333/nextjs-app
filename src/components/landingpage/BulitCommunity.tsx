// material-ui
import { useTheme } from '@mui/material/styles';
import {  Badge, Box, Container, Grid, IconButton, Divider, Typography } from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';
//material-icons
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { FaDiscord } from 'react-icons/fa';
// ============================|| LANDING - KEY FEATURE PAGE ||============================ //

const BulitCommunityPage = () => {
  return (
    <Container>
      <Grid container spacing={gridSpacing} alignItems={"center"}>
        <Grid item md={4} sm={6} display={"flex"} flexDirection={"column"} gap={"20px"}>
          <Grid item xs={12} textAlign={'left'}>
            <Typography variant="h1" fontSize={"3rem"}>Built by the community</Typography>
          </Grid>
          <Grid item xs={12} textAlign={'left'}>
            <Typography variant="h4" fontWeight={'unset'}>
              Open-source is in the heart of Novu. We keep all the source code and work publicly available. Join our community driven project with over <b>3,000+ developers</b> from around the world who contribute code and help building the modern notification infrastructure.
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign={'left'}>
            <Typography variant="h4" fontWeight={'unset'} color={"white"}>
              Join the community:
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign={'left'} display={"flex"} gap={"15px"}>
            <Badge badgeContent={"20k"} color="primary" sx={{ color: "black" }}>
              <IconButton sx={{ borderRadius: "20px", background: "#090909", width: "80px", height: "80px" }} size='large'>
                <GitHubIcon sx={{ fontSize: "3rem" }} />
              </IconButton>
            </Badge>
            <IconButton sx={{ borderRadius: "20px", background: "#090909", width: "80px", height: "80px" }} size='large'>
              <FaDiscord style={{ fontSize: "3rem" }} />
            </IconButton>
            <IconButton sx={{ borderRadius: "20px", background: "#090909", width: "80px", height: "80px" }} size='large'>
              <TwitterIcon sx={{ fontSize: "3rem" }} />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item md={8} sm={6}>
          <Box component={'img'} src={"/assets/images/peoples.webp"} width={"100%"} />
        </Grid>
      </Grid>
      <Divider sx={{ mt: 15 }} />
    </Container>
  );
};

export default BulitCommunityPage;
