import Image from 'next/image';
import React from 'react';

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  return (
    <section>
      <div className="flex flex-col gap-8 my-12 sm:my-16">
        <div className="text-center">
          <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl">
            Generative <span className="text-yellow-400">AI</span> that sounds like you
          </h1>
          <p className="max-w-xs mx-auto mt-6 text-base leading-normal md:text-lg sm:max-w-max">
            Train AI on your own data to create on-brand content at scale.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-5 sm:flex-row">
          <button className="w-full py-4 font-medium text-black bg-white px-7 rounded-xl sm:w-auto transition-all duration-300 hover:-translate-y-[2px] active:translate-y-0">
            Request Demo
          </button>
          <button className="w-full py-4 font-medium text-white bg-yellow-400 px-7 rounded-xl sm:w-auto transition-all duration-300 hover:-translate-y-[2px] active:translate-y-0">
            Get Started
          </button>
        </div>
      </div>
      <div className="pb-12 sm:p b-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="sm:order-1">
            <Image src={'/assets/images/graphc.png'} alt="ai graphic" width={400} height={200} className="block mx-auto shadow-hero" />
          </div>
          <div className="self-center text-center sm:-order-1 sm:text-left sm:flex">
            <div>
              <h2 className="text-2xl sm:text-3xl">WE HELP COMPANIES HARNESS THE POWER OF ARTIFICIAL INTELLIGENCE</h2>
              <button className="w-full py-3 mt-5 bg-white bg-opacity-30 px-7 rounded-xl sm:max-w-xs">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
