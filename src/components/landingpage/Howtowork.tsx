// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Container, Divider, Grid, Typography } from '@mui/material';

// project imports
import FadeInWhenVisible from './Animation';
import SubCard from 'ui-component/cards/SubCard';
import { gridSpacing } from 'store/constant';

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
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={gridSpacing} sx={{ textAlign: 'center' }}>
            <Grid item md={4} sm={6}>
              <FadeInWhenVisible>
                <SubCard>
                  <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={12} md={12} sx={{ padding: '0 !important' }}>
                      <Box component={'img'} alt="Create App - InfraHive" src={'/assets/images/cards/create-app.png'} width={'100%'} />
                    </Grid>
                    <Grid item xs={12} textAlign={'left'}>
                      <Typography variant="h3">Create AI App with One-Click</Typography>
                    </Grid>
                    <Grid item xs={12} textAlign={'left'}>
                      <Typography variant="body2">Select Use Case, Choose AI Model</Typography>
                    </Grid>
                  </Grid>
                </SubCard>
              </FadeInWhenVisible>
            </Grid>
            <Grid item md={4} sm={6}>
              <FadeInWhenVisible>
                <SubCard>
                  <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={12} md={12} sx={{ padding: '0 !important' }}>
                      <Box component={'img'} alt="Connect Data - InfraHive" src={'/assets/images/cards/connect-data.png'} width={'100%'} />
                    </Grid>
                    <Grid item xs={12} textAlign={'left'}>
                      <Typography variant="h3">Connect Data</Typography>
                    </Grid>
                    <Grid item xs={12} textAlign={'left'}>
                      <Typography variant="body2">
                        Train AI Model with your Data with supported formats as PDFs, CSVs, TEXTs, URLs, Google Drive, DropBox, etc.
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
                    <Grid item xs={12} md={12} sx={{ padding: '0 !important' }}>
                      <Box component={'img'} alt="Deploy App - InfraHive" src={'/assets/images/cards/deploy-app.png'} width={'100%'} />
                    </Grid>
                    <Grid item xs={12} textAlign={'left'}>
                      <Typography variant="h3">Deploy App</Typography>
                    </Grid>
                    <Grid item xs={12} textAlign={'left'}>
                      <Typography variant="body2">Deploy App or Integrate in your App with Production-Ready APIS</Typography>
                    </Grid>
                  </Grid>
                </SubCard>
              </FadeInWhenVisible>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 15 }} />
    </Container>
  );
};

export default HowtowworksPage;
