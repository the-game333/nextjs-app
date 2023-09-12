import React, { useRef } from 'react';

type ProductsProps = {};

const Card = () => {
  return (
    <div className="min-w-[360px] h-[360px] bg-indigo-400 rounded-xl p-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam unde alias suscipit ut quae consequatur eum et fuga iure commodi
      magnam eos ea dolores autem quos pariatur, doloribus non dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quas
      provident commodi hic rem vitae quod tenetur quae, dolor illum. Aliquam rerum ducimus ea vel accusamus soluta molestias voluptates
      dolore repellat voluptatibus in voluptas doloribus possimus sit, debitis ex illum eaque error est deleniti ipsam aliquid quisquam sunt
      natus. Praesentium.
    </div>
  );
};

const Products: React.FC<ProductsProps> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (scrollOffset: number) => {
    if (ref.current) {
      ref.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <section className="flex flex-col items-center gap-6 my-12 text-center">
      <h6 className="text-xl font-bold sm:text-2xl">OUR PRODUCTS</h6>
      <p className="max-w-lg mx-auto text-gray-500 uppercase">
        We support our clients in digital transformation by providing products that cover needs in various areas and processes.
      </p>
      <div className="relative flex items-center max-w-full gap-6 overflow-x-scroll product-slider scroll-smooth" ref={ref}>
        {Array.from({ length: 12 }).map((_, idx) => (
          <Card key={idx} />
        ))}
      </div>
      <div className="flex items-center gap-3">
        <button onClick={() => scroll(-250)} className="p-3 rounded-full bg-gray-950">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </button>
        <button onClick={() => scroll(250)} className="p-3 rounded-full bg-gray-950">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    </section>
  );
};
export default Products;
