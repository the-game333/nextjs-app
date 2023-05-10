import { Button, Link } from '@mui/material'
import React from 'react'

const GetDemo = () => {
  return (
    <div className='flex justify-between text-white bg-dark-blue rounded-lg max-w-[70%] mx-auto mt-24 py-16 pl-24 pr-12'>
        <div className=' my-auto'>
        <h3 className='text-3xl font-bold'>Launch in as little as 2 weeks</h3>
        <p className='text-lg font-light -mt-4 opacity-80'>Kickoff quickly and unlock the power of generative AI for your team.</p>
        </div>

        {/* <button className='bg-btn-blue px-20 py-3 text-base my-auto rounded-lg'>Request Demo</button> */}
        <Button
                color="inherit"
                sx={{ backgroundColor: '#5148d7', height: '55px', width: '140px', marginTop: 'auto', marginBottom: 'auto', marginRight: "12px" }}
                variant="contained"
                component={Link}
                href="/contact-us"
                 target="_blank"
              >
                Request Demo
              </Button>
    </div>
  )
}

export default GetDemo