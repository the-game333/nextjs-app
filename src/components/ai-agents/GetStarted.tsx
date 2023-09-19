import { useRouter } from 'next/router';
import React from 'react';

type GetStartedProps = {};

const GetStarted: React.FC<GetStartedProps> = () => {
  const router = useRouter();
  return (
    <section className="w-full my-12 text-center sm:my-20">
      <h6 className="mb-6 text-3xl font-bold text-center">Get Started Now</h6>
      <p className="max-w-lg mx-auto my-6 leading-normal text-center text-gray-400">
        &quot;Join our thriving community of innovators today and embark on an exhilarating journey into the forefront of technology.
        Let&apos;s dive in and get started on this exciting adventure together!&quot;
      </p>
      <button
        onClick={() => router.push('/contact')}
        className="py-4 font-medium text-base w-full min-w-[240px] text-white bg-yellow-400 px-7 rounded-xl sm:w-auto transition-all duration-300 hover:-translate-y-[2px] active:translate-y-0"
      >
        Contact Us
      </button>
    </section>
  );
};
export default GetStarted;
