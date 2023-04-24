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
  const [text, setText] = useState("COPY");
  const copy = () => {
    navigator.clipboard.writeText("npx novu init");
    setText("COPIED!");
    setTimeout(() => {
      reasync();
    }, 1500);
  }
  const reasync = () => {
    setText("COPY");
  }
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
            <Grid item xs={12} textAlign={"center"}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: '2.25rem', sm: '3rem', md: '3.5rem' },
                    fontWeight: 700,
                    lineHeight: 1.4,
                  }}
                >
                  The open-source notification infrastructure for developers
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} textAlign={"center"}>
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
                  Simple components and APIs for managing all communication channels in one place: Email, SMS, Direct, and Push
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} sx={{ my: 3.25 }} textAlign={"center"}>
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
                <Box sx={{
                  backgroundImage: "linear-gradient(268.91deg, #fb3 14.72%, #fff 51.94%, #e300bd 82.34%, #ff006a 94.81%)",
                  width: 400,
                  borderRadius: "10px",
                  padding: "2px",
                  margin: "auto"
                }}>
                  <Paper
                    component="form"
                    sx={{
                      p: '8px 8px',
                      display: 'flex',
                      alignItems: 'center',
                      width: "100%",
                    }}
                  >
                    <NavigateNextIcon />
                    <InputBase
                      sx={{ ml: 1, flex: 1, fontSize: "1.2rem" }}
                      // inputProps={{ 'aria-label': 'search google maps' }}
                      defaultValue={"npx novu init"}
                      readOnly
                    />
                    <Button variant='contained' color='inherit' type="button" sx={{ p: '10px', color: "black" }} aria-label="copy"
                      onClick={copy}
                    >
                      {text}
                    </Button>
                  </Paper>
                </Box>
                {/* <TextField aria-readonly
                  >
                </TextField> */}
              </motion.div>
            </Grid>
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
                  <Grid item>
                    <Avatar
                      alt="MUI Logo"
                      color="primary"
                      sx={{
                        width: 50,
                        height: 50,
                        padding: 0.5,
                        background: theme.palette.mode === 'dark' ? theme.palette.dark.light : theme.palette.primary.light
                      }}
                      variant="rounded"
                    >
                      <svg width="50" height="50" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0)">
                          <path d="M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z" fill={theme.palette.primary[800]} />
                          <path
                            d="M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z"
                            fill={theme.palette.primary.main}
                          />
                          <path d="M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z" fill={theme.palette.primary[800]} />
                          <path
                            d="M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z"
                            fill={theme.palette.primary.main}
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="300" height="238.3" fill="white" transform="translate(100 131)" />
                          </clipPath>
                        </defs>
                      </svg>
                    </Avatar>
                  </Grid>
                  <Grid item xs zeroMinWidth>
                    <Typography variant="h4" component="div" color="inherit" sx={{ fontWeight: 400, lineHeight: 1.4 }}>
                      <b>Built with Material-UI &#169;</b> - The most popular React Component Library.
                    </Typography>
                  </Grid>
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
