import clsx from 'clsx';
import React from 'react';

interface AccordianItem {
  isOpen: boolean;
  question: string;
  answer: string;
}

const ACCORDIAN_DATA: Array<AccordianItem> = [
  {
    isOpen: true,
    question: 'What exactly are AI chatbots, and how can they benefit my business?',
    answer:
      'AI chatbots are sophisticated computer programs capable of mimicking human conversation. They benefit businesses by offering instant customer support, task automation, and improved customer engagement, ultimately enhancing operational efficiency and customer satisfaction.'
  },
  {
    isOpen: false,
    question: "Can I trust that my customer's data is secure when utilizing InfraHive's AI chatbots?",
    answer:
      "Absolutely. InfraHive prioritizes data security. We implement robust security measures, including data encryption and access controls, to guarantee the privacy and safety of your customer's data."
  },
  {
    isOpen: false,
    question: "Is it straightforward to integrate InfraHive's chatbots into my existing website or systems?",
    answer:
      "Yes, integrating InfraHive's chatbots is seamless. You can effortlessly embed them into your website or incorporate them into your existing software using our production-ready APIs. The process is user-friendly and designed for hassle-free integration."
  },
  {
    isOpen: false,
    question: 'Which industries can benefit from AI chatbots?',
    answer:
      'AI chatbots have applications across a wide range of industries, including customer service, e-commerce, healthcare, education, finance, and more. Their versatility allows for customization to suit the unique needs of your industry.'
  },
  {
    isOpen: false,
    question: "What makes InfraHive's AI infrastructure unique in the market?",
    answer:
      "InfraHive's uniqueness lies in its end-to-end AI development approach, robust data security practices, and utilization of advanced AI models like OpenAI's GPT-4 and GPT-3.5. Additionally, our InfraSpeed technology accelerates AI model training, setting us apart in the AI infrastructure landscape."
  },
  {
    isOpen: false,
    question: "What is InfraHive's vision for the future of AI technology?",
    answer:
      'InfraHive envisions a future where cutting-edge AI technologies are easily accessible and usable by all. We aim to empower innovation, simplify complex processes, and unlock the transformative potential of AI across various industries, while also prioritizing ethical AI practices.'
  }
];

type AccordianProps = {};

type T = {
  [P in keyof AccordianItem]: AccordianItem[P];
} & {
  idx: number;
  handleClick: () => void;
};

const AccordianItemComp: React.FC<T> = (props) => {
  const { isOpen, answer, question, idx, handleClick } = props;

  const rounded = idx === 0 || idx === ACCORDIAN_DATA.length - 1;

  return (
    <div
      onClick={handleClick}
      className={clsx(
        'border-t border-t-gray-200 bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-300',
        `${rounded && idx === 0 && 'rounded-t-xl'}`,
        `${rounded && idx === ACCORDIAN_DATA.length - 1 && 'rounded-b-xl'}`
      )}
    >
      <button className="flex items-center gap-5 p-5 text-base text-left text-gray-800 md:text-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>

        <span className="w-full">{question}</span>
      </button>
      <div className={`${isOpen ? 'max-h-[500px]' : 'max-h-0'} overflow-hidden transition-all duration-500`}>
        <p className="pb-5 md:text-base text-stone-700 px-14">{answer}</p>
      </div>
    </div>
  );
};

const Accordian: React.FC<AccordianProps> = () => {
  const [state, setState] = React.useState<AccordianItem[]>(ACCORDIAN_DATA);

  const handleClick = (idx: number) => {
    const checkIfOpen = state[idx].isOpen;

    if (checkIfOpen) {
      return setState((prev) => {
        return prev.map((item, i) => (i === idx ? { ...item, isOpen: false } : item));
      });
    } else {
      return setState((prev) => {
        return prev.map((item, i) => (i === idx ? { ...item, isOpen: true } : { ...item, isOpen: false }));
      });
    }
  };

  return (
    <div className="my-12">
      <h6 className="mb-6 text-3xl font-bold text-center">Frequently Asked Questions</h6>
      <div>
        {state.map((item, idx) => (
          <AccordianItemComp key={idx} {...item} idx={idx} handleClick={() => handleClick(idx)} />
        ))}
      </div>
    </div>
  );
};
export default Accordian;
