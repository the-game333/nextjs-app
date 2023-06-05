import React from 'react'

const Partnership = () => {
  return (
    <div className='max-w-6xl mx-auto mb-24'>
      <hr className='mb-16 opacity-20'/>
        <p className='text-lg my-8 text-white opacity-60'>InfraHive works with <span className='underline'>Generative AI Companies</span></p>
        <div className='flex justify-between mt-12 opacity-60'>
            <img src="/assets/images/logos/openai.png" alt='Open AI Logo' className='h-12'/>
            <span className='text-4xl font-bold text-white my-auto'>ANTHROP\C</span>
            <img src='/assets/images/logos/cohere.svg' className='h-10'/>
            <span className='text-4xl font-bold text-white my-auto'>stability.ai</span>
        </div>
        <hr className='mt-16 opacity-20'/>
    </div>
  )
}

export default Partnership