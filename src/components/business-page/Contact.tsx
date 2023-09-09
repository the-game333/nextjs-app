import React from 'react';

type ContactProps = {};

const Contact: React.FC<ContactProps> = () => {
  return (
    <section className="flex flex-col items-center gap-6 my-12 text-center">
      <p className="text-gray-500 uppercase">Let&apos;s stay in touch</p>
      <h6 className="text-xl font-bold sm:text-2xl">Contact Us</h6>
      <button className="w-full max-w-xs py-3 mx-auto text-base bg-yellow-400 rounded-full px-7">Drop us a message</button>
    </section>
  );
};
export default Contact;
