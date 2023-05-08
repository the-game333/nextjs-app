import React, { ReactElement } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  AppBar as MuiAppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger,
  Grid,
  Card, CardContent
} from '@mui/material';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

// project imports
import Logo from '../Logo';
import TooltipButton from 'components/customers/tooltip';

// assets
import { IconBook, IconCreditCard, IconDashboard, IconHome2 } from '@tabler/icons';
import MenuIcon from '@mui/icons-material/Menu';

// elevation scroll
interface ElevationScrollProps {
  children: ReactElement;
  window?: Window | Node;
}
function ElevationScroll({ children, window }: ElevationScrollProps) {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window!
  });
  const darkBorder = theme.palette.mode === 'dark' ? theme.palette.dark.dark : theme.palette.grey[200];

  return React.cloneElement(children, {
    elevation: trigger ? 2 : 0,
    style: {
      backgroundColor: theme.palette.background.default,
      borderBottom: trigger ? 'none' : '1px solid',
      borderColor: trigger ? '' : darkBorder,
      color: theme.palette.text.dark
    }
  });
}

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "transparent",
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: theme.typography.pxToRem(12),
    minWidth: 800
  },
}));
// ==============================|| MINIMAL LAYOUT APP BAR ||============================== //

const AppBar = ({ ...others }) => {
  console.log(others, "others")
  const [drawerToggle, setDrawerToggle] = React.useState<boolean>(false);
  /** Method called on multiple components with different event types */
  const drawerToggler = (open: boolean) => (event: any) => {
    if (event.type! === 'keydown' && (event.key! === 'Tab' || event.key! === 'Shift')) {
      return;
    }
    setDrawerToggle(open);
  };

  return (
    <ElevationScroll {...others}>
      <MuiAppBar position='sticky'
        sx={{
          background: others.background+" !important"
        }}
      >
        <Container>
          <Toolbar sx={{ padding: "10px" }}>
            <Typography component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
              <Logo />
            </Typography>
            <Stack direction="row" sx={{ display: { xs: 'none', sm: 'block' } }} spacing={2}>
              <Button color="inherit" component={Link} href="price"
              // target="_blank"
              >
                Pricing
              </Button>
              <HtmlTooltip
                title={
                  <Card sx={{ boxShadow: "0px 1px 4px 0px black" }}>
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid item md={3} display={"flex"} flexDirection={"column"} gap={"20px"}>
                          <Typography>GENERATIVE AI</Typography>
                          <TooltipButton text={"Open AI"} image={"open-ai"} />
                          <TooltipButton text={"Core:here"} image={"co_here"} />
                          <TooltipButton text={"Adept"} image={"adept"} />
                          <TooltipButton text={"CarperAI"} image={"carperai"} />
                          <TooltipButton text={"Stability AI"} image={"stability-ai"} />
                        </Grid>
                        <Grid item md={3} display={"flex"} flexDirection={"column"} gap={"20px"}>
                          <Typography>U.S. GOVERNMENT</Typography>
                          <TooltipButton text={"US Army"} image={"usarmy"} />
                          <TooltipButton text={"US Airforce"} image={"airforce"} />
                          <TooltipButton text={"Defense Innovation Unit"} image={"defense-innovation-unit"} />
                          <TooltipButton text={"CDAO"} image={"cdao"} />
                          <TooltipButton text={"Oshkosh"} image={"oshkosh"} />
                        </Grid>
                        <Grid item md={3} display={"flex"} flexDirection={"column"} gap={"20px"}>
                          <Typography>ENTERPRISES</Typography>
                          <TooltipButton text={"Microsoft"} image={"microsoft"} />
                          <TooltipButton text={"Meta"} image={"meta"} />
                          <TooltipButton text={"GM"} image={"gm"} />
                          <TooltipButton text={"Toyota"} image={"toyota"} />
                          <TooltipButton text={"Etsy"} image={"etsy"} />
                        </Grid>
                        <Grid item md={3} display={"flex"} flexDirection={"column"} gap={"20px"}>
                          <Typography>STARTUPS</Typography>
                          <TooltipButton text={"Brex"} image={"brex"} />
                          <TooltipButton text={"Flexport"} image={"flexport"} />
                          <TooltipButton text={"Instacart"} image={"instacart"} />
                          <TooltipButton text={"Faire"} image={"faire"} />
                          <TooltipButton text={"OpenSea"} image={"opensea"} />
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                }
                arrow
              >
                <Button color="inherit" sx={{ "&:hover": { backgroundColor: "transparent" } }} component={Link} href="https://codedthemes.gitbook.io/berry" target="_blank">
                  Customers
                </Button>
              </HtmlTooltip>
              <Button color="inherit" component={Link} href="/contact-us">
                Contact Us
              </Button>
              {/* <Button
                component={Link}
                href="https://github.com/novuhq/novu"
                // disableElevation
                variant="outlined"
                sx={{
                  borderColor: "white", color: "white", '&:hover': {
                    borderColor: "white"
                  }
                }}
              >
                <Stack direction={'row'} gap={"10px"} alignItems={'center'}>
                  <GitHubIcon sx={{
                    fontSize: "1.8rem"
                  }} />
                  <Typography variant='subtitle1' textTransform={'uppercase'}>
                    star us
                  </Typography>
                  <Divider orientation="vertical" sx={{ opacity: 1, height: "20px", margin: "auto" }} flexItem />
                  <Typography variant='subtitle1' textTransform={'uppercase'}>
                    20.1K
                  </Typography>
                </Stack>
              </Button> */}
              <Button color="inherit" component={Link} href="/auth/login">
                Login
              </Button>
              <Button color="inherit" sx={{ color: "black", height: "43px" }} variant='contained' component={Link} href="/waitlist"
              //  target="_blank"
              >
                Join Waitlist
              </Button>
            </Stack>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              <IconButton color="inherit" onClick={drawerToggler(true)} size="large">
                <MenuIcon />
              </IconButton>
              <Drawer anchor="top" open={drawerToggle} onClose={drawerToggler(false)}>
                {drawerToggle && (
                  <Box sx={{ width: 'auto' }} role="presentation" onClick={drawerToggler(false)} onKeyDown={drawerToggler(false)}>
                    <List>
                      <Link style={{ textDecoration: 'none' }} href="#" target="_blank">
                        <ListItemButton component="a">
                          <ListItemIcon>
                            <IconHome2 />
                          </ListItemIcon>
                          <ListItemText primary="Home" />
                        </ListItemButton>
                      </Link>
                      <Link style={{ textDecoration: 'none' }} href="/login" target="_blank">
                        <ListItemButton component="a">
                          <ListItemIcon>
                            <IconDashboard />
                          </ListItemIcon>
                          <ListItemText primary="Dashboard" />
                        </ListItemButton>
                      </Link>
                      <Link style={{ textDecoration: 'none' }} href="https://codedthemes.gitbook.io/berry" target="_blank">
                        <ListItemButton component="a">
                          <ListItemIcon>
                            <IconBook />
                          </ListItemIcon>
                          <ListItemText primary="Documentation" />
                        </ListItemButton>
                      </Link>
                      <Link
                        style={{ textDecoration: 'none' }}
                        href="https://material-ui.com/store/items/berry-react-material-admin/"
                        target="_blank"
                      >
                        <ListItemButton component="a">
                          <ListItemIcon>
                            <IconCreditCard />
                          </ListItemIcon>
                          <ListItemText primary="Purchase Now" />
                        </ListItemButton>
                      </Link>
                    </List>
                  </Box>
                )}
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </MuiAppBar >
    </ElevationScroll >
  );
};

export default AppBar;
