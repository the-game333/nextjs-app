import clsx from 'clsx';
import React from 'react';

type AwardsProps = {};

const Awards: React.FC<AwardsProps> = () => {
  return (
    <section className="flex flex-col items-center gap-6 my-16 text-center">
      <p className="text-gray-500 uppercase">You can trust us</p>
      <h6 className="text-xl font-bold sm:text-2xl">Our Awards</h6>
      <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-3">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div
            key={idx}
            className={clsx(
              'flex flex-col items-center gap-4',
              idx !== 2 ? 'sm:border-r-2 sm:pr-6 pr-0 border-r-0' : 'sm:border-r-2 border-r-0 border-transparent sm:pr-6 pr-0'
            )}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#facc15" className="w-8 h-8">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
              />
            </svg>

            <h6 className="text-xl font-bold">Microsoft Awards 2021</h6>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Awards;
