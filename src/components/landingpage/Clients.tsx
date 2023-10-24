import Image from 'next/image';
import React from 'react';

type ClientsProps = {};

const Clients: React.FC<ClientsProps> = () => {
  return (
    <div className="px-3 py-12 mx-auto bg-transparent md:max-w-5xl md:px-5 lg:max-w-6xl xl:px-0">
      <h2 className="text-4xl font-bold text-center text-white dark:text-white md:text-5xl">
        Trusted By{' '}
        <span className="relative ">
          Companies{' '}
          <span className="absolute left-0 top-14">
            <svg
              className="w-40 mx-auto lg:w-55 sm:w-40 md:w-60 xl:w-full"
              xmlns="http://www.w3.org/2000/svg"
              width="249"
              height="17"
              viewBox="0 0 249 17"
              fill="none"
            >
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

      <div className="mt-24 text-white">
        <div className="grid items-center grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
      {true &&     <Image
            width={160}
            className="mx-auto shadow-inner max-w-max"
            height={60}
            src={'/assets/images/clients/apex-removebg-preview.png'}
            alt="brand logo"
          />}
         {true && <Image width={150} className="mx-auto max-w-max" height={60} src={'/assets/images/clients/fl.png'} alt="brand logo" />} 
          
          {/* <Image width={140} className="mx-auto max-w-max brightness-0 invert" height={60} src={'/brands/naver.png'} alt="brand logo" />
          <Image
            width={160}
            className="mx-auto max-w-max brightness-0 invert"
            height={60}
            src={'/brands/qatar airways.png'}
            alt="brand logo"
          /> */}
          {/* <Image width={200} className="mx-auto max-w-max brightness-0 invert" height={60} src={'/brands/shopee.png'} alt="brand logo" />
          <Image width={140} className="mx-auto max-w-max brightness-0 invert" height={60} src={'/brands/shopify.png'} alt="brand logo" />
          <Image width={140} className="mx-auto max-w-max brightness-0 invert" height={60} src={'/brands/upwork.png'} alt="brand logo" />
          <Image width={140} className="mx-auto max-w-max brightness-0 invert" height={60} src={'/brands/upwork.png'} alt="brand logo" />
          <Image width={200} className="mx-auto max-w-max brightness-0 invert" height={60} src={'/brands/shopee.png'} alt="brand logo" />
          <Image width={140} className="mx-auto max-w-max brightness-0 invert" height={60} src={'/brands/shopify.png'} alt="brand logo" />
          <Image width={140} className="mx-auto max-w-max brightness-0 invert" height={60} src={'/brands/upwork.png'} alt="brand logo" />
          <Image width={140} className="mx-auto max-w-max brightness-0 invert" height={60} src={'/brands/upwork.png'} alt="brand logo" /> */}
        </div>
      </div>
    </div>
  );
};
export default Clients;
