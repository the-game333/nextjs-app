// material-ui
import { styled } from '@mui/material/styles';
import React from 'react';

// project imports
import { Dialog } from '@mui/material';
import Header from 'components/landingpage/Header';
import EasyToUse from 'components/landingpage/EasyToUse';
import DiverseSupport from 'components/landingpage/DiverseSupport';
import ApiServices from 'components/landingpage/ApiServices';
import PromptEngineering from 'components/landingpage/PromptEngineering';
import EndlessPossibilities from 'components/landingpage/EndlessPossibilities';
import NextExperience from 'components/landingpage/NextExperience';
import LanguageCodeType from 'components/landingpage/LanguageCodeType';
import Notification from 'components/landingpage/Notification';
import Footer from 'components/landingpage/Footer';
import Explore from 'components/landingpage/Explore';
// import Customization from 'layout/Customization';
import AppBar from 'ui-component/extended/AppBar';
// import Banner from 'ui-component/extended/Banner';
import { Box } from '@mui/material';
import useConfig from 'hooks/useConfig';
import { useEffect } from 'react';
import ProductPhilosophy from 'components/landingpage/ProductPhilosophy';
import EmbededDirectly from 'components/landingpage/EmbededDirectly';
import PowerOfDataSet from 'components/landingpage/PowerOfDataSet';
import Blogs from 'components/landingpage/Blogs';
import OptimizeStreamline from 'components/landingpage/OptimizeStreamline';
import Clients from 'components/landingpage/Clients';
import InfraSpeed from 'components/landingpage/EndlessPossibilities';
import InfraSpeedComp from 'components/landingpage/InfraSpeed';
import Script from 'next/script'

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

const FourthWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  paddingTop: 60,
  backgroundColor: '#0E0C15',
  [theme.breakpoints.down('lg')]: {
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
const LastWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  // paddingTop: 100,
  backgroundColor: '#0E0C15',
  [theme.breakpoints.down('md')]: {
    paddingTop: 30
  }
}));
const SecondLastWrapper = styled('div')(({ theme }) => ({
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

  const [open, setOpen] = React.useState(false);

  const llmref = React.useRef<HTMLDivElement>(null);
  const ref2 = React.useRef<HTMLDivElement>(null);
  const ref3 = React.useRef<HTMLDivElement>(null);
  const ref4 = React.useRef<HTMLDivElement>(null);

  return (
    <>
    <div className="container">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-Q3VTFQ4NNE" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-Q3VTFQ4NNE');
        `}
      </Script>
    </div>
      <HeaderWrapper id="home">
        {/* <Banner /> */}
        <AppBar background={'transparent'} llmref={llmref} ref2={ref2} ref3={ref3} ref4={ref4} />
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
      {/* <FullyWrapper>
        <Clients />
      </FullyWrapper> */}
      <FullyWrapper>
        <EndlessPossibilities />
      </FullyWrapper>
      {/* <FullyWrapper>
        <InfraSpeedComp />
      </FullyWrapper> */}
      {/* <SecondWrapper id="llm" ref={llmref}>
        <EasyToUse setOpen={setOpen} />
      </SecondWrapper> */}

      {/* <ThirdWrapper>
        <DiverseSupport />
      </ThirdWrapper> */}
      <ThirdWrapper id="deploy" ref={ref2}>
        <ApiServices />
      </ThirdWrapper>
      {/* <FourthWrapper>
        <EmbededDirectly />
      </FourthWrapper> */}
      {/* <FullyWrapper id="prompt" ref={ref3}>
        <PromptEngineering />
      </FullyWrapper> */}
      {/* <FullyWrapper>
        <NextExperience />
      </FullyWrapper> */}
      <FullyWrapper>
        <LanguageCodeType />
      </FullyWrapper>
      <LastWrapper id="data" ref={ref4}>
        <PowerOfDataSet />
      </LastWrapper>
      {/* <FullyWrapper>
        <ProductPhilosophy />
      </FullyWrapper> */}

      {/*  */}
      {/* <SecondLastWrapper>
        <Blogs />
      </SecondLastWrapper> */}
      <SecondLastWrapper>
        <Explore />
      </SecondLastWrapper>
      {/* <LastWrapper>
        <OptimizeStreamline />
      </LastWrapper> */}
      {/*  */}

      <ThirdWrapper>
        {/* <Notification /> */}
        <Footer />
      </ThirdWrapper>
      {/* <Customization /> */}
      <Dialog maxWidth="md" fullWidth open={open} onClose={() => setOpen(false)}>
        <div className="w-full font-sans text-gray-900 bg-white rounded-xl">
          <div className="flex items-center justify-between px-6 pb-3 border-b border-gray-400">
            <h2>
              <span className="text-2xl font-semibold">List of Actions</span>
            </h2>
            <button className="text-gray-900 rounded-3xl" onClick={() => setOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="px-6 py-6">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="flex items-center justify-between p-4 border-2 border-stone-300 rounded-xl">
                <div>
                  <h6 className="text-xl font-semibold">Submit a Form</h6>
                  <p className="mt-2 text-stone-500">Submit the contact form in hospital.com/form</p>
                </div>
                <div>
                  <button className={`toggle-button ${true ? 'on' : ''}`} onClick={() => {}}>
                    <div className="slider"></div>
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border-2 border-stone-300 rounded-xl">
                <div>
                  <h6 className="text-xl font-semibold">Book a call</h6>
                  <p className="mt-2 text-stone-500">Book a call through hospital.com/booking</p>
                </div>
                <div>
                  <button className={`toggle-button ${true ? 'on' : ''}`} onClick={() => {}}>
                    <div className="slider"></div>
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border-2 border-stone-300 rounded-xl">
                <div>
                  <h6 className="text-xl font-semibold">Order a Pizza</h6>
                  <p className="mt-2 text-stone-500">Order a pizza 🍕 using AI</p>
                </div>
                <div>
                  <button className={`toggle-button ${true ? 'on' : ''}`} onClick={() => {}}>
                    <div className="slider"></div>
                  </button>
                </div>
              </div>
            </div>
            <footer className="flex justify-end mt-6">
              <button onClick={() => setOpen(false)} className="bg-[#FEC200] text-white rounded-full px-14 py-3 text-xl">
                Save
              </button>
            </footer>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Landing;
