import Image from 'next/image';
import React from 'react';

type HowProps = {};

const How: React.FC<HowProps> = () => {
  return (
    <section className="w-full my-12 sm:my-20">
      <h6 className="mb-6 text-3xl font-bold text-center">How can we help you?</h6>
      <p className="max-w-lg mx-auto my-6 leading-normal text-center text-gray-400">
        Boost sales, enhance customer experience, 24*7 availability, cost savings, unmatched speed of responses.
      </p>
      <div className="mx-auto text-center shadow-hero animate-pulse max-w-max">
       {"'/assets/images/ai-agent-removebg-preview.png'" && <Image src={'/assets/images/ai-agent-removebg-preview.png'} width={500} height={500} alt="ai-agent" />} 
      </div>
    </section>
  );
};
export default How;
