// material-ui
// import { useTheme, styled } from '@mui/material/styles';
import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';

// // styles
// const LayoutImageWrapper = styled(Box)(({ theme }) => ({
//   width: '100%',
//   position: 'relative',
//   margin: '-70px 0px',
//   [theme.breakpoints.down('lg')]: {
//     margin: '-30px 0px'
//   }
// }));

// const LayoutImage = styled('img')({
//   position: 'relative',
//   top: 0,
//   left: 0,
//   width: '100%',
//   height: '100%',
//   animation: '5s wings ease-in-out infinite'
// });

// const LayoutContent = styled(Grid)(({ theme }) => ({
//   maxWidth: 400,
//   position: 'relative',
//   '&:after': {
//     content: '""',
//     position: 'absolute',
//     background: theme.palette.mode === 'dark' ? theme.palette.dark.dark : '#FFFFFF',
//     border: `6px solid${theme.palette.secondary.main}`,
//     width: 25,
//     height: 25,
//     borderRadius: '50%',
//     top: 13,
//     left: -20
//   },
//   '&:before': {
//     content: '""',
//     position: 'absolute',
//     background: theme.palette.mode === 'dark' ? theme.palette.dark.main : '#9E9E9E',
//     width: 1,
//     height: 390,
//     top: 13,
//     left: -8
//   },
//   [theme.breakpoints.down('md')]: {
//     '&:before': {
//       height: 290
//     }
//   },
//   [theme.breakpoints.down('lg')]: {
//     '&:after': {
//       left: -12
//     },
//     '&:before': {
//       left: 0,
//       height: 290
//     }
//   }
// }));

// const LayoutRightContent = styled(Grid)(({ theme }) => ({
//   maxWidth: 400,
//   textAlign: 'right',
//   marginLeft: 'auto',
//   position: 'relative',
//   paddingRight: 24,
//   '&:after': {
//     content: '""',
//     position: 'absolute',
//     background: theme.palette.mode === 'dark' ? theme.palette.dark.dark : '#FFFFFF',
//     border: `6px solid${theme.palette.secondary.main}`,
//     width: 25,
//     height: 25,
//     borderRadius: '50%',
//     top: 13,
//     right: -12
//   },
//   '&:before': {
//     content: '""',
//     position: 'absolute',
//     background: theme.palette.mode === 'dark' ? theme.palette.dark.main : '#9E9E9E',
//     width: 1,
//     height: 300,
//     top: 13,
//     right: -1
//   },
//   [theme.breakpoints.down('md')]: {
//     '&:before': {
//       height: '400%'
//     }
//   },
//   [theme.breakpoints.down('lg')]: {
//     '&:after': {
//       right: -4
//     },
//     '&:before': {
//       right: 7
//     }
//   },
//   [theme.breakpoints.down('md')]: {
//     '&:after': {
//       right: 'auto',
//       left: -12
//     },
//     '&:before': {
//       right: 'auto',
//       left: 0,
//       height: 160
//     }
//   }
// }));

// =============================|| LANDING - LAYOUTS PAGE ||============================= //

const FullyFeatured = () => {
  // const theme = useTheme();

  return (
    <Container>
      <Grid container spacing={gridSpacing} alignItems={'center'}>
        <Grid item md={7} sm={12} mt={10}>
          <Box
            component={'img'}
            alt="InfraHive - Animation Fully Featured"
            src="/assets/animation/fully_featured.gif"
            borderRadius={'20px'}
            width={'100%'}
          />
        </Grid>
        <Grid item md={5} sm={12} display={'flex'} flexDirection={'column'} gap={'20px'}>
          <Grid item xs={12} textAlign={'left'}>
            <Typography variant="h1" fontSize={'3rem'} sx={{color : "rgb(215, 220, 236)"}}>
              Full Stack AI Infrastructure, Production Ready APIs
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign={'left'}>
            <Typography variant="h2" fontWeight={'unset'} sx={{color : "rgb(215, 220, 236)"}}>
              Build AI Apps on advanced LLMs and integrate with in your domain
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign={'left'}>
            <Button variant="outlined" href="https://calendly.com/infrahive/infrahive-demo" target={'_blank'} sx={{color : "rgb(215, 220, 236)"}} color="inherit" size="large">
              Request Access
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 15 }} />
    </Container>
  );
};

export default FullyFeatured;
