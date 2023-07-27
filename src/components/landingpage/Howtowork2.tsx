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
        <div className="flex justify-center mt-6 sm:mt-10">
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

        <div className="gap-6 space-y-8 pt-20 md:columns-2 lg:columns-2">
          <div className="aspect-auto rounded-3xl border border-gray-100 bg-transparent p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:shadow-none">
            <div className="flex gap-4">
              <div>
                <h6 className="text-2xl font-medium text-gray-700 dark:text-white">Embracing Tomorrow Today, Empowering Humans</h6>
                {/* <p className="text-sm text-gray-500 dark:text-gray-300">Marketing</p> */}
              </div>
            </div>
            <p className="relative mt-8 leading-6 text-[#C2C2C2]">
              We prioritize human-centric AI development to enhance abilities, streamline processes, and improve user experiences.
            </p>
          </div>
          <div className="aspect-auto rounded-3xl border border-gray-100 bg-transparent p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:shadow-none">
            <div className="flex gap-4">
              <div>
                <h6 className="text-2xl font-medium text-gray-700 dark:text-white">Embracing Tomorrow Today, Empowering Humans</h6>
                {/* <p className="text-sm text-gray-500 dark:text-gray-300">Marketing</p> */}
              </div>
            </div>
            <p className="relative mt-8 leading-6 text-[#C2C2C2]">
              We prioritize human-centric AI development to enhance abilities, streamline processes, and improve user experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
