import React from 'react';
import { useRouter } from 'next/router';

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  const router = useRouter();
  return (
    <section className="my-12">
      <h1 className="py-2 mb-6 text-3xl font-semibold text-transparent sm:text-6xl bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-500 bg-clip-text">
        <span className="block">Elevate Your Business with</span>
        <span className="block">AI-Powered Chatbots</span>
      </h1>
      <p className="text-base text-[#93A2B7] max-w-xl leading-normal">
        AI is changing the way we work and is a competitive advantage for smart teams that harness its potential effectively.
        <br />
        <br />
        Infrahive is an AI assistant that safely brings the best large language models, continuously updated company knowledge, powerful
        collaboration applications, and an extensible platform to your team’s fingertips.
      </p>
      <button
        onClick={() => router.push('https://calendar.app.google/gxXHjamQLvYxxdpA9')}
        className="py-3 mt-8 font-medium text-base w-full min-w-[240px] text-white bg-yellow-400 px-7 rounded-xl sm:w-auto transition-all duration-300 hover:-translate-y-[2px] active:translate-y-0"
      >
        Get Started
      </button>
    </section>
  );
};
export default Hero;
