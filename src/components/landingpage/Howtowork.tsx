// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Container, Divider, Grid, Typography } from '@mui/material';

// project imports
import FadeInWhenVisible from './Animation';
import SubCard from 'ui-component/cards/SubCard';
import Avatar from 'ui-component/extended/Avatar';
import { gridSpacing } from 'store/constant';

// assets
import PaletteTwoToneIcon from '@mui/icons-material/PaletteTwoTone';
import ReorderTwoToneIcon from '@mui/icons-material/ReorderTwoTone';
import SpeedTwoToneIcon from '@mui/icons-material/SpeedTwoTone';

// =============================|| LANDING - FEATURE PAGE ||============================= //

const HowtowworksPage = () => {
  const theme = useTheme();
  return (
    <Container>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} lg={5} md={10} margin={'auto'}>
          <Grid container textAlign={'center'} spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12}>
              <Typography variant="h1" component="div">
                How it works?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">
                READ QUICK START GUIDE
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={gridSpacing} sx={{ textAlign: 'center' }}>
            <Grid item md={4} sm={6}>
              <FadeInWhenVisible>
                <SubCard>
                  <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={12} md={12} sx={{ padding: "0 !important" }}>
                      <Box component={'img'} src={"/assets/images/cards/create-template.svg"} width={"100%"} />
                    </Grid>
                    <Grid item xs={12} textAlign={'left'}>
                      <Typography variant="h3">Create template</Typography>
                    </Grid>
                    <Grid item xs={12} textAlign={'left'}>
                      <Typography variant="body2">
                        Select channels, add content with  ( dynamic )  syntax, and custom rules to control the delivery of notifications.
                      </Typography>
                    </Grid>
                  </Grid>
                </SubCard>
              </FadeInWhenVisible>
            </Grid>
            <Grid item md={4} sm={6}>
              <FadeInWhenVisible>
                <SubCard>
                  <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={12} md={12} sx={{ padding: "0 !important" }}>
                      <Box component={'img'} src={"/assets/images/cards/connect-provider.svg"} width={"100%"} />
                    </Grid>
                    <Grid item xs={12} textAlign={'left'}>
                      <Typography variant="h3">Connect providers</Typography>
                    </Grid>
                    <Grid item xs={12} textAlign={'left'}>
                      <Typography variant="body2">
                        Use a built in collection of popular providers - Sendgrid, Mailgun, Twilio and many more. Add API key and you're ready to go.
                      </Typography>
                    </Grid>
                  </Grid>
                </SubCard>
              </FadeInWhenVisible>
            </Grid>
            <Grid item md={4} sm={6}>
              <FadeInWhenVisible>
                <SubCard>
                  <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={12} md={12} sx={{ padding: "0 !important" }}>
                      <Box component={'img'} src={"/assets/images/cards/add-trigger.svg"} width={"100%"} />
                    </Grid>
                    <Grid item xs={12} textAlign={'left'}>
                      <Typography variant="h3">Add trigger</Typography>
                    </Grid>
                    <Grid item xs={12} textAlign={'left'}>
                      <Typography variant="body2">
                        Send an event trigger using one of our community built SDK's, and we will handle it from there.
                      </Typography>
                    </Grid>
                  </Grid>
                </SubCard>
              </FadeInWhenVisible>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider sx={{mt:15}} />
    </Container>
  );
};

export default HowtowworksPage;
