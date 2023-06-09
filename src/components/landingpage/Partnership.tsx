import React from 'react'

const Partnership = () => {
  return (
    <div className='md:max-w-5xl lg:max-w-6xl mx-auto mb-24'>
      <hr className='mb-16 opacity-20'/>
        <p className='text-lg my-8 text-white opacity-60 mx-4'>InfraHive works with <span className='underline'>Generative AI Companies</span></p>
        <div className='grid grid-cols-2 md:grid-cols-4  mt-12 opacity-60 items-center mx-4 gap-2'>
            <img src="/assets/images/logos/openai.png" alt='Open AI Logo' className='h-8 md:h-12 mr-8'/>
            <span className='text-3xl md:text-4xl font-bold text-white my-auto md:-ml-6'>ANTHROP\C</span>
            <img src='/assets/images/logos/cohere.svg' className='h-8 md:h-10 '/>
            <p className='text-3xl md:text-4xl font-bold text-white my-auto text-center'>stability.ai</p>
        </div>
        <hr className='mt-16 opacity-20'/>
    </div>
  )
}

export default Partnership