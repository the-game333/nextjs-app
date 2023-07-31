import React from 'react';
import Cover from '../../../public/assets/images/Conver.svg';
import FollowUp from '../../../public/assets/images/FollowUp.svg';
import Text from '../../../public/assets/images/Text.svg';
import Image from 'next/image';
export default function BulitCommunity() {
  return (
    <div className="mx-auto  pt-20 md:max-w-5xl lg:max-w-6xl">
      <div className="text-gray-600 dark:text-gray-300" id="testimonials">
        <div className="space-y-4 px-6 pb-10 md:px-0">
          <h2 className="text-center text-5xl font-bold text-gray-800 dark:text-white md:text-5xl">Next Tier Chat Experience</h2>
        </div>
        <div className="relative ml-auto">
          <div className="mx-auto text-center lg:w-2/3">
            <p className="mt-5 pb-10 text-base leading-7 text-gray-700 dark:text-gray-300">
              Enhance user experience through adding pre-conversation settings for apps.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8  pt-10 md:columns-1 md:grid-cols-3">
          <div className="aspect-auto rounded-3xl  border border-gray-100 bg-[#ffffff1a] p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:shadow-none">
            <div className="flex justify-center">
              <Image src={Cover} height={80} width={80} />
            </div>
            <div className="flex justify-center gap-4">
              <div>
                <h6 className="text-2xl font-medium leading-10 text-gray-700 dark:text-white">Conversation Remarks</h6>
                {/* <p className="text-sm text-gray-500 dark:text-gray-300">Marketing</p> */}
              </div>
            </div>
            <p className="mt-8 text-center  text-base leading-7 text-[#C2C2C2]">
              {' '}
              In a chat app, the first sentence that the Al actively speaks to the user is usually used as a welcome.
            </p>
          </div>
          <div className="aspect-auto rounded-3xl  border border-gray-100 bg-[#ffffff1a] p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:shadow-none">
            <div className="flex justify-center">
              <Image src={FollowUp} height={80} width={80} />
            </div>
            <div className="flex justify-center gap-4">
              <div>
                <h6 className="text-2xl font-medium leading-10 text-gray-700 dark:text-white">Follow up</h6>
                {/* <p className="text-sm text-gray-500 dark:text-gray-300">Marketing</p> */}
              </div>
            </div>
            <p className="mt-8 text-center  text-base leading-7 text-[#C2C2C2]">
              {' '}
              Setting up next questions suggestion can give users a better chat.
            </p>
          </div>
          <div className="aspect-auto rounded-3xl  border border-gray-100 bg-[#ffffff1a] p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:shadow-none">
            <div className="flex justify-center">
              <Image src={Text} height={80} width={80} />
            </div>
            <div className="flex justify-center gap-4">
              <div>
                <h6 className="text-2xl font-medium leading-10 text-gray-700 dark:text-white">Speech to Text</h6>
                {/* <p className="text-sm text-gray-500 dark:text-gray-300">Marketing</p> */}
              </div>
            </div>
            <p className="mt-8 text-center  text-base leading-7 text-[#C2C2C2]"> Once enabled, you can use voice input.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
