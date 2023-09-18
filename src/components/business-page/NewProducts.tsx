import React, { useState } from 'react';

type NewProductsProps = {};

const DATA = [
  { id: 1, label: 'Personalization AI' },
  { id: 2, label: 'Language AI' },
  { id: 3, label: 'Forecasting and Planning' },
  { id: 4, label: 'Marketing and Sales AI' },
  { id: 5, label: 'Anomaly Detection' },
  { id: 6, label: 'AI Agents' },
  { id: 7, label: 'Vision AI' },
  { id: 8, label: 'Discrete Optimization' },
  { id: 9, label: 'Predictive Modeling' },
  { id: 10, label: 'Chat LLM' }
];

const NewProducts: React.FC<NewProductsProps> = () => {
  const [selected, setSelected] = useState(1);

  const selectedItem = DATA.find((x) => x.id === selected);

  return (
    <section className="my-12 text-center">
      <h6 className="text-xl font-bold sm:text-2xl">OUR PRODUCTS</h6>
      <p className="max-w-lg mx-auto my-5 text-gray-500 uppercase">
        We support our clients in digital transformation by providing products that cover needs in various areas and processes.
      </p>

      <div className="grid min-h-[500px] my-8 grid-cols-1 gap-10 md:grid-cols-2">
        <div className="grid grid-cols-2 gap-5">
          {DATA.map((item, idx) => {
            return (
              <div
                onMouseEnter={() => setSelected(item.id)}
                className="flex items-center gap-4 text-xl text-left cursor-pointer group"
                key={idx}
              >
                <span className="text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path
                      fillRule="evenodd"
                      d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="px-2 py-2 transition-all duration-500 group-hover:bg-yellow-300 group-hover:text-gray-900">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center">
          <div className="transition-all duration-500">
            <h6 className="text-6xl font-bold">{selectedItem?.id}</h6>
            <h6 className="text-6xl font-bold">{selectedItem?.label}</h6>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NewProducts;
