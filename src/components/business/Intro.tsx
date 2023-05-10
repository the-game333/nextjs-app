import { Button,Link } from '@mui/material'
import React from 'react'

const Intro = () => {
  return (
    <div className="text-center pt-16 pb-24 text-white">
      <h1 className="text-6xl font-bold ">Generative AI, tailored to your business</h1>
      <p className="text-xl mt-8">Train AI on your own data to create on-brand content at scale.</p>
      <div className="flex justify-center mt-12 gap-2 text-md">
        <Button
                color="inherit"
                sx={{ color: 'black', height: '55px', width: '140px' }}
                variant="contained"
                component={Link}
                href="/contact-us"
                 target="_blank"
              >
                Request demo
              </Button>
        <Button
                color="inherit"
                sx={{ backgroundColor: '#5148d7', height: '55px', width: '140px' }}
                variant="contained"
                component={Link}
                href="/contact-us"
                 target="_blank"
              >
                Get started
              </Button>
      </div>
    </div>
  )
}

export default Intro