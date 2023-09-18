import React from 'react';

type InfraSpeedProps = {};

const InfraSpeedComp: React.FC<InfraSpeedProps> = () => {
  return (
    <div>
      <div className="px-3 py-20 mx-auto md:max-w-5xl md:px-5 lg:max-w-6xl xl:px-0">
        <div className="text-white dark:text-gray-300" id="testimonials">
          <div className="px-6 pb-10 space-y-4 md:px-0">
            <h2 className="text-3xl font-bold text-center text-white dark:text-white md:text-5xl">
              Introducing{' '}
              <span className="relative whitespace-nowrap">
                Infraspeed
                <span className="absolute left-0 -mt-5 top-14 md:mt-0">
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
          </div>
          <div className="relative ml-auto">
            <div className="mx-auto text-center lg:w-2/3">
              <p className="px-3 text-sm leading-7 text-white md:px-0 md:text-base">Train/Fine Tune AI Models upto 15x faster</p>
            </div>
          </div>
          <div className="mt-12">
            <div className="text-center text-9xl animate-text">
              <span>1</span>
              <span>5</span>
              <span>x</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfraSpeedComp;
