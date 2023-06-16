// material-ui
import { styled } from '@mui/material/styles';

// project imports
import ContactCard from 'components/contact-us/ContactCard';
import AppBar from 'ui-component/extended/AppBar';
import Footer from 'components/landingpage/Footer';

const HeaderWrapper = styled('div')(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    paddingTop: 0
  }
}));

// ============================|| CONTACT US MAIN ||============================ //

const ContactUsPage = () => (
  <HeaderWrapper>
    <AppBar />
    <ContactCard />
    <Footer />
  </HeaderWrapper>
);
ContactUsPage.Layout = 'minimalLayout';
export default ContactUsPage;
