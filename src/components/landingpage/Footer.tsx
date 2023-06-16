// import Image from 'next/image';
// material-ui
import { useTheme, styled } from '@mui/material/styles';
import {
  Container,
  Grid,
  Link,
  Typography
  // , Stack, Divider, Button
} from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';

// assets
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram'
// import GitHubIcon from '@mui/icons-material/GitHub';
// logo
import Logo from '../ui-component/Logo';

// styles
const FooterWrapper = styled('div')(({ theme }) => ({
  padding: '35px 0',
  color: '#fff',
  background: 'black',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center'
  }
}));

const FooterLink = styled(Link)({
  color: '#fff',
  display: 'inline-flex',
  alignItems: 'center',
  textDecoration: 'none !important',
  opacity: '0.8',
  '& svg': {
    fontsize: '1.125rem',
    marginRight: 8
  },
  '&:hover': {
    opacity: '1'
  }
});

// ==============================|| LANDING - FOOTER PAGE ||============================== //

const FooterPage = () => {
  const theme = useTheme();
  return (
    <>
      <FooterWrapper>
        <Container>
          <Grid container spacing={gridSpacing} zIndex={2}>
            <Grid item xs={12} sm={2.4} textAlign={'left'}>
              <Logo />
            </Grid>
            <Grid item xs={6} sm={2.4} textAlign={'left'} display={'flex'} flexDirection={'column'} gap={'10px'}>
              {/* <Grid item>
                <FooterLink href="/price" target="" underline="hover">
                  Pricing
                </FooterLink>
              </Grid> */}
              <Grid item>
                <FooterLink href="/contact" target="" underline="hover">
                  Contact Us
                </FooterLink>
              </Grid>
              <Grid item>
                <FooterLink href="privacy" target="" underline="hover">
                  Privacy Policy
                </FooterLink>
              </Grid>
              <Grid item>
                <FooterLink href="/join" target="" underline="hover">
                  Careers
                </FooterLink>
              </Grid>
              {/* <Grid item>
                <FooterLink href="#" target="" underline="hover">
                  Blogs
                </FooterLink>
              </Grid> */}
            </Grid>
            <Grid item xs={6} sm={2.4} textAlign={'left'} display={'flex'} flexDirection={'column'} gap={'10px'}>
              {/* <Grid item>
                <FooterLink href="/contact" target="" underline="hover">
                  Government AI
                </FooterLink>
              </Grid> */}
              <Grid item>
                <FooterLink href="/contact" target="" underline="hover">
                  Enterprise AI
                </FooterLink>
              </Grid>
              <Grid item>
                <FooterLink href="/contact" target="" underline="hover">
                  Consumer AI
                </FooterLink>
              </Grid>
              <Grid item>
                <FooterLink href="/contact" target="" underline="hover">
                  Education AI
                </FooterLink>
              </Grid>
            </Grid>
            {/* <Grid item xs={6} sm={2.4} textAlign={'left'} display={'flex'} flexDirection={'column'} gap={'10px'}>
              <Grid item>
                <FooterLink href="https://blog.berrydashboard.io/" target="_blank" underline="hover">
                  Disocord
                </FooterLink>
              </Grid>
              <Grid item>
                <FooterLink href="https://www.facebook.com/codedthemes" target="_blank" underline="hover">
                  Twitter
                </FooterLink>
              </Grid>
              <Grid item>
                <FooterLink href="https://twitter.com/codedthemes" target="_blank" underline="hover">
                  Github
                </FooterLink>
              </Grid>
              
            </Grid> */}
            {/* <Grid item xs={6} sm={2.4} textAlign={'left'} display={'flex'} flexDirection={'column'} gap={'10px'}>
              <Grid item>
                <FooterLink href="https://blog.berrydashboard.io/" target="_blank" underline="hover">
                  Terms of Use
                </FooterLink>
              </Grid>
              <Grid item>
                <FooterLink href="https://www.facebook.com/codedthemes" target="_blank" underline="hover">
                  Privacy Policy
                </FooterLink>
              </Grid>
              <Grid item>
                <FooterLink href="https://twitter.com/codedthemes" target="_blank" underline="hover">
                  DPA
                </FooterLink>
              </Grid>
              <Grid item>
                <FooterLink href="https://twitter.com/codedthemes" target="_blank" underline="hover">
                  Status Page
                </FooterLink>
              </Grid>
            </Grid> */}
            {/* <Grid item xs={12} sm={2} textAlign={"left"} display={"flex"} flexDirection={"column"} gap={"10px"}>
              <Grid item>
                <Button
                  component={Link}
                  href="https://github.com/novuhq/novu"
                  variant="outlined"
                  sx={{
                    borderColor: "white", color: "white", '&:hover': {
                      borderColor: "white"
                    }
                  }}
                  size='small'
                >
                  <Stack direction={'row'} gap={"10px"} alignItems={'center'}>
                    <GitHubIcon sx={{
                      fontSize: "1.7rem"
                    }} />
                    <Typography variant='caption' sx={{ fontSize: "0.65rem", color: "white" }} textTransform={'uppercase'}>
                      star us
                    </Typography>
                    <Divider orientation="vertical" sx={{ opacity: 1, height: "20px", margin: "auto" }} flexItem />
                    <Typography variant='caption' sx={{ fontSize: "0.65rem", color: "white" }} textTransform={'uppercase'}>
                      20.1K
                    </Typography>
                  </Stack>
                </Button>
              </Grid>
            </Grid> */}
          </Grid>
          {theme.breakpoints.down('md') && <br />}
          <Grid container justifyContent={'space-between'}>
            <Grid item>
              <Typography color={'grey !important'} component={'div'}>
                Ⓒ {new Date().getFullYear()} Aivinya Inc.
              </Typography>
            </Grid>
            {/* <Grid item>
              <Typography color={'grey !important'} component={'div'}>
                Design made by Pixel Point
              </Typography>
            </Grid> */}
          </Grid>
        </Container>
      </FooterWrapper>
    </>
  );
};

export default FooterPage;
