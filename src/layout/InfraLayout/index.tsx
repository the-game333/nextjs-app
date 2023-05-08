import { FC } from 'react';
import AppBar from 'ui-component/extended/AppBar';
import Footer from 'components/landingpage/Footer';
import { Container } from '@mui/material';
// project imports
// import Customization from '../Customization';

// ==============================|| MINIMAL LAYOUT ||============================== //

const InfraLayout: FC = ({ children }) => (
  <>
    <AppBar />
    <Container>
        {children}
    </Container>
    <Footer />
  </>
);

export default InfraLayout;
