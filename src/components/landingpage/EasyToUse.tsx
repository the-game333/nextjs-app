import Image from 'next/image';
import React, { useState } from 'react';
import Mobile from '../../../public/assets/images/Mobile.png';
import Logs from '../../../public/assets/images/Logs.png';
import Logs2 from '../../../public/assets/images/Logs2.png';
import Mask from '../../../public/assets/images/Mask.png';
import Code from '../../../public/assets/images/Code.png';
import Image1 from '../../../public/assets/images/Image1.png';
import Image2 from '../../../public/assets/images/Image2.png';
import Image3 from '../../../public/assets/images/Image3.png';
import Image4 from '../../../public/assets/images/Image4.png';
import Image5 from '../../../public/assets/images/Image5.png';
import Eclipse from '../../../public/assets/images/Eclipse.svg';

export default function Howtowork(props: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [isServiceEnabled, setIsServiceEnabled] = useState<boolean>(true);
  const [isServiceEnabled2, setIsServiceEnabled2] = useState<boolean>(true);

  const toggleService = () => {
    setIsServiceEnabled(!isServiceEnabled);
  };
  const toggleService2 = () => {
    setIsServiceEnabled2(!isServiceEnabled2);
  };

  return (
    <React.Fragment>
      <div className="px-3 mx-auto md:max-w-5xl md:px-5 lg:max-w-6xl xl:px-0">
        <div className="text-gray-600 " id="testimonials">
          <div className="px-6 pb-10 space-y-4 md:px-0">
            <h2 className="text-4xl font-bold text-center text-white  md:text-5xl">
              Easy-to-use LLMOps{' '}
              <span className="relative ">
                platform{' '}
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
          </div>
          <div className="relative ml-auto">
            <div className="mx-auto text-center lg:w-2/3">
              <p className="px-3 text-sm leading-7 text-white  md:px-0 md:text-base">
                Revolutionize your app development experience & experience the future of AI-driven innovation. Unleash your imagination and
                conquer the world of apps with us.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 pt-10 md:columns-1 md:grid-cols-5">
          <div className="p-8 bg-transparent border border-gray-100 shadow-2xl aspect-auto rounded-3xl shadow-gray-600/10  md:col-span-2">
            <div className="flex gap-4">
              <div>
                <h6 className="text-3xl font-medium leading-10 text-white  md:text-4xl">
                  Create & Craft AI-driven apps in mere <span className="text-[#FEC200]">minutes</span>
                </h6>
                {/* <p className="text-sm text-gray-500 dark:text-gray-300">Marketing</p> */}
              </div>
            </div>
            <p className="mt-5 leading-6 text-[#C2C2C2] md:mt-8  md:leading-7">
              {' '}
              Whether it&apos;s for your team&apos;s internal operations or an external launch, you have the power to effortlessly deploy
              your application in just 5 minutes.
            </p>

            <div className="relative flex justify-center mt-10 md:mt-5">
              <span className="-z-1 absolute -top-[100px]">
                <Image alt="Eclipse" src={Eclipse} />
              </span>
              <Image alt="Mobile" src={Mobile} height={250} width={300} />
            </div>
          </div>
          <div className="p-8 bg-transparent border border-gray-100 shadow-2xl aspect-auto rounded-3xl shadow-gray-600/10  md:col-span-3">
            <div className="flex gap-4">
              <div>
                <h6 className="text-3xl font-medium leading-10 text-white  md:text-4xl">Create AI that takes <span className="text-[#FEC200]">Actions</span></h6>
                {/* <p className="text-sm text-gray-500 dark:text-gray-300">Marketing</p> */}
              </div>
            </div>
            <p className="mt-8  leading-6 text-[#C2C2C2] md:leading-7">
              {' '}
              AI that can book appointment, fill contact form or order a pizza 🍕
            </p>
            <div className="my-12 font-sans text-gray-900 bg-white rounded-xl">
              <div className="flex items-center justify-between px-6 py-3 border-b border-gray-400">
                <h2 className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-5 h-5 border-2 border-gray-800 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="#40c057"
                      className="w-4 h-4"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-xl font-semibold sm:text-2xl">Action</span>
                </h2>
                <button className="px-6 py-1 text-sm text-white bg-gray-900 rounded-3xl" onClick={() => props.setOpen(true)}>
                  See All
                </button>
              </div>
              <div className="px-6 py-6">
                <div>
                  <h6 className="font-medium">Your website:</h6>
                  <p className="px-3 py-2 mt-2 text-blue-500 bg-neutral-100 max-w-max">https://www.hospital.com</p>
                </div>
                <div className="flex flex-col gap-5 mt-6">
                  <div className="flex items-center justify-between p-3 border-2 sm:p-4 border-stone-300 rounded-xl">
                    <div>
                      <h6 className="text-lg font-semibold sm:text-xl">Submit a Form</h6>
                      <p className="mt-2 text-stone-500">Submit the contact form in hospital.com/form</p>
                    </div>
                    <div>
                      <button className={`toggle-button ${isServiceEnabled ? 'on' : ''}`} onClick={toggleService}>
                        <div className="slider"></div>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border-2 sm:p-4 border-stone-300 rounded-xl">
                    <div>
                      <h6 className="text-lg font-semibold sm:text-xl">Book a call</h6>
                      <p className="mt-2 text-stone-500">Book a call through hospital.com/booking</p>
                    </div>
                    <div>
                      <button className={`toggle-button ${isServiceEnabled2 ? 'on' : ''}`} onClick={toggleService2}>
                        <div className="slider"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* REPLACED SECTION */}
        <div className="grid grid-cols-1 gap-8 pt-10 md:columns-1 md:grid-cols-5">
          <div className="p-8 bg-transparent border border-gray-100 shadow-2xl col-span-full aspect-auto rounded-3xl shadow-gray-600/10 ">
            <div className="flex gap-4">
              <div>
                <h6 className="text-3xl font-medium leading-10 text-white  md:text-4xl">
                  Leverage your data to enhance AI capabilities
                </h6>
                {/* <p className="text-sm text-gray-500 dark:text-gray-300">Marketing</p> */}
              </div>
            </div>
            <p className="mt-8  leading-6 text-[#C2C2C2] md:leading-7">
              {' '}
              By utilizing documents, webpages, or Notion content as the foundation for AI, you can effortlessly streamline text
              preprocessing, vectorization, and segmentation. Say No to the need for extensive embedding technique learning, and save
              valuable weeks of development time with this innovation. Get ready to take your AI endeavors to new heights!
            </p>
            <div className="relative h-4 ">
              <p className="mt-8 leading-7 text-[#C2C2C2]">Building Index...</p>
              <div className="absolute w-full h-full bg-gray-200 rounded-full"></div>
              <div className="absolute w-2/4 h-full bg-yellow-500 rounded-full"></div>
            </div>
            <div className="grid items-center grid-cols-5 gap-4 mt-20">
              <div>
                <Image alt="Image1" src={Image1} height={64} width={64} />
              </div>
              <div>
                <Image alt="Image2" src={Image2} height={64} width={64} />
              </div>
              <div>
                <Image alt="Image3" src={Image3} height={64} width={64} />
              </div>
              <div>
                <Image alt="Image4" src={Image4} height={64} width={64} />
              </div>
              <div>
                <Image alt="Image5" src={Image5} height={64} width={64} />
              </div>
            </div>
            <div></div>
          </div>
        </div>

        <div className="grid grid-cols-1 pt-10 pb-20 gap-y-8 md:columns-1 md:grid-cols-5 md:gap-x-8">
          <div className="p-8 bg-transparent border border-gray-100 shadow-2xl aspect-auto rounded-3xl shadow-gray-600/10  md:col-span-2">
            <div className="flex gap-4">
              <div>
                <h6 className="text-3xl font-medium leading-10 text-white  md:text-4xl">Streamlined set of APIs</h6>
                {/* <p className="text-sm text-gray-500 dark:text-gray-300">Marketing</p> */}
              </div>
            </div>
            <p className="mt-8 text-sm leading-6  text-[#C2C2C2] md:text-base md:leading-7">
              {' '}
              Take integration to the next level..! Our API design follows the innovative back-end as a service concept, allowing you to
              access just one API interface to effortlessly integrate plugins and maintain long-lasting connections. Say goodbye to
              complexity and hello to seamless integration!
            </p>
            <div className="relative pt-5">
              <p
                style={{
                  height: '50%',
                  width: '50%',
                  top: '80%',
                  left: '10%',
                  transform: 'translateX(50%)',
                  position: 'absolute',
                  borderRadius: '582px',
                  background: 'linear-gradient(180deg, rgba(99, 35, 196, 0.00) 0%, #FE851D 100%)',
                  filter: 'blur(80px)'
                }}
              ></p>
              <Image alt="code" src={Code} className="rounded-xl" height={250} width={350} />
            </div>
          </div>
          <div className="col-span-3 p-8 bg-transparent border border-gray-100 shadow-2xl aspect-auto rounded-3xl shadow-gray-600/10 e md:col-span-3">
            <div className="flex gap-4">
              <div>
                <h6 className="text-3xl font-medium leading-10 text-white  md:text-4xl">
                  Continuous improvement and operation
                </h6>
                {/* <p className="text-sm text-gray-500 dark:text-gray-300">Marketing</p> */}
              </div>
            </div>
            <p className="mt-8 text-sm leading-6 text-[#C2C2C2] md:text-base md:leading-7">
              {' '}
              Embracing and unlock the potential of AI applications. Continuously refine and optimize its capabilities through active
              engagement with the technology by visually inspecting logs and annotating data to enhance their performance.
            </p>
            <div className="mt-20 lg:mt-[130px]">
              <div className="h-[100px] max-w-[618px]">
                {/* <Image src={Logs} className="rounded-xl" /> */}
                <Image alt="logo2" src={Logs2} className="rounded-xl" />
                {/* <Image src={Mask} className="rounded-xl" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
