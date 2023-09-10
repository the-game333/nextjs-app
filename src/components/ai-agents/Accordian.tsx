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
    question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, temporibus.',
    answer:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa enim, nemo a id esse dolorum, ullam neque earum fuga sint obcaecati! Modi soluta, obcaecati sint velit voluptates non officiis amet iste, sed inventore incidunt itaque ducimus dolor similique fugiat impedit autem? Placeat amet unde mollitia. Blanditiis impedit odit in perspiciatis!'
  },
  {
    isOpen: false,
    question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, temporibus.',
    answer:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa enim, nemo a id esse dolorum, ullam neque earum fuga sint obcaecati! Modi soluta, obcaecati sint velit voluptates non officiis amet iste, sed inventore incidunt itaque ducimus dolor similique fugiat impedit autem? Placeat amet unde mollitia. Blanditiis impedit odit in perspiciatis!'
  },
  {
    isOpen: false,
    question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, temporibus.',
    answer:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa enim, nemo a id esse dolorum, ullam neque earum fuga sint obcaecati! Modi soluta, obcaecati sint velit voluptates non officiis amet iste, sed inventore incidunt itaque ducimus dolor similique fugiat impedit autem? Placeat amet unde mollitia. Blanditiis impedit odit in perspiciatis!'
  },
  {
    isOpen: false,
    question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, temporibus.',
    answer:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa enim, nemo a id esse dolorum, ullam neque earum fuga sint obcaecati! Modi soluta, obcaecati sint velit voluptates non officiis amet iste, sed inventore incidunt itaque ducimus dolor similique fugiat impedit autem? Placeat amet unde mollitia. Blanditiis impedit odit in perspiciatis!'
  },
  {
    isOpen: false,
    question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, temporibus.',
    answer:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa enim, nemo a id esse dolorum, ullam neque earum fuga sint obcaecati! Modi soluta, obcaecati sint velit voluptates non officiis amet iste, sed inventore incidunt itaque ducimus dolor similique fugiat impedit autem? Placeat amet unde mollitia. Blanditiis impedit odit in perspiciatis!'
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
        <p className="pb-5 md:text-base text-stone-500 px-14">{answer}</p>
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
