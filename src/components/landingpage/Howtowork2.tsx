import Image from 'next/image';
import React from 'react';
import OpenAI from '../../../public/assets/images/OpenAI.svg';
import ChatGPT2 from '../../../public/assets/images/ChatGPT2.svg';
import Anthrop from '../../../public/assets/images/Anthrop.svg';
import Claude from '../../../public/assets/images/Claude.svg';
import Cohere from '../../../public/assets/images/Cohere.svg';
import HugFace from '../../../public/assets/images/HugFace.svg';
import LangChain from '../../../public/assets/images/LangChain.svg';

export default function Howtowork2() {
  return (
    <div className="mx-auto pb-10 pt-32 md:max-w-5xl lg:max-w-6xl">
      <div className="text-gray-600 dark:text-gray-300" id="testimonials">
        <div className="space-y-4 px-6 pb-10 md:px-0">
          <h2 className="text-center text-5xl font-bold text-gray-800 dark:text-white md:text-5xl">
            Diverse LLM{' '}
            <span className="relative">
              support{' '}
              <span className="absolute left-0 top-14">
                <svg
                  className="lg:w-55 mx-auto w-40 sm:w-40 md:w-60 xl:w-full"
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
        </div>
        <div className="relative ml-auto pb-20">
          <div className="mx-auto text-center lg:w-2/3">
            <button className="border-white-500 rounded-full border-2 px-6 py-3 text-[#FFF] duration-300">
              Unleash the Potent Fusion of Diverse AI Models on a Unified Platform
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            <div className="flex justify-center rounded-full bg-white p-6">
              <Image src={OpenAI} width={176} height={48} />
            </div>
            <div className="flex justify-center rounded-full bg-white p-6">
              <Image src={ChatGPT2} width={176} height={48} />
            </div>
            <div className="flex justify-center rounded-full bg-white p-6">
              <Image src={Anthrop} width={176} height={48} />
            </div>
            <div className="flex justify-center rounded-full bg-white p-6">
              <Image src={Claude} width={176} height={48} />
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center sm:mt-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex justify-center rounded-full bg-white p-6">
              <Image src={Cohere} width={176} height={48} />
            </div>
            <div className="flex justify-center rounded-full bg-white p-6">
              <Image src={HugFace} width={176} height={48} />
            </div>
            <div className="flex justify-center rounded-full bg-white p-6">
              <Image src={LangChain} width={176} height={48} />
            </div>
          </div>
        </div>
        <div id="main" className="mt-20 grid grid-cols-1 justify-evenly gap-5 md:grid-cols-2 ">
          <div className="relative rounded-3xl border border-[#ffffff1a] p-8">
            <div className="absolute right-5 top-7 flex gap-3">
              <p>In service</p>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="20" viewBox="0 0 38 20" fill="none">
                  <rect width="38" height="20" rx="10" fill="#FEC200" />
                  <rect x="21" y="3" width="14" height="14" rx="7" fill="white" />
                </svg>
              </span>
            </div>
            <div className="gap-4">
              <h6 className="text-3xl font-medium text-gray-700 dark:text-white">Backend service API</h6>
              <p className="relative mt-5 text-xl leading-6 text-[#C2C2C2]">Easily integrate into your application</p>
            </div>
            <div className="mt-6 gap-4">
              <h6 className="text-xl font-medium text-gray-700 dark:text-white">API TOKEN:</h6>
              <p className="relative mt-3 break-all text-xl leading-6  text-[#00A3FE]">https://api.infrahive.io/v1</p>
            </div>
            <div className="mt-2">
              <button className="mt-5 rounded-lg border p-3 ">API Reference</button>
            </div>
            <p
              style={{
                height: '50%',
                width: '25%',
                top: '30%',
                left: '50%',
                transform: 'translateX(50%)',
                position: 'absolute',
                borderRadius: '582px',
                background: 'linear-gradient(180deg, rgba(99, 35, 196, 0.00) 0%, #FE851D 100%)',
                filter: 'blur(100px)'
              }}
            ></p>
          </div>
          <div className="relative rounded-3xl border border-[#ffffff1a] p-8">
            <div className="absolute right-5 top-7 flex gap-3">
              <p>In service</p>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="20" viewBox="0 0 38 20" fill="none">
                  <rect width="38" height="20" rx="10" fill="#FEC200" />
                  <rect x="21" y="3" width="14" height="14" rx="7" fill="white" />
                </svg>
              </span>
            </div>
            <div className="gap-4">
              <h6 className="text-3xl font-medium text-gray-700 dark:text-white">Test-app</h6>
              <p className="relative mt-5 text-xl leading-6 text-[#C2C2C2]">Ready to use AI WebApp</p>
            </div>
            <div className="mt-6 gap-4">
              <h6 className="text-xl font-medium text-gray-700 dark:text-white">public url:</h6>
              <p className="relative mt-3 break-all text-xl leading-6 text-[#00A3FE]">https://api.infrahive.io/v1</p>
            </div>
            <div className="mt-2 flex-col gap-3 md:flex-row md:justify-start">
              <button className="mt-5 rounded-lg border p-3">API Reference</button>
              <button className="mt-5 rounded-lg border p-3">API Reference</button>
              <button className="mt-5 rounded-lg border p-3">API Reference</button>
              <button className="mt-5 rounded-lg border p-3">API Reference</button>

            </div>
            <p
              style={{
                height: '50%',
                width: '25%',
                top: '30%',
                left: '40%',
                transform: 'translateX(50%)',
                position: 'absolute',
                borderRadius: '582px',
                background: 'linear-gradient(180deg, rgba(99, 35, 196, 0.00) 0%, #FE851D 100%)',
                filter: 'blur(100px)'
              }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
}
