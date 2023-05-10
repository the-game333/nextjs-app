import React from 'react'
import AppBar from 'ui-component/extended/AppBar'
import { Box } from '@mui/material';
import Intro from 'components/business/Intro';
import Features from 'components/business/Features';
import GetDemo from 'components/business/GetDemo';
const index = () => {
  return (
    <div>
      <AppBar/>
      <Box component={'img'} src='/assets/images/header/background.svg'
        sx={{
          position: "absolute",
          top: "40px",
          maxWidth: "100%",
          zIndex: -1,
          width: "100%"
        }}
      />
      <Intro />
      <Features />
      <GetDemo />
    </div>
  )
}

export default index