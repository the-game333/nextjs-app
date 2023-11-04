import React, { useState } from 'react';
import ChatBoat from '../../../public/assets/images/ChatBoat.svg';
import WorkFlows from '../../../public/assets/images/WorkFlows.svg';
import ChatAggent from '../../../public/assets/images/ChatAggent.svg';
import AssistsAI from '../../../public/assets/images/AssistsAI.svg';
import CodeConveter from '../../../public/assets/images/CodeConveter.svg';
import Batch from '../../../public/assets/images/Batch.svg';
import Sql from '../../../public/assets/images/Sql.svg';
import Tools from '../../../public/assets/images/Tools.svg';
import Image from 'next/image';
import styles from "../../styles/EndlessPossibility.module.css";
import { useEffect } from 'react';
import InfiLoop from './InfiniteLoop';

export default function InfraSpeed() {

  return (
    <div className="mx-auto  px-3 md:max-w-5xl md:px-5 lg:max-w-6xl xl:px-0">
      <div className="text-white dark:text-gray-300" id="testimonials">
        <div className="space-y-4 px-6 pb-10 md:px-0">
          <h2 className="text-center text-3xl font-bold text-white dark:text-white md:text-5xl">
            The Endless{' '}
            <span className="relative whitespace-nowrap">
              possibilities <p className="mt-2">with InfraHive</p>
              <span className="absolute left-0 top-14 -mt-5 md:mt-0">
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
        <InfiLoop />

        <div className="mt-10 flex justify-center pb-5 md:mt-20 md:pb-10">
          <a href="https://calendar.app.google/gxXHjamQLvYxxdpA9" className="bg rounded-full border px-7 py-2">
            Explore More with a Demo
          </a>
        </div>
      </div>
    </div>

  );
}
