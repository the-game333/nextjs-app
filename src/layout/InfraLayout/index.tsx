import { FC, useEffect } from 'react';
import AppBar from 'ui-component/extended/AppBar';
import Footer from 'components/landingpage/Footer';
import { Container } from '@mui/material';
import useConfig from 'hooks/useConfig';
// project imports
// import Customization from '../Customization';

// ==============================|| MINIMAL LAYOUT ||============================== //

const InfraLayout: FC = ({ children }) => {
  const { onChangeMenuType } = useConfig();
  useEffect(() => {
    onChangeMenuType('light');
  }, [])
  return (<>
    <AppBar />
    <Container>
      {children}
    </Container>
    <Footer />
  </>)
};

export default InfraLayout;
