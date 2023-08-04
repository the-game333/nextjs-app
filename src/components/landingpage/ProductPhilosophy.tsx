import React from 'react';
import Robot from '../../../public/assets/images/Robot.png';
import ChatGPT from '../../../public/assets/images/ChatGPT.png';
import Image from 'next/image';
const Partnership = () => {
  return (
    <div className="mx-auto px-3 md:max-w-5xl md:px-5 md:pb-20 md:pt-20 lg:max-w-6xl xl:px-0">
      <div id="main" className="grid grid-cols-1 justify-evenly gap-5 md:grid-cols-2 ">
        <div>
          <p className="mb-5 px-3 text-2xl font-medium text-white dark:text-white md:text-3xl">
            Auto Deployed Back-End Service: Available with API reference
          </p>
          <div className="relative rounded-3xl border border-white p-8 dark:border-[#ffffff1a]">
            <div className="absolute right-2 top-4 flex gap-3 md:right-5 md:top-4">
              <p className="text-white dark:text-white">In service</p>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="20" viewBox="0 0 38 20" fill="none">
                  <rect width="38" height="20" rx="10" fill="#FEC200" />
                  <rect x="21" y="3" width="14" height="14" rx="7" fill="white" />
                </svg>
              </span>
            </div>
            <div className="gap-4">
              <h6 className="text-2xl font-medium text-white dark:text-white md:text-3xl">Backend service API</h6>
              <p className="md:text-md relative mt-5 text-lg leading-6 text-white dark:text-[#C2C2C2]">
                Easily integrate into your application
              </p>
            </div>
            <div className="mt-6 gap-4">
              <h6 className="text-2xl font-medium text-white dark:text-white md:text-3xl">API TOKEN:</h6>
              <p className="relative mt-3 break-all text-lg leading-6 text-[#00A3FE]  md:text-xl">https://api.infrahive.io/v1</p>
            </div>
            <div className="mt-2">
              <button className="mt-5 w-full rounded-lg border p-3 text-white dark:text-white sm:w-max">API Reference</button>
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
        </div>
        <div>
          <p className="mb-5 px-3 text-2xl font-medium text-white dark:text-white md:text-3xl">
            Preview your App before deploying the Front-End
            <span className="invisible">Extra value</span>
          </p>
          <div className="relative rounded-3xl border border-white p-8 dark:border-[#ffffff1a]">
            <div className="absolute right-2 top-4 flex gap-3 md:right-5 md:top-4">
              <p className="text-white dark:text-white">In service</p>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="20" viewBox="0 0 38 20" fill="none">
                  <rect width="38" height="20" rx="10" fill="#FEC200" />
                  <rect x="21" y="3" width="14" height="14" rx="7" fill="white" />
                </svg>
              </span>
            </div>
            <div className="gap-4">
              <h6 className="text-2xl font-medium text-white dark:text-white md:text-3xl">Test-app</h6>
              <p className="md:text-md relative mt-5 text-lg leading-6  text-white dark:text-[#C2C2C2]">Ready to use AI WebApp</p>
            </div>
            <div className="mt-6 gap-4">
              <h6 className="text-2xl  font-medium text-white dark:text-white md:text-3xl">public url:</h6>
              <p className="relative mt-3 break-all text-lg leading-6 text-[#00A3FE] md:text-xl">https://api.infrahive.io/v1</p>
            </div>
            <div className="mt-2 flex flex-col  gap-3 md:flex-row md:justify-center">
              <button className="mt-5 rounded-lg border p-3 text-white dark:text-white">Preview</button>
              <button className="mt-5 rounded-lg border p-3 text-white dark:text-white">Share</button>
              <button className="mt-5 rounded-lg border p-3 text-white dark:text-white">Embedded</button>
              <button className="mt-5 rounded-lg border  p-3 text-white dark:text-white">Settings</button>
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
      <div className="mt-10 text-gray-600 dark:text-gray-300" id="testimonials">
        <div className="mb-20 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-4xl  font-bold text-white dark:text-white md:text-5xl">
            The Product{' '}
            <span className="relative">
              Philosophy{' '}
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
        <div className="gap-6 space-y-8 md:columns-2 lg:columns-4">
          <div className="h-[20.5rem]  w-full rounded-3xl  bg-gradient-to-b from-yellow-500 via-gray-900 to-gray-900 p-0.5">
            <div className=" relative  h-[20.30rem] rounded-3xl  bg-[#0E0C15] p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:shadow-none ">
              <div className="flex gap-4">
                <div>
                  <h6 className="text-2xl font-medium text-white dark:text-white">Embracing Tomorrow Today, Empowering Humans</h6>
                  {/* <p className="text-sm text-gray-500 dark:text-gray-300">Marketing</p> */}
                </div>
              </div>
              <p className="relative mt-8 leading-6 text-[#C2C2C2]">
                We prioritize human-centric AI development to enhance abilities, streamline processes, and improve user experiences.
              </p>
              <div className="absolute bottom-0 left-20 right-0 opacity-10">
                <Image src={Robot} />
              </div>
            </div>
          </div>
          <div className="h-[20.5rem]  w-full rounded-3xl  bg-gradient-to-b from-teal-500 via-gray-900 to-gray-900 p-0.5">
            <div className="relative aspect-auto h-[20.30rem] rounded-3xl  bg-[#0E0C15]  p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:shadow-none ">
              <div className="flex gap-4">
                <div>
                  <h6 className="text-2xl font-medium leading-8 text-white dark:text-white">Uncompromising Data Security & Privacy</h6>
                  {/* <p className="text-sm text-gray-500 dark:text-gray-300">Marketing</p> */}
                </div>
              </div>
              <p className="mt-8  leading-6 text-[#C2C2C2]">
                {' '}
                Our AI solutions prioritize ethics, responsibility, and societal benefit. Designed towards fairness, transparency, and
                privacy protection in every aspect of deployment.
                <p
                  style={{
                    height: '30%',
                    width: '50%',
                    top: '60%',
                    left: '20%',
                    transform: 'translateX(50%)',
                    position: 'absolute',
                    borderRadius: '582px',
                    background: 'linear-gradient(180deg, rgba(99, 35, 196, 0.00) 0%, #FE851D 100%)',
                    filter: 'blur(80px)'
                  }}
                ></p>
              </p>
            </div>
          </div>
          <div className="h-[20.5rem]  w-full rounded-3xl  bg-gradient-to-b from-purple-700 via-gray-900 to-gray-900 p-0.5">
            <p
              style={{
                height: '30%',
                width: '10%',
                top: '30%',
                left: '55%',
                transform: 'translateX(50%)',
                position: 'absolute',
                borderRadius: '582px',
                background: 'linear-gradient(180deg, rgba(99, 35, 196, 0.00) 0%, #FE851D 100%)',
                filter: 'blur(100px)'
              }}
            ></p>
            <div className="aspect-auto h-[20.30rem] rounded-3xl  bg-[#0E0C15] p-8 shadow-gray-600/10 dark:border-gray-700 dark:shadow-none">
              <div className="flex gap-4">
                <div className="relative">
                  <h6 className="text-2xl font-medium leading-8 text-white dark:text-white">Where Solutions Transend Boundaries</h6>
                  {/* <p className="text-sm text-gray-500 dark:text-gray-300">Developer</p> */}
                </div>
              </div>
              <p className="mt-8 leading-6 text-[#C2C2C2]">
                Pursuing innovation, embracing challenges with audacious ideas to improve experiences, products and possibilities.
              </p>
            </div>
          </div>
          <div className="h-[20.5rem]  w-full rounded-3xl  bg-gradient-to-b from-yellow-500 via-gray-900 to-gray-900 p-0.5">
            <div className="relative aspect-auto h-[20.30rem] rounded-3xl  bg-[#0E0C15] p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:shadow-none">
              <div className="flex gap-4">
                <div>
                  <h6 className="text-2xl font-medium leading-8 text-white dark:text-white">Architecting Tomorrow with AI Core</h6>
                  {/* <p className="text-sm text-gray-500 dark:text-gray-300">Developer</p> */}
                </div>
              </div>
              <p className="mt-8 leading-6 text-[#C2C2C2]">
                Making AI the cornerstone of progress for all sectors. A bold vision to build foundations with innovative solutions
                anticipating challenges and forge new paths to success.
              </p>
              <div className="absolute bottom-0 left-20 right-0 opacity-10">
                <Image src={ChatGPT} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
