import React from 'react';

type OurProps = {};

const CARD_DATA = [
  {
    title: 'READY-MADE AI PRODUCTS',
    content: 'We provide and continuously improve nine ready-made products for business and operations optimization…',
    emo: '🚀'
  },
  {
    title: 'AI CONSULTING',
    content: 'Together with our clients, we identify and scope their challenges. We help them understand the value of their data…',
    emo: '💬'
  },
  {
    title: 'AI-POWERED DEVELOPMENT',
    content: 'We deliver software solutions of production-grade quality, including data integration, APIs, and a user interface…',
    emo: '⚙️'
  }
];

const Card: React.FC<Record<keyof (typeof CARD_DATA)[number], string>> = (props) => {
  const { title, emo, content } = props;
  return (
    <div className="relative p-5 pt-12 text-gray-800 bg-gray-100 shadow rounded-xl">
      <div className="absolute p-4 text-3xl -translate-x-1/2 translate-y-full rounded-full bg-gradient-to-b from-gray-900 to-gray-600 -top-1/2 left-1/2">
        {emo}
      </div>
      <h6 className="text-lg">{title}</h6>
      <p className="my-5 text-gray-600">{content}</p>
      <button className="font-semibold underline">Read More</button>
    </div>
  );
};

const Our: React.FC<OurProps> = () => {
  return (
    <section className="py-6 text-gray-900 md:py-0">
      <h6 className="text-lg text-center text-gray-600">Who we are</h6>
      <h2 className="my-4 text-2xl font-bold text-center sm:text-3xl">
        <strong>AI EXPERTS</strong>
      </h2>
      <p className="max-w-lg mx-auto leading-relaxed text-center">
        We help companies harness the power of artificial intelligence by designing tailored solutions. Blindspot.AI is an expert in
        delivering services and precisely engineered software products standing on machine learning, AI, cybersecurity, and resource
        optimization principles. We are one of the top three fastest growing companies in CE according to 2019 and 2020 Deloitte Fast 50.
      </p>
      <div className="grid grid-cols-1 gap-16 pb-8 mt-24 sm:pb-0 sm:gap-6 sm:grid-cols-3">
        {CARD_DATA.map((item, idx) => (
          <Card key={idx} {...item} />
        ))}
      </div>
    </section>
  );
};
export default Our;
