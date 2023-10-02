import { useRouter } from 'next/router';
import React from 'react';

type ContactProps = {};

const Contact: React.FC<ContactProps> = () => {
  const router = useRouter();
  return (
    <section className="flex flex-col items-center gap-6 my-12 text-center">
      <p className="text-gray-500 uppercase">Let&apos;s get in touch</p>
      <h6 className="text-xl font-bold sm:text-2xl">Contact Us</h6>
      <button onClick={() => router.push('https://calendar.app.google/gxXHjamQLvYxxdpA9')} className="w-full max-w-xs py-3 mx-auto text-base bg-yellow-400 rounded-full px-7">
        Get Started
      </button>
    </section>
  );
};
export default Contact;
