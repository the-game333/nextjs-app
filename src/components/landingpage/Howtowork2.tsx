// material-ui
import { Box, Container, Grid, Typography } from '@mui/material';
// project imports
import FadeInWhenVisible from './Animation';
import { gridSpacing } from 'store/constant';

import EmailIcon from '@mui/icons-material/Email';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ComputerRoundedIcon from '@mui/icons-material/ComputerRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded';
// ==============================|| LANDING - DEMOS PAGE ||============================== //

const Howtowork2 = () => (
  <Container>
    <Grid container spacing={gridSpacing} minHeight={"650px"}>
      <Grid item textAlign={"center"} xs={12} lg={12} md={12} zIndex={2}>
        <Typography variant="h1" component="div">
          We've built it so you don't have to
        </Typography>
      </Grid>
      <Grid item xs={12} zIndex={2}>
        <Grid container justifyContent="center" spacing={gridSpacing} sx={{ textAlign: 'center' }}>
          <Grid item md={4} sm={6}>
            <FadeInWhenVisible>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12} sx={{ padding: "2 !important", textAlign: "left" }}>
                  <Box component={'img'} src="/assets/animation/icon-1.gif" width={"30%"} sx={{ marginLeft: "-2%" }} />
                </Grid>
                <Grid item xs={12} textAlign={'left'}>
                  <Typography variant="h3">Digest</Typography>
                </Grid>
                <Grid item xs={12} textAlign={'left'}>
                  <Typography variant="body2">
                    A digest engine that aggregates multiple events in to a single precise notification.
                  </Typography>
                </Grid>
              </Grid>
            </FadeInWhenVisible>
          </Grid>
          <Grid item md={4} sm={6}>
            <FadeInWhenVisible>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12} sx={{ padding: "2 !important", textAlign: "left" }}>
                  <Box component={'img'} src="/assets/animation/icon-2.gif" width={"30%"} sx={{ marginLeft: "-2%" }} />
                </Grid>
                <Grid item xs={12} textAlign={'left'}>
                  <Typography variant="h3">User preferences</Typography>
                </Grid>
                <Grid item xs={12} textAlign={'left'}>
                  <Typography variant="body2">
                    Using Novu API to handle all user preferences and subscriptions across channels. UI components included.
                  </Typography>
                </Grid>
              </Grid>
            </FadeInWhenVisible>
          </Grid>
          <Grid item md={4} sm={6}>
            <FadeInWhenVisible>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12} sx={{ padding: "2 !important", textAlign: "left" }}>
                  <Box component={'img'} src="/assets/animation/icon-3.gif" width={"30%"} sx={{ marginLeft: "-2%" }} />
                </Grid>
                <Grid item xs={12} textAlign={'left'}>
                  <Typography variant="h3">Priority management</Typography>
                </Grid>
                <Grid item xs={12} textAlign={'left'}>
                  <Typography variant="body2">
                    A smart API to centralize all communication channels in a single place: E-mail, SMS, Direct, Push and many more...
                  </Typography>
                </Grid>
              </Grid>
            </FadeInWhenVisible>
          </Grid>
          <Grid item md={4} sm={6}>
            <FadeInWhenVisible>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12} sx={{ padding: "2 !important", textAlign: "left" }}>
                  <Box component={'img'} src="/assets/animation/icon-4.gif" width={"30%"} sx={{ marginLeft: "-2%" }} />
                </Grid>
                <Grid item xs={12} textAlign={'left'}>
                  <Typography variant="h3">Monitoring</Typography>
                </Grid>
                <Grid item xs={12} textAlign={'left'}>
                  <Typography variant="body2">
                    Debug deliverability and analyze sending patterns across multiple channels
                  </Typography>
                </Grid>
              </Grid>
            </FadeInWhenVisible>
          </Grid>
          <Grid item md={4} sm={6}>
            <FadeInWhenVisible>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12} sx={{ padding: "2 !important", textAlign: "left" }}>
                  <Box component={'img'} src="/assets/animation/icon-5.gif" width={"30%"} sx={{ marginLeft: "-2%" }} />
                </Grid>
                <Grid item xs={12} textAlign={'left'}>
                  <Typography variant="h3">Content management</Typography>
                </Grid>
                <Grid item xs={12} textAlign={'left'}>
                  <Typography variant="body2">
                    Manage content for all channels and in multiple languages without the need to redeploy your code
                  </Typography>
                </Grid>
              </Grid>
            </FadeInWhenVisible>
          </Grid>
          <Grid item md={4} sm={6}>
            <FadeInWhenVisible>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12} sx={{ padding: "2 !important", textAlign: "left" }}>
                  <Box component={'img'} src="/assets/animation/icon-6.gif" width={"30%"} sx={{ marginLeft: "-2%" }} />
                </Grid>
                <Grid item xs={12} textAlign={'left'}>
                  <Typography variant="h3">Timezone awareness</Typography>
                </Grid>
                <Grid item xs={12} textAlign={'left'}>
                  <Typography variant="body2">
                    Send transactional notifications based on user's timezone and working hours.
                    <div style={{ color: "yellow" }}>Coming soon...</div>
                  </Typography>
                </Grid>
              </Grid>
            </FadeInWhenVisible>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Container >
);

export default Howtowork2;
