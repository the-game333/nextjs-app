// material-ui
import { useTheme } from '@mui/material/styles';
import { Badge, Box, Container, Grid, IconButton, Divider, Typography } from '@mui/material';

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
      <Grid container spacing={gridSpacing} alignItems={'center'}>
        <Grid item md={4} sm={6} display={'flex'} flexDirection={'column'} gap={'20px'}>
          <Grid item xs={12} textAlign={'left'}>
            <Typography variant="h1" fontSize={'3rem'}>
              Simplify <br />
              AI Development with <span style={{ color: 'rgb(253, 224, 71)' }}> InfraHive</span>
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign={'left'}>
            <Typography variant="h4" fontWeight={'unset'}>
              At InfraHive, we're committed to empowering innovation through our state-of-the-art AI infrastructure. Our platform provides
              businesses and individuals with everything they need to build powerful AI apps with ease. From API integration to full-stack
              infrastructure, we've got you covered.
              <br />
              <br />
              Experience the future of AI with InfraHive and take your capabilities to the next level.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md={8} sm={6}>
          <Box component={'img'} src={'/assets/images/peoples.png'} width={'100%'} />
        </Grid>
      </Grid>
      <Divider sx={{ mt: 15 }} />
    </Container>
  );
};

export default BulitCommunityPage;
