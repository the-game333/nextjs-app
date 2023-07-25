// material-ui
import { Box, Container, Grid, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import LabelIcon from '@mui/icons-material/Label';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Button from '@mui/material/Button';

// project imports
import FadeInWhenVisible from './Animation';
import { gridSpacing } from 'store/constant';

// ==============================|| LANDING - DEMOS PAGE ||============================== //

const Howtowork2 = () => (
  <Container>
    <Grid container spacing={gridSpacing} minHeight={'650px'} py={5} px={5}>
      <Grid item textAlign={'center'} xs={12} lg={12} md={12} zIndex={2}>
        <Typography variant="h1" component="div" sx={{ color: 'rgb(189, 200, 240)' }}>
          We've built it so you don't have to
        </Typography>
      </Grid>
      <Grid container spacing={5} zIndex={2} mt={5} direction={'row'} alignItems={'stretch'}>
        <Grid item md={4} sm={6} sx={{ position: 'relative', height: '450px' }}>
          <FadeInWhenVisible>
            <Grid container spacing={2} alignItems={'stretch'}>
              <Grid item xs={12} md={12} sx={{ padding: '2 !important', textAlign: 'left' }}>
                <Box
                  component={'img'}
                  src="/assets/images/howtowork/generative_ai.png"
                  width={'5rem'}
                  alt="InfraHive - Generative AI"
                  sx={{ marginLeft: '0%', borderRadius: '30px' }}
                />
              </Grid>
              <Grid item xs={12} textAlign={'left'}>
                <Typography sx={{ color: 'rgb(189, 200, 240)' }} variant="h3">
                  Generative AI
                </Typography>
              </Grid>
              <Grid item xs={12} textAlign={'left'}>
                <Typography variant="body2" sx={{ color: 'rgb(189, 200, 240)' }}>
                  Powerful generative AI technologies, including ChatGPT, GPT-4, Dall-E, and more, for creating innovative AI applications.
                </Typography>
                <List>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <LabelIcon sx={{ color: 'rgb(189, 200, 240)' }} />
                    </ListItemIcon>
                    <ListItemText primary="Text Completion"/>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <LabelIcon sx={{ color: 'rgb(189, 200, 240)' }} />
                    </ListItemIcon>
                    <ListItemText primary="Image Generation" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <LabelIcon sx={{ color: 'rgb(189, 200, 240)' }} />
                    </ListItemIcon>
                    <ListItemText primary="Voice Creation" />
                  </ListItem>
                </List>
                <Button
                  href="/contact"
                  sx={{
                    color: '#000000',
                    fontWeight: 'bold',
                    background: 'rgb(234, 179, 8)',
                    position: 'absolute',
                    bottom: '1px'
                  }}
                  variant="contained"
                >
                  Talk to Generative AI Expert
                </Button>
              </Grid>
            </Grid>
          </FadeInWhenVisible>
        </Grid>
        {/* <Grid item md={4} sm={6} sx={{ position: 'relative', height: '450px' }}>
          <FadeInWhenVisible>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12} sx={{ padding: '2 !important', textAlign: 'left' }}>
                <Box
                  component={'img'}
                  src="/assets/images/howtowork/government_ai.png"
                  width={'5rem'}
                  sx={{ background: 'white', marginLeft: '0%', borderRadius: '30px' }}
                />
              </Grid>
              <Grid item xs={12} textAlign={'left'}>
                <Typography variant="h3">Government AI</Typography>
              </Grid>
              <Grid item xs={12} textAlign={'left'}>
                <Typography variant="body2">
                  From natural language processing for citizen interactions to data analysis for policy-making, InfraHive provides the tools
                  and resources to integrate AI seamlessly into government operations. Our secure and scalable platform ensures data privacy
                  and compliance, making it an ideal choice for government AI initiatives.{' '}
                </Typography>
                <List>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <LabelIcon />
                    </ListItemIcon>
                    <ListItemText primary="Automation on Goverment Data" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <LabelIcon />
                    </ListItemIcon>
                    <ListItemText primary="Top-Notch Privacy Focused" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <LabelIcon />
                    </ListItemIcon>
                    <ListItemText primary="Custom AI Development" />
                  </ListItem>
                </List>
                <Button
                  sx={{
                    color: '#000000',
                    fontWeight: 'bold',
                    background: 'rgb(234, 179, 8)',
                    position: 'absolute',
                    bottom: '1px'
                  }}
                  variant="contained"
                >
                  Talk to Government AI Expert
                </Button>
              </Grid>
            </Grid>
          </FadeInWhenVisible>
        </Grid> */}
        <Grid item md={4} sm={6} sx={{ position: 'relative', height: '450px' }}>
          <FadeInWhenVisible>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12} sx={{ padding: '2 !important', textAlign: 'left' }}>
                <Box
                  component={'img'}
                  src="/assets/images/howtowork/enterprise_ai.png"
                  width={'5rem'}
                  alt="InfraHive - Enterprise AI"
                  sx={{ marginLeft: '0%', borderRadius: '30px' }}
                />
              </Grid>
              <Grid item xs={12} textAlign={'left'}>
                <Typography variant="h3" sx={{ color: 'rgb(189, 200, 240)' }}>
                  Enterprise AI
                </Typography>
              </Grid>
              <Grid item xs={12} textAlign={'left'}>
                <Typography variant="body2" sx={{ color: 'rgb(189, 200, 240)' }}>
                  Empower businesses to automate processes, enhance customer experiences, and drive innovation with AI-powered solutions.{' '}
                </Typography>
                <List>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <LabelIcon sx={{ color: 'rgb(189, 200, 240)' }} />
                    </ListItemIcon>
                    <ListItemText primary="Power Existing Business with AI" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <LabelIcon sx={{ color: 'rgb(189, 200, 240)' }} />
                    </ListItemIcon>
                    <ListItemText primary="Custom AI Development" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <LabelIcon sx={{ color: 'rgb(189, 200, 240)' }} />
                    </ListItemIcon>
                    <ListItemText primary="Data Protection" />
                  </ListItem>
                </List>
                <Button
                  sx={{
                    color: '#000000',
                    fontWeight: 'bold',
                    background: 'rgb(234, 179, 8)',
                    position: 'absolute',
                    bottom: '1px'
                  }}
                  variant="contained"
                  href="/contact"
                >
                  Talk to Business AI Expert
                </Button>
              </Grid>
            </Grid>
          </FadeInWhenVisible>
        </Grid>
        <Grid item md={4} sm={6} sx={{ position: 'relative', height: '450px' }}>
          <FadeInWhenVisible>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12} sx={{ padding: '2 !important', textAlign: 'left' }}>
                <Box
                  component={'img'}
                  src="/assets/images/howtowork/consumer_ai.jpg"
                  width={'5rem'}
                  alt="InfraHive - Consumer AI"
                  sx={{ marginLeft: '0%', borderRadius: '30px' }}
                />
              </Grid>
              <Grid item xs={12} textAlign={'left'}>
                <Typography variant="h3" sx={{ color: 'rgb(189, 200, 240)' }}>
                  Consumer AI
                </Typography>
              </Grid>
              <Grid item xs={12} textAlign={'left'}>
                <Typography variant="body2" sx={{ color: 'rgb(189, 200, 240)' }}>
                  Enjoy the benefits of AI-driven applications in your daily life with our user-friendly platform.
                  {/* this is coming soon style  */}
                  {/* <div style={{ color: 'yellow' }}>Coming soon...</div> */}
                </Typography>
                <List>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <LabelIcon sx={{ color: 'rgb(189, 200, 240)' }} />
                    </ListItemIcon>
                    <ListItemText primary="Create ChatGPT for X" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <LabelIcon sx={{ color: 'rgb(189, 200, 240)' }} />
                    </ListItemIcon>
                    <ListItemText primary="Harness Power Generative AI in your app" />
                  </ListItem>
                </List>
                <Button
                  sx={{
                    color: '#000000',
                    fontWeight: 'bold',
                    background: 'rgb(234, 179, 8)',
                    position: 'absolute',
                    bottom: '1px'
                  }}
                  variant="contained"
                  href="https://calendly.com/infrahive/infrahive-demo"
                  target={'_blank'}
                >
                  Request Access
                </Button>
              </Grid>
            </Grid>
          </FadeInWhenVisible>
        </Grid>
        {/* <Grid item md={4} sm={6} sx={{ position: 'relative', height: '450px' }}>
          <FadeInWhenVisible>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12} sx={{ padding: '2 !important', textAlign: 'left' }}>
                <Box
                  component={'img'}
                  src="/assets/images/howtowork/education_ai.png"
                  width={'5rem'}
                  sx={{ marginLeft: '0%', borderRadius: '30px' }}
                />
              </Grid>
              <Grid item xs={12} textAlign={'left'}>
                <Typography variant="h3">Education AI</Typography>
              </Grid>
              <Grid item xs={12} textAlign={'left'}>
                <Typography variant="body2">
                  InfraHive enables personalized learning, adaptive assessments, and intelligent tutoring systems, tailoring education to
                  individual needs.
                </Typography>
                <List>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <LabelIcon />
                    </ListItemIcon>
                    <ListItemText primary="Question/Answers with PDFs" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <LabelIcon />
                    </ListItemIcon>
                    <ListItemText primary="Communicate with Books" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <LabelIcon />
                    </ListItemIcon>
                    <ListItemText primary="Custom AI for Education Institutions" />
                  </ListItem>
                </List>
                <Button
                  sx={{
                    color: '#000000',
                    fontWeight: 'bold',
                    background: 'rgb(234, 179, 8)',
                    position: 'absolute',
                    bottom: '1px'
                  }}
                  variant="contained"
                >
                  Request Access
                </Button>
              </Grid>
            </Grid>
          </FadeInWhenVisible>
        </Grid> */}
        <Grid item md={4} sm={6} sx={{ position: 'relative', height: '450px' }}>
          <FadeInWhenVisible>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12} sx={{ padding: '2 !important', textAlign: 'left' }}>
                <Box
                  component={'img'}
                  src="/assets/images/howtowork/developer_ai.png"
                  width={'5rem'}
                  alt="InfraHive - Developer AI"
                  sx={{ marginLeft: '0%', borderRadius: '30px' }}
                />
              </Grid>
              <Grid item xs={12} textAlign={'left'}>
                <Typography variant="h3" sx={{ color: 'rgb(189, 200, 240)' }}>
                  Developer AI
                </Typography>
              </Grid>
              <Grid item xs={12} textAlign={'left'}>
                <Typography variant="body2" sx={{ color: 'rgb(189, 200, 240)' }}>
                  Integrate & Customise AI technologies easily with our scalable APIs and accessbile architecture.
                </Typography>
                <List>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <LabelIcon sx={{ color: 'rgb(189, 200, 240)' }} />
                    </ListItemIcon>
                    <ListItemText primary="InfraSpeed: Train AI Models 15x faster" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <LabelIcon sx={{ color: 'rgb(189, 200, 240)' }} />
                    </ListItemIcon>
                    <ListItemText primary="Production-Ready APIs" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <LabelIcon sx={{ color: 'rgb(189, 200, 240)' }} />
                    </ListItemIcon>
                    <ListItemText primary="Train AI Model with Custom Data" />
                  </ListItem>
                </List>
                <Button
                  sx={{
                    color: '#000000',
                    fontWeight: 'bold',
                    background: 'rgb(234, 179, 8)',
                    position: 'absolute',
                    bottom: '1px'
                  }}
                  variant="contained"
                  href="https://calendly.com/infrahive/infrahive-demo"
                  target={'_blank'}
                >
                  Request Access
                </Button>
              </Grid>
            </Grid>
          </FadeInWhenVisible>
        </Grid>
      </Grid>
    </Grid>
  </Container>
);

export default Howtowork2;
