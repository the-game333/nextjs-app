import { Button } from '@mui/material';
import Link from 'Link';
import React from 'react';

const perks: string[] = [
  'Annual licence-based pricing, including overage buffers',
  'Custom AI templates and models tailored to your brand voice',
  'API access',
  'Organization management and user roles for teams',
  'Personal account manager',
  'For teams of more than 5 users'
];

const PricingComp = () => {
  return (
    <div className="h-full pt-38 text-center text-white ">
      <h2 className="text-4xl font-semibold mt-24 ml-4">Try for free and see how AI can work for you</h2>

      {/* Pricing Card */}
      <div className="p-6 text-left max-w-xl mx-auto bg-grey rounded-xl mt-20">
        <img src="https://uploads-ssl.webflow.com/5f23b456c81e6bebb921e9cb/6315e2a30cc3cf2cba3aabe8_plan3.svg" height={48} />
        <p className="text-2xl ">Enterprise</p>
        <p className="opacity-75 text-lg -mt-1">For content teams looking for personalized, on-brand storytelling.</p>
        <p className="text-4xl font-semibold">Custom</p>
        <div className="">
          {perks.map((perk, index) => (
            <div key={index} className="flex gap-6 -mt-2 text-lg">
              <img src="./checkMark.svg" className="h-6 my-auto" />
              <p>{perk}</p>
            </div>
          ))}
        </div>

        <Button
                color="inherit"
                sx={{ color: 'black', height: '43px', width: '100%', marginTop: '4rem' }}
                variant="contained"
                component={Link}
                href="/contact-us"
                //  target="_blank"
              >
                Book Demo
              </Button>
      </div>
    </div>
  );
};

export default PricingComp;
