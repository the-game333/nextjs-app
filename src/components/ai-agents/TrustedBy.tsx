import clsx from 'clsx';
import React from 'react';

type TrustedByProps = {};

const Card = ({ classes, children }: { classes?: string; children: React.ReactNode }) => (
  <div className={clsx('p-3 text-gray-800 bg-white shadow rounded-xl', classes)}>{children}</div>
);

const TrustedBy: React.FC<TrustedByProps> = () => {
  return (
    <section className="w-full my-12 sm:my-20">
      <h6 className="mb-6 text-3xl font-bold text-center">Trusted By</h6>
      <p className="max-w-lg mx-auto my-6 leading-normal text-center text-gray-400">
        At InfraHive, our commitment to excellence has earned us the trust of a diverse range of industries and partners. We&apos;re proud
        to be the choice of:
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[200px_80px_200px]">
        <Card classes="lg:col-[1_/_2] lg:row-span-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quis nisi reiciendis distinctio dignissimos nostrum quas odio maxime
          ut dolore?
        </Card>
        <Card classes="lg:col-[2_/_4] lg:row-span-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quis nisi reiciendis distinctio dignissimos nostrum quas odio maxime
          ut dolore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, et maxime dolores delectus vel dicta sint
          accusantium sequi, optio commodi sapiente voluptate? Praesentium nulla fuga a nam sit quia quod.
        </Card>
        <Card classes="lg:col-[4_/_5] lg:row-span-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quis nisi reiciendis distinctio dignissimos nostrum quas odio maxime
          ut dolore?
        </Card>
        <Card classes="lg:col-[2_/_3] lg:row-span-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quis nisi reiciendis distinctio dignissimos nostrum quas odio maxime
          ut dolore?
        </Card>
        <Card classes="lg:col-[3_/_4] lg:row-span-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quis nisi reiciendis distinctio dignissimos nostrum quas odio maxime
          ut dolore?
        </Card>
      </div>
    </section>
  );
};
export default TrustedBy;
