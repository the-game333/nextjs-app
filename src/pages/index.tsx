// material-ui
import { styled } from '@mui/material/styles';

// project imports
import Header from 'components/landingpage/Header';
import Howtowworks from 'components/landingpage/Howtowork';
import Howtowworks2 from 'components/landingpage/Howtowork2';
import FullyFeatured from 'components/landingpage/FullyFeatured';
import InfraSpeed from 'components/landingpage/InfraSpeed';
import BulitCommunity from 'components/landingpage/BulitCommunity';
import LanguageCodeType from 'components/landingpage/LanguageCodeType';
import Notification from 'components/landingpage/Notification';
import Footer from 'components/landingpage/Footer';
// import Customization from 'layout/Customization';
import AppBar from 'ui-component/extended/AppBar';
// import Banner from 'ui-component/extended/Banner';
import { Box } from '@mui/material';
import useConfig from 'hooks/useConfig';
import { useEffect } from 'react';
import Partnership from 'components/landingpage/Partnership';
// import NewHeader from 'components/landingpage/NewHeader';
const HeaderWrapper = styled('div')(({ theme }) => ({
  overflowX: 'hidden',
  overflowY: 'clip',
  backgroundColor: '#0E0C15'
}));

const SecondWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  paddingTop: 30,
  backgroundColor: '#0E0C15',
  [theme.breakpoints.down('md')]: {
    paddingTop: 60
  }
}));
const ThirdWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  paddingTop: 60,
  backgroundColor: '#0E0C15',
  [theme.breakpoints.down('md')]: {
    paddingTop: 30
  }
}));
const FullyWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  // paddingTop: 100,
  backgroundColor: '#0E0C15',
  [theme.breakpoints.down('md')]: {
    paddingTop: 30
  }
}));

// =============================|| LANDING MAIN ||============================= //

const Landing: React.FC = () => {
  const { onChangeMenuType } = useConfig();
  useEffect(() => {
    onChangeMenuType('light');
  }, []);
  return (
    <>
      <HeaderWrapper id="home">
        {/* <Banner /> */}
        <AppBar background={'transparent'} />
        {/* <Box
          component={'img'}
          src="/assets/images/header/background.svg"
          sx={{
            position: 'absolute',
            top: '40px',
            maxWidth: '100%',
            zIndex: 1,
            width: '100%'
          }}
          alt="InfraHive - Background"
        /> */}
        <Header />
        {/* <NewHeader /> */}
      </HeaderWrapper>
      <FullyWrapper>
        <Partnership />
      </FullyWrapper>
      <SecondWrapper>
        <Howtowworks />
      </SecondWrapper>

      <ThirdWrapper>
        <Box
          component={'img'}
          src="/assets/images/header/background.svg"
          sx={{
            position: 'absolute',
            top: '0',
            maxWidth: '100%',
            zIndex: 1,
            height: '700px',
            width: '100%'
          }}
          alt="InfraHive - Background"
        />
        <Howtowworks2 />
      </ThirdWrapper>
      <FullyWrapper>
        <FullyFeatured />
      </FullyWrapper>
      <FullyWrapper>
        <InfraSpeed />
      </FullyWrapper>
      <FullyWrapper>
        <BulitCommunity />
      </FullyWrapper>
      <FullyWrapper>
        <LanguageCodeType />
      </FullyWrapper>

      <ThirdWrapper>
        {/* <Notification /> */}
        <Footer />
      </ThirdWrapper>
      {/* <Customization /> */}
    </>
  );
};

export default Landing;
