import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { Button, Chip } from '@mui/material';
import { format } from 'date-fns';

const Blogs = () => {
  const [blogsData, setBlogsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://blog.infrahive.io/ghost/api/content/posts/?key=fd88644ae694593eae2805718c')
      .then((response) => {
        const blogs = response.data.posts;
        setBlogsData(blogs);
        console.log('dataaaa', blogsData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="m-auto px-5 pb-10 md:max-w-5xl md:pb-20 lg:max-w-6xl " style={{ maxWidth: '1380px' }}>
      <div className="mb-12 text-gray-600 dark:text-gray-300">
        <h2 className="mt-0 pt-3 text-center text-2xl font-bold text-white dark:text-white  md:text-5xl">
          {' '}
          <span className="relative">
            Blogs
            <span className="absolute left-0 flex items-center justify-center text-center sm:top-4 md:top-16">
              <div className="sm:w-30 relative  mx-auto flex  w-32  items-center justify-center text-center md:w-32 lg:w-56 xl:w-full ">
                <svg className="h-auto w-full" xmlns="http://www.w3.org/2000/svg" width="249" height="17" viewBox="0 0 249 17" fill="none">
                  <path
                    d="M1.5 16.0001C26.4689 5.1524 193.217 -2.00002 248 3.50006"
                    stroke="url(#paint0_linear_47_101)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_47_101"
                      x1="10.3914"
                      y1="14.1023"
                      x2="242.344"
                      y2="14.1023"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FEC200" />
                      <stop offset="0.340447" stop-color="#BEF393" />
                      <stop offset="0.646993" stop-color="#7A46B6" />
                      <stop offset="1" stop-color="#EF6DF5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </span>{' '}
          </span>
        </h2>
      </div>
      <div className="  grid grid-cols-1 gap-6 rounded-3xl  border border-t-white bg-transparent px-3  py-6 dark:border-[#ffffff1a] dark:bg-[#15131D] md:grid-cols-2 lg:grid-cols-3 ">
        {loading ? ( // Show loading state
          <p>Loading...</p>
        ) : (
          blogsData
            .slice()
            .sort((a: any, b: any) => {
              const bdate: any = new Date(b.updated_at);
              const adate: any = new Date(a.updated_at);
              const d: any = bdate - adate;
              return d;
            })
            .map((blog: any, index) => (
              <div key={index} className="overflow-hidden rounded-2xl border border-gray-400 bg-transparent  p-3 shadow-lg ">
                <Image src={blog.feature_image} alt={blog.title} width={400} height={250} layout="responsive" className="rounded-2xl" />
                <div className="py-4">
                  <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">
                    {blog.title.split('').slice(0, 42).join('') + '...'}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{blog.excerpt.split(' ').slice(0, 15).join(' ') + '...'}</p>
                </div>
                <div className=" flex justify-between py-4">
                  <a
                    href="#_"
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-4 px-5 py-3 font-medium text-indigo-600 shadow-xl transition duration-300 ease-out hover:ring-1 hover:ring-purple-500"
                  >
                    <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                    <span className="ease absolute bottom-0 right-0 mb-32 mr-4 block h-64 w-64 origin-bottom-left translate-x-24 rotate-45 transform rounded-full bg-pink-500 opacity-30 transition duration-500 group-hover:rotate-90"></span>
                    <span className="relative text-white">Read More</span>
                  </a>
                  <Chip
                    className="bg-[#ffffff1a] text-gray-600 dark:text-gray-400"
                    label={format(new Date(blog.updated_at), 'dd-MM-yyyy')}
                  />
                </div>
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default Blogs;
