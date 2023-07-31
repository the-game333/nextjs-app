import React from 'react';
import ChatBoat from '../../../public/assets/images/ChatBoat.svg';
import WorkFlows from '../../../public/assets/images/WorkFlows.svg';
import ChatAggent from '../../../public/assets/images/ChatAggent.svg';
import AssistsAI from '../../../public/assets/images/AssistsAI.svg';
import CodeConveter from '../../../public/assets/images/CodeConveter.svg';
import Batch from '../../../public/assets/images/Batch.svg';
import Sql from '../../../public/assets/images/Sql.svg';
import Tools from '../../../public/assets/images/Tools.svg';
import Image from 'next/image';
export default function InfraSpeed() {
  return (
    <div className="mx-auto  md:max-w-5xl lg:max-w-6xl">
      <div className="text-gray-600 dark:text-gray-300" id="testimonials">
        <div className="space-y-4 px-6 pb-10 md:px-0">
          <h2 className="text-center text-5xl font-bold text-gray-800 dark:text-white md:text-5xl">
            The Endless{' '}
            <span className="relative">
              possibilities with InfraHive
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
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center gap-8 rounded-xl border border-[#ffffff4d] bg-transparent p-7">
            <div className="rounded-xl bg-[#15131D] p-1">
              <Image src={ChatBoat} />
            </div>
            <p className="text-2xl">Chat Bots</p>
          </div>
          <div className="flex items-center gap-8 rounded-xl border border-[#ffffff4d] bg-transparent p-7">
            <div className="rounded-xl bg-[#15131D] p-1">
              <Image src={WorkFlows} />
            </div>
            <p className="text-2xl">Workflows</p>
          </div>
          <div className="flex items-center gap-8 rounded-xl border border-[#ffffff4d] bg-transparent p-7">
            <div className="rounded-xl bg-[#15131D] p-1">
              <Image src={ChatAggent} />
            </div>
            <p className="text-2xl">Chat Agents</p>
          </div>
          <div className="flex items-center gap-8 rounded-xl border border-[#ffffff4d] bg-transparent p-7">
            <div className="rounded-xl bg-[#15131D] p-1">
              <Image src={AssistsAI} />
            </div>
            <p className="text-2xl">Assistive AI</p>
          </div>

          <div className="flex items-center gap-8 rounded-xl border border-[#ffffff4d] bg-transparent p-7">
            <div className="rounded-xl bg-[#15131D] p-1">
              <Image src={CodeConveter} />
            </div>
            <p className="text-2xl">Code Converter</p>
          </div>
          <div className="flex items-center gap-8 rounded-xl border border-[#ffffff4d] bg-transparent p-7">
            <div className="rounded-xl bg-[#15131D] p-1">
              <Image src={Batch} />
            </div>
            <p className="text-2xl">Batch Operations</p>
          </div>
          <div className="flex items-center gap-8 rounded-xl border border-[#ffffff4d] bg-transparent p-7">
            <div className="rounded-xl bg-[#15131D] p-1">
              <Image src={Sql} />
            </div>
            <p className="text-2xl">SQL Generator</p>
          </div>
          <div className="flex items-center gap-8 rounded-xl border border-[#ffffff4d] bg-transparent p-7">
            <div className="rounded-xl bg-[#15131D] p-1">
              <Image src={Tools} />
            </div>
            <p className="text-2xl">Tools</p>
          </div>
        </div>
        <div className="mt-20 flex justify-center">
          <button className="bg rounded-full border px-7 py-2">View More</button>
        </div>
      </div>
    </div>
  );
}
