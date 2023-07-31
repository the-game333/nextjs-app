import React from 'react';
import Main from '../../../public/assets/images/Main.png';
import Image from 'next/image';
export default function FullyFeatured() {
  return (
    <div className="mx-auto pt-10 md:max-w-5xl lg:max-w-6xl xl:px-0 md:px-5 px-3">
      <div className="text-gray-600 dark:text-gray-300" id="testimonials">
        <p
          style={{
            height: '20%',
            width: '15%',
            top: '0%',
            left: '0%',
            transform: 'translateX(50%)',
            position: 'absolute',
            borderRadius: '582px',
            background: 'linear-gradient(180deg, rgba(99, 35, 196, 0.00) 0%, #FE851D 100%)',
            filter: 'blur(150px)'
          }}  
        ></p>
        <div className="space-y-4 px-6 pb-10 md:px-0">
          <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-white md:text-5xl">
            Introducing{' '}
            <span className="relative whitespace-nowrap">
              Prompt Engineering <p className="mt-5">Refine your AI Model</p>
              <span className="absolute left-0 top-10">
                <svg className="w-full" xmlns="http://www.w3.org/2000/svg" width="249" height="17" viewBox="0 0 249 17" fill="none">
                  <path
                    d="M1.5 16.0001C26.4689 5.1524 193.217 -2.00002 248 3.50006"
                    stroke="url(#paint0_linear_47_101)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_47_101"
                      x1="10.3914"
                      y1="14.1023"
                      x2="242.344"
                      y2="14.1023"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FEC200" />
                      <stop offset="0.340447" stop-color="#BEF393" />
                      <stop offset="0.646993" stop-color="#7A46B6" />
                      <stop offset="1" stop-color="#EF6DF5" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{' '}
            </span>
          </h2>
        </div>
        <div className="relative ml-auto">
          <div className="mx-auto text-center lg:w-2/3">
            <p className="md:mt-10 mt-5 pb-0 md:pb-10 text-base leading-7 text-gray-700 dark:text-gray-300">
              Take control & Customize your AI model's responses, enhance it's accuracy, and ensure it's performance. Refine and optimize
              your model to deliver better results, faster.
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center pb-10 md:pb-60">
          <Image src={Main} height={430} width={779} className="rounded-xl" />
        </div>
      </div>
    </div>
  );
}
