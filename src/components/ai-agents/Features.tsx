import clsx from 'clsx';
import React from 'react';

const DATA = [
  {
    heading: 'Natural Language Understanding',
    subHeading: 'Chatbots with Advanced Natural Language Understanding: Conversations That Feel Incredibly Natural and Easy',
    paragraph:
      "Have you ever had a chat with a chatbot that felt surprisingly human? That's because of Natural Language Understanding (NLU). It's the special ability that allows chatbots to grasp what you're saying and respond like a real person. InfraHive's chatbots are experts at this. They understand your questions and messages effortlessly, making your conversations smooth and enjoyable.\nInfraHive's cutting-edge AI technology powers our chatbots, giving them this remarkable ability. When you engage with InfraHive's chatbots, you'll be pleasantly surprised at how easy and natural it feels, just like chatting with a helpful friend."
  },
  {
    heading: 'Personalization and Context Awareness',
    subHeading: 'Chatbots That Remember Your Preferences: Tailored Recommendations and Conversations Just for You',
    paragraph:
      "Have you ever had a chat with a chatbot that felt surprisingly human? That's because of Natural Language Understanding (NLU). It's the special ability that allows chatbots to grasp what you're saying and respond like a real person. InfraHive's chatbots are experts at this. They understand your questions and messages effortlessly, making your conversations smooth and enjoyable.\nInfraHive's cutting-edge AI technology powers our chatbots, giving them this remarkable ability. When you engage with InfraHive's chatbots, you'll be pleasantly surprised at how easy and natural it feels, just like chatting with a helpful friend."
  },
  {
    heading: '24/7 Availability and Scalability',
    subHeading: "Chat Support That's Available Around the Clock: Always Ready to Assist, No Matter When You Reach Out",
    paragraph:
      "Have you ever had a chat with a chatbot that felt surprisingly human? That's because of Natural Language Understanding (NLU). It's the special ability that allows chatbots to grasp what you're saying and respond like a real person. InfraHive's chatbots are experts at this. They understand your questions and messages effortlessly, making your conversations smooth and enjoyable.\nInfraHive's cutting-edge AI technology powers our chatbots, giving them this remarkable ability. When you engage with InfraHive's chatbots, you'll be pleasantly surprised at how easy and natural it feels, just like chatting with a helpful friend."
  }
];

type DataEntity = (typeof DATA)[number];

type FeaturesProps = {};

type P = {
  reverse: boolean;
  color: 'red' | 'green' | 'blue';
} & DataEntity;

const Card = (props: P) => {
  const { reverse, color, heading, paragraph, subHeading } = props;

  const getColor = (colorArg: P['color']) => {
    let colorClass: {
      light: string;
      dark: string;
    } = { light: '', dark: '' };

    switch (colorArg) {
      case 'red':
        colorClass = {
          dark: 'text-red-400',
          light: 'text-red-200'
        };
        break;
      case 'blue':
        colorClass = {
          dark: 'text-blue-400',
          light: 'text-blue-200'
        };
        break;
      case 'green':
        colorClass = {
          dark: 'text-green-400',
          light: 'text-green-300'
        };
        break;
      default:
        colorClass = {
          light: '',
          dark: ''
        };
    }

    return colorClass;
  };

  const [first, second] = paragraph.split('\n');

  return (
    <div className="grid grid-cols-1 gap-6 my-12 sm:gap-12 md:grid-cols-2">
      <div className={`${reverse ? 'md:order-1' : 'md:-order-1'} h-[300px] bg-white w-full rounded-xl`}></div>
      <div className={`${reverse ? 'md:-order-1 md:pl-6' : 'md:order-1 md:pr-6'} self-center text-left`}>
        <div>
          <h6 className={clsx('mb-3 text-2xl', getColor(color).dark)}>{heading}</h6>
          <p className={clsx('text-gray-400', getColor(color).light)}>{subHeading}</p>
          <br />
          <br />
          <p className="text-gray-500">
            {first}
            <br />
            <br />
            {second}
          </p>
        </div>
      </div>
    </div>
  );
};

const Features: React.FC<FeaturesProps> = () => {
  return (
    <section className="w-full my-12 sm:my-20">
      <h6 className="mb-6 text-3xl font-bold text-center">Features</h6>
      <div>
        {DATA.map((item, idx) => {
          const isReverse = idx % 2 !== 0;
          const color = idx === 0 ? 'red' : idx === 1 ? 'green' : 'blue';
          return <Card reverse={!isReverse} color={color} key={idx} {...item} />;
        })}
      </div>
    </section>
  );
};
export default Features;
