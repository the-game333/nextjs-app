import React from 'react';
import Notions from '../../../public/assets/images/Nations.svg';
import Slack from '../../../public/assets/images/Slack.svg';
import Drive from '../../../public/assets/images/Drive.svg';
import GitHub from '../../../public/assets/images/GitHub.svg';
import Hero from '../../../public/assets/images/Hero.svg';

import Image from 'next/image';
export default function LanguageCodeType() {
  return (
    <div className="mx-auto pt-20 md:max-w-5xl lg:max-w-6xl">
      <div className="relative grid grid-cols-1 gap-8  pb-40 pt-10 md:columns-1 md:grid-cols-2">
        <div className="aspect-auto rounded-3xl  border-gray-100  shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:shadow-none">
          <div className="gap-4">
            <h6 className="text-5xl font-medium leading-10 text-gray-700 dark:text-white">Transform your data, the smart way</h6>
          </div>
          <p className="mt-8 text-base leading-8 text-[#C2C2C2] ">
            {' '}
            Enhance your internal data by seamlessly integrating it with cutting-edge semantic search engines, ensuring that it is readily
            available to advanced language models and applications.
          </p>
          <p className="mt-8 text-base leading-8 text-[#C2C2C2]">
            With the utmost security, effortlessly connect Notion, Slack, and platforms alike, benefiting from continuously updated and
            highly effective embeddings.
          </p>
        </div>
        <p
          style={{
            height: '30%',
            width: '10%',
            top: '5%',
            left: '40%',
            transform: 'translateX(50%)',
            position: 'absolute',
            borderRadius: '582px',
            background: 'linear-gradient(180deg, rgba(99, 35, 196, 0.00) 0%, #FE851D 100%)',
            filter: 'blur(80px)'
          }}
        ></p>
        <span className="absolute left-1/3 top-80">
          <Image src={Hero} width={154} height={250} />
        </span>
        <div className="aspect-auto rounded-3xl  border border-gray-100 bg-transparent p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:shadow-none">
          <div>
            <div>
              <p className="text-3xl text-white">Manage Data Sources</p>
              <p className="mt-5 text-base text-white">Continuously synchronized with te products you use. </p>
            </div>
            <div className="mt-5 flex w-full items-center justify-between">
              <div className="flex justify-center rounded-full bg-white p-2 px-6">
                <Image src={Notions} width={71} height={26} />
              </div>
              <div className="flex items-center gap-4">
                <button className="h-7 w-24 rounded-md border border-none bg-[#00B05C] text-white">Synchronized</button>
                <div>3 days ago</div>
              </div>
            </div>
            <div className="mt-5 flex w-full items-center justify-between">
              <div className="flex justify-center rounded-full bg-white p-2 px-6">
                <Image src={Slack} width={71} height={26} />
              </div>
              <div className="flex items-center gap-4">
                <button className="h-7 w-24 rounded-md border border-none bg-[#00B05C] text-white">Synchronized</button>
                <div>1 day ago</div>
              </div>
            </div>
            <div className="mt-5 flex w-full items-center justify-between">
              <div className="flex justify-center rounded-full bg-white p-2 px-6">
                <Image src={Drive} width={71} height={26} />
              </div>
              <div className="flex items-center gap-4">
                <button className="h-7 w-24 rounded-md border  bg-transparent text-white">Connect</button>

                <div className="invisible">3 days ago</div>
              </div>
            </div>
            <div className="mt-5 flex w-full items-center justify-between">
              <div className="flex justify-center rounded-full bg-white p-2 px-6">
                <Image src={GitHub} width={71} height={26} />
              </div>
              <div className="flex items-center gap-4">
                <button className="h-7 w-24 rounded-md border  bg-transparent text-white ">Connect</button>
                <div className="invisible">3 days ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
