import clsx from 'clsx';
import React from 'react';

type FeaturesProps = {};

type P = {
  reverse: boolean;
  color: 'red' | 'green' | 'blue';
};

const Card = (props: P) => {
  const { reverse, color } = props;

  const getColor = (colorArg: P['color']) => {
    let colorClass: {
      light: string;
      dark: string;
    } = { light: '', dark: '' };

    switch (colorArg) {
      case 'red':
        colorClass = {
          dark: 'text-red-400',
          light: 'text-red-300'
        };
        break;
      case 'blue':
        colorClass = {
          dark: 'text-blue-400',
          light: 'text-blue-300'
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

  return (
    <div className="grid grid-cols-1 gap-6 my-12 sm:gap-12 md:grid-cols-2">
      <div className={`${reverse ? 'md:order-1' : 'md:-order-1'} h-[300px] bg-white w-full rounded-xl`}></div>
      <div className={`${reverse ? 'md:-order-1 md:pl-6' : 'md:order-1 md:pr-6'} self-center text-left`}>
        <div>
          <h6 className={clsx('mb-3 text-2xl', getColor(color).dark)}>Your voice, your knowledge</h6>
          <p className={clsx('text-gray-400', getColor(color).light)}>
            Our AI studies all of your existing content and brand guidelines to learn your unique voice, tone, and style.
          </p>
          <br />
          <br />
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolor cumque tempore deleniti impedit optio ipsam consectetur
            minima aliquam natus.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi reprehenderit possimus, aut ipsam accusantium quaerat qui illum
            debitis aspernatur aliquam magni non numquam! Officiis similique dolorum obcaecati cumque praesentium quae?
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
        {Array.from({ length: 3 }).map((_, idx) => {
          const isReverse = idx % 2 !== 0;
          const color = idx === 0 ? 'red' : idx === 1 ? 'green' : 'blue';
          return <Card reverse={!isReverse} color={color} key={idx} />;
        })}
      </div>
    </section>
  );
};
export default Features;
