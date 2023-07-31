import Image from 'next/image';
import React from 'react';
import Mobile from '../../../public/assets/images/Mobile.png';
import Logs from '../../../public/assets/images/Logs.png';
import Logs2 from '../../../public/assets/images/Logs2.png';
import Code from '../../../public/assets/images/Code.png';
import Image1 from '../../../public/assets/images/Image1.png';
import Image2 from '../../../public/assets/images/Image2.png';
import Image3 from '../../../public/assets/images/Image3.png';
import Image4 from '../../../public/assets/images/Image4.png';
import Image5 from '../../../public/assets/images/Image5.png';
import Eclipse from '../../../public/assets/images/Eclipse.svg';

export default function Howtowork() {
  return (
    <div className="mx-auto pt-32 md:max-w-5xl lg:max-w-6xl">
      <div className="text-gray-600 dark:text-gray-300" id="testimonials">
        <div className="space-y-4 px-6 pb-10 md:px-0">
          <h2 className="text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">
            Easy-to-use LLMOps{' '}
            <span className="relative">
              platform{' '}
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
        <div className="relative ml-auto">
          <div className="mx-auto text-center lg:w-2/3">
            <p className="font- text-base leading-7 text-gray-700 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt nam itaque sed eius modi error totam sit illum.
              Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8  pt-10 md:columns-1 md:grid-cols-5">
        <div className="aspect-auto rounded-3xl  border border-gray-100 bg-[#ffffff1a] p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:shadow-none md:col-span-2">
          <div className="flex gap-4">
            <div>
              <h6 className="text-3xl font-medium leading-10 text-gray-700 dark:text-white md:text-4xl">
                Create & Craft AI-driven apps in mere <span className="text-[#FEC200]">minutes</span>
              </h6>
              {/* <p className="text-sm text-gray-500 dark:text-gray-300">Marketing</p> */}
            </div>
          </div>
          <p className="mt-8 leading-7  text-[#C2C2C2]">
            {' '}
            Whether it's for your team's internal operations or an external launch, you have the power to effortlessly deploy your
            application in just 5 minutes.
          </p>

          <div className="relative flex justify-center">
            <Image src={Mobile} height={250} width={300} />
            <span className="-z-1 absolute -top-[100px]">
              <Image src={Eclipse} />
            </span>
          </div>
        </div>
        <div className="aspect-auto rounded-3xl border border-gray-100 bg-[#ffffff1a] p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:shadow-none md:col-span-3">
          <div className="flex gap-4">
            <div>
              <h6 className="text-3xl font-medium leading-10 text-gray-700 dark:text-white md:text-4xl">
                Leverage your data to enhance AI capabilities
              </h6>
              {/* <p className="text-sm text-gray-500 dark:text-gray-300">Marketing</p> */}
            </div>
          </div>
          <p className="mt-8 leading-7 text-[#C2C2C2]">
            {' '}
            By utilizing documents, webpages, or Notion content as the foundation for AI, you can effortlessly streamline text
            preprocessing, vectorization, and segmentation. Say No to the need for extensive embedding technique learning, and save valuable
            weeks of development time with this innovation. Get ready to take your AI endeavors to new heights!
          </p>
          <div className="relative h-4 ">
            <p className="mt-8 leading-7 text-[#C2C2C2]">Building Index...</p>
            <div className="absolute h-full w-full rounded-full bg-gray-200"></div>
            <div className="absolute h-full w-2/4 rounded-full bg-yellow-500"></div>
          </div>
          <div className="mt-20 grid grid-cols-5 items-center gap-4">
            <div>
              <Image src={Image1} height={64} width={64} />
            </div>
            <div>
              <Image src={Image2} height={64} width={64} />
            </div>
            <div>
              <Image src={Image3} height={64} width={64} />
            </div>
            <div>
              <Image src={Image4} height={64} width={64} />
            </div>
            <div>
              <Image src={Image5} height={64} width={64} />
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8  pb-20 pt-10 md:columns-1 md:grid-cols-5">
        <div className="col-span-2 aspect-auto  rounded-3xl border border-gray-100 bg-[#ffffff1a] p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:shadow-none md:col-span-2">
          <div className="flex gap-4">
            <div>
              <h6 className="text-3xl font-medium leading-10 text-gray-700 dark:text-white md:text-4xl">Streamlined set of APIs</h6>
              {/* <p className="text-sm text-gray-500 dark:text-gray-300">Marketing</p> */}
            </div>
          </div>
          <p className="mt-8 text-base  leading-7 text-[#C2C2C2]">
            {' '}
            Take integration to the next level..! Our API design follows the innovative back-end as a service concept, allowing you to
            access just one API interface to effortlessly integrate plugins and maintain long-lasting connections. Say goodbye to complexity
            and hello to seamless integration!
          </p>
          <div className="relative pt-5">
            <Image src={Code} className="rounded-xl" height={250} width={350} />
            <span className="absolute">
              <Image src={Eclipse} />
            </span>
          </div>
        </div>
        <div className="col-span-3 aspect-auto rounded-3xl border border-gray-100 bg-[#ffffff1a] p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:shadow-none md:col-span-3">
          <div className="flex gap-4">
            <div>
              <h6 className="text-3xl font-medium leading-10 text-gray-700 dark:text-white md:text-4xl">
                Continuous improvement and operation
              </h6>
              {/* <p className="text-sm text-gray-500 dark:text-gray-300">Marketing</p> */}
            </div>
          </div>
          <p className="mt-8 text-base leading-7 text-[#C2C2C2]">
            {' '}
            Embracing and unlock the potential of AI applications. Continuously refine and optimize its capabilities through active
            engagement with the technology by visually inspecting logs and annotating data to enhance their performance.
          </p>
          <div className="mt-20">
            <div className="h-[100px] max-w-[618px]">
              {/* <Image src={Logs} className="rounded-xl" /> */}
              <Image src={Logs2} className="rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
