// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Box, Button, Container, Grid, InputBase, Paper, TextField, Typography } from '@mui/material';

// third party
import { motion } from 'framer-motion';
import Link from 'Link';
// project imports
// project imports
import Avatar from 'ui-component/extended/Avatar';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useState } from 'react';
// styles
const HeaderImage = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  borderRadius: '20px',
  transform: 'scale(1.7)',
  transformOrigin: theme.direction === 'rtl' ? '100% 50%' : '0 50%',
  [theme.breakpoints.down('lg')]: {
    transform: 'scale(1.2)'
  }
}));

// ==============================|| LANDING - HEADER PAGE ||============================== //

const HeaderPage = () => {
  const theme = useTheme();
  const [text, setText] = useState('COPY');
  const copy = () => {
    navigator.clipboard.writeText('npx novu init');
    setText('COPIED!');
    setTimeout(() => {
      reasync();
    }, 1500);
  };
  const reasync = () => {
    setText('COPY');
  };
  return (
    <Container>
      <Grid
        container
        flexDirection={'column'}
        alignItems="center"
        justifyContent="center"
        spacing={gridSpacing}
        sx={{ mt: { xs: 10, sm: 6, md: 10 }, mb: { xs: 2.5, md: 10 } }}
      >
        <Grid item xs={12} md={12} sx={{ zIndex: 2 }}>
          <Grid container spacing={gridSpacing} sx={{ pr: 10, [theme.breakpoints.down('lg')]: { pr: 0, textAlign: 'center' } }}>
            <Grid item xs={12} display={'flex'} gap={2} justifyContent={'center'}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: '2.25rem', sm: '3rem', md: '3.5rem' },
                  fontWeight: 700,
                  lineHeight: 1.4
                }}
              >
                Build
              </Typography>
              <div className="cubespinner">
                <Typography
                  variant="h5"
                  className="face1"
                  sx={{
                    fontSize: { xs: '2.25rem', sm: '3rem', md: '3.5rem' },
                    fontWeight: 700,
                    lineHeight: 1.4,
                    background: 'linear-gradient(90.13deg,rgb(254, 249, 195) .11%,rgb(253, 224, 71) 25.06%,rgb(234, 179, 8) )',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Generative AI
                </Typography>
                <Typography
                  variant="h5"
                  className="face2"
                  sx={{
                    fontSize: { xs: '2.25rem', sm: '3rem', md: '3.5rem' },
                    fontWeight: 700,
                    lineHeight: 1.0,
                    background: 'linear-gradient(90.13deg,rgb(254, 249, 195) .11%,rgb(253, 224, 71) 25.06%,rgb(234, 179, 8) )',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Enterprise AI
                </Typography>

                <Typography
                  variant="h5"
                  className="face3"
                  sx={{
                    fontSize: { xs: '2.25rem', sm: '3rem', md: '3.5rem' },
                    fontWeight: 700,
                    lineHeight: 1.4,
                    background: 'linear-gradient(90.13deg,rgb(254, 249, 195) .11%,rgb(253, 224, 71) 25.06%,rgb(234, 179, 8) )',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Government AI
                </Typography>
              </div>
              {/* </motion.div> */}
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: '2.25rem', sm: '3rem', md: '3.5rem' },
                  fontWeight: 700,
                  lineHeight: 1.4
                }}
              >
                With Your Data
              </Typography>
            </Grid>
            <Grid item xs={12} textAlign={'center'}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.2
                }}
              >
                <Typography
                  variant="h4"
                  component="div"
                  color="inherit"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.125rem' },
                    fontWeight: 400,
                    lineHeight: 1.4
                  }}
                >
                  Build powerful AI apps with ease using InfraHive's state-of-the-art infrastructure and cutting-edge AI technologies.
                </Typography>
              </motion.div>
            </Grid>
            <br />
            <br />
            {/* <Grid item xs={12} sx={{ my: 3.25 }} textAlign={'center'}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.4
                }}
              >
                <Box
                  sx={{
                    backgroundImage: 'linear-gradient(268.91deg, #fb3 14.72%, #fff 51.94%, #e300bd 82.34%, #ff006a 94.81%)',
                    width: 400,
                    borderRadius: '10px',
                    padding: '2px',
                    margin: 'auto',
                    [theme.breakpoints.down('md')]: {
                      width: '100%'
                    }
                  }}
                >
                  <Paper
                    component="form"
                    sx={{
                      p: '8px 8px',
                      display: 'flex',
                      alignItems: 'center',
                      width: '100%'
                    }}
                  >
                    <NavigateNextIcon />
                    <InputBase
                      sx={{ ml: 1, flex: 1, fontSize: '1.2rem' }}
                      // inputProps={{ 'aria-label': 'search google maps' }}
                      defaultValue={'npx novu init'}
                      readOnly
                    />
                    <Button
                      variant="contained"
                      color="inherit"
                      type="button"
                      sx={{ p: '10px', color: 'black' }}
                      aria-label="copy"
                      onClick={copy}
                    >
                      {text}
                    </Button>
                  </Paper>
                </Box>
                
              </motion.div>
            </Grid> */}
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.6
                }}
              >
                <Grid
                  container
                  alignItems="center"
                  spacing={2}
                  sx={{ [theme.breakpoints.down('lg')]: { display: 'inline-flex', width: 'auto' } }}
                >
                  <Box component={'img'} src="/assets/animation/Main Comp.gif" width={'100%'} />
                </Grid>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeaderPage;
