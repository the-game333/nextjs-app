import React from 'react';

type HowToProps = {};

type P = {
  reverse: boolean;
};

const Card = (props: P) => {
  const { reverse } = props;
  return (
    <div className="grid grid-cols-1 gap-6 my-12 sm:gap-12 md:grid-cols-2">
      <div
        className={`${
          reverse ? 'md:order-1' : 'md:-order-1'
        } h-[300px] bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 w-full rounded-xl`}
      ></div>
      <div className={`${reverse ? 'md:-order-1 md:pl-6' : 'md:order-1 md:pr-6'} self-center text-left`}>
        <div>
          <h6 className="mb-3 text-2xl">Your voice, your knowledge</h6>
          <p className="text-gray-400">
            Our AI studies all of your existing content and brand guidelines to learn your unique voice, tone, and style.
          </p>
        </div>
        <ul className="flex flex-col gap-4 mt-6">
          <li className="flex items-center gap-4">
            <span className="flex items-center justify-center w-6 h-6 text-white bg-yellow-400 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            <span>Custom AI model writes in your brand voice</span>
          </li>
          <li className="flex items-center gap-4">
            <span className="flex items-center justify-center w-6 h-6 text-white bg-yellow-400 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            <span>Custom AI model writes in your brand voice</span>
          </li>
          <li className="flex items-center gap-4">
            <span className="flex items-center justify-center w-6 h-6 text-white bg-yellow-400 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            <span>Custom AI model writes in your brand voice</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

const HowTo: React.FC<HowToProps> = () => {
  return (
    <section className="flex flex-col items-center gap-6 p-5 my-12 text-center border-2 border-gray-500 rounded-xl glass">
      <h6 className="text-xl font-bold leading-relaxed sm:text-2xl">Write as a team, in one voice</h6>
      <p className="max-w-lg mx-auto text-gray-500 uppercase ">
        Hypotenuse AI takes your existing on-brand content and knowledge to train an AI that&apos;ll be your team&apos;s brainstorming
        partner and first draft writer.
      </p>
      <div>
        {Array.from({ length: 3 }).map((_, idx) => {
          const isReverse = idx % 2 !== 0;
          return <Card reverse={!isReverse} key={idx} />;
        })}
      </div>
    </section>
  );
};
export default HowTo;
