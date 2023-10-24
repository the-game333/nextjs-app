import Image from 'next/image';
import React from 'react';

type AwardsProps = {};

const Star = (props: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={props.className || 'w-6 h-6'}>
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
      clipRule="evenodd"
    />
  </svg>
);

const Steps: React.FC = () => {
  return (
    <React.Fragment>
      <section className="w-full my-12 md:my-16">
        <div className="flex flex-col items-center justify-between w-full gap-8 mb-6 md:flex-row md:gap-0">
          <div className="flex-1">
            <div className="text-center">
              <span className="px-4 py-2 border border-yellow-500 rounded-full">Step 1</span>
            </div>
            <h6 className="px-4 my-4 text-3xl font-bold text-center">Data Wrangling and EDA</h6>
            <div className="mt-4 md:hidden md:mt-0">
              <p className="flex items-center w-full gap-5 my-4 text-left">
                <span className="text-yellow-300">
                  <Star />
                </span>
                <span>Use language prompts to transform, visualize and featurize data</span>
              </p>
              <p className="flex items-center w-full gap-5 my-4 text-left">
                <span className="text-yellow-300">
                  <Star />
                </span>
                <span>AI agents and chat surface insights in data sets</span>
              </p>
            </div>
          </div>
          <div>
        {true &&    <Image width={80} height={30} src={'/assets/images/arrow.png'} alt="arrow" className="rotate-90 md:rotate-0" /> }
          </div>
          <div className="flex-1">
            <div className="text-center">
              <span className="px-4 py-2 border border-yellow-500 rounded-full">Step 2</span>
            </div>
            <h6 className="px-4 my-4 text-3xl font-bold text-center">Model Building and Iteration</h6>
            <div className="mt-4 md:hidden md:mt-0">
              <p className="flex items-center w-full gap-5 my-4 text-left">
                <span className="text-yellow-300">
                  <Star />
                </span>
                <span>Novel neural network techniques to build enterprise class custom models</span>
              </p>
              <p className="flex items-center w-full gap-5 my-4 text-left">
                <span className="text-yellow-300">
                  <Star />
                </span>
                <span>AI-chat to evaluate and iterate models</span>
              </p>
            </div>
          </div>
          <div>
       {true &&      <Image width={80} height={30} src={'/assets/images/arrow.png'} alt="arrow" className="rotate-90 md:rotate-0" />}
          </div>
          <div className="flex-1">
            <div className="text-center">
              <span className="px-4 py-2 border border-yellow-500 rounded-full">Step 3</span>
            </div>
            <h6 className="px-4 my-4 text-3xl font-bold text-center">
              Production
              <br />
              &nbsp;
            </h6>
            <div className="mt-4 md:hidden md:mt-0">
              <p className="flex items-center w-full gap-5 my-4 text-left">
                <span className="text-yellow-300">
                  <Star />
                </span>
                <span>AI agents that monitor model deployments and drift in production</span>
              </p>
            </div>
          </div>
        </div>
        <div className="items-stretch justify-between hidden gap-8 md:flex">
          <div>
            <p className="flex items-center w-full gap-5 my-4 text-left">
              <span className="text-yellow-300">
                <Star />
              </span>
              <span>Use language prompts to transform, visualize and featurize data</span>
            </p>
            <p className="flex items-center w-full gap-5 my-4 text-left">
              <span className="text-yellow-300">
                <Star />
              </span>
              <span>AI agents and chat surface insights in data sets</span>
            </p>
          </div>
          <div className="bg-yellow-300 w-[2px]"></div>
          <div>
            <p className="flex items-center w-full gap-5 my-4 text-left">
              <span className="text-yellow-300">
                <Star />
              </span>
              <span>Novel neural network techniques to build enterprise class custom models</span>
            </p>
            <p className="flex items-center w-full gap-5 my-4 text-left">
              <span className="text-yellow-300">
                <Star />
              </span>
              <span>AI-chat to evaluate and iterate models</span>
            </p>
          </div>
          <div className="bg-yellow-300 w-[2px]"></div>
          <div>
            <p className="flex items-center w-full gap-5 my-4 text-left">
              <span className="text-yellow-300">
                <Star />
              </span>
              <span>AI agents that monitor model deployments and drift in production</span>
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

const Awards: React.FC<AwardsProps> = () => {
  return (
    <section className="flex flex-col items-center gap-6 my-8 text-center">
      <h6 className="text-xl font-bold sm:text-2xl">AI-Assisted Data Science</h6>
      <Steps />
    </section>
  );
};
export default Awards;
