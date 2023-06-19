import React from 'react';

const Partnership = () => {
  return (
    <div className="mx-auto mb-24 md:max-w-5xl lg:max-w-6xl">
      <hr className="mb-16 opacity-20" />
      <p className="mx-4 my-8 text-lg text-white opacity-60">
        InfraHive works with <span className="underline">Generative AI Companies</span>
      </p>
      <div className="mx-4 mt-12 grid  grid-cols-2 items-center gap-2 opacity-60 md:grid-cols-4">
        <img src="/assets/images/logos/openai.png" alt="Open AI Logo" className="mr-8 h-8 md:h-12" />
        <span className="my-auto text-3xl font-bold text-white md:-ml-6 md:text-4xl">ANTHROP\C</span>
        <img src="/assets/images/logos/cohere.svg" className="h-8 md:h-10 " alt="Cohere Logo" />
        <p className="my-auto text-center text-3xl font-bold text-white md:text-4xl">stability.ai</p>
      </div>
      <hr className="mt-16 opacity-20" />
    </div>
  );
};

export default Partnership;
