import { Search } from '@mui/icons-material';
import FooterPage from 'components/landingpage/Footer';
import React, { useState } from 'react';
import AppBar from 'ui-component/extended/AppBar';

const AppCard = (props: { logo: string; heading: string; desc: string; url: string; color: string }) => {
  return (
    <a href={props.url}>
      <div className="p-4 border border-slate-500 rounded-md min-h-[12rem] bg-black text-white">
        <img src={props.logo} alt={props.heading} className={`h-12 ${props.color} p-2`} />
        <p className="text-md font-semibold mt-4">{props.heading}</p>
        <p className="text-slate-400 text-sm ">{props.desc}</p>
      </div>
    </a>
  );
};

const Data: {
  logo: string;
  heading: string;
  desc: string;
  url: string;
  category: 'all' | 'data' | 'analysis' | 'generation' | 'custom';
  color: 'bg-yellow-500' | 'bg-blue-500' | 'bg-orange-400' | 'bg-green-400';
}[] = [
  {
    logo: 'https://airops-production.s3.amazonaws.com/hzyc6uxnfflt18rkkrw10uswqmmn?response-content-disposition=inline%3B%20filename%3D%22recipes-images-52.png%22%3B%20filename%2A%3DUTF-8%27%27recipes-images-52.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4IU6TYBBXOSEJ2XP%2F20230616%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230616T131330Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=b20a816e35814ed5854db96e90aa5c3f1084340a86316b80190006651a096fca',
    heading: 'Sentiment Analyze',
    desc: 'Assess the sentiment of any text as positive or negative.',
    url: '/apps/sentiment-analyze',
    category: 'custom',
    color: 'bg-orange-400'
  },
  {
    logo: 'https://airops-production.s3.amazonaws.com/c9yv54o2k78i0s2efp0apunapp4s?response-content-disposition=inline%3B%20filename%3D%22recipes-images-1125.png%22%3B%20filename%2A%3DUTF-8%27%27recipes-images-1125.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4IU6TYBBXOSEJ2XP%2F20230616%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230616T131330Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=592cb50a3b2898426966aaed522134cdaa3fa808161b8f9c2e5b7fcd1835fc05',
    heading: 'Text Summarize',
    desc: 'Summarize any text, exactly how you need it.',
    url: '/apps/text-summarize',
    category: 'analysis',
    color: 'bg-green-400'
  },
  {
    logo: 'https://airops-production.s3.amazonaws.com/pi6646if0jq3j0no4r2px4th6we4?response-content-disposition=inline%3B%20filename%3D%22recipes-images-55.png%22%3B%20filename%2A%3DUTF-8%27%27recipes-images-55.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4IU6TYBBXOSEJ2XP%2F20230616%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230616T131330Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=68d3a45dfab20df2236bd9b1ec97286be255d0f9ff986bb807428d4a9f646c91',
    heading: 'Entity Extract',
    desc: 'Detect, extract, and count relevant keywords and phrases from text data',
    url: '/apps/entity-extract',
    category: 'data',
    color: 'bg-blue-500'
  },
  {
    logo: 'https://airops-production.s3.amazonaws.com/tp3wnbi2udzsuw73gv2w5d38gkga?response-content-disposition=inline%3B%20filename%3D%22recipes-images-72.png%22%3B%20filename%2A%3DUTF-8%27%27recipes-images-72.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4IU6TYBBXOSEJ2XP%2F20230616%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230616T131330Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=96f5c9c1241586162291532416f98c10f165b71e6133128ecd582d892a6ac29c',
    heading: 'Data Transformer',
    desc: 'A general purpose interface to apply a function to a set of points.',
    url: '/apps/data-transformer',
    category: 'data',
    color: 'bg-blue-500'
  },
  {
    logo: 'https://airops-production.s3.amazonaws.com/3qov99ire5h78yghsueq83zymdx1?response-content-disposition=inline%3B%20filename%3D%22recipes-images-2621.png%22%3B%20filename%2A%3DUTF-8%27%27recipes-images-2621.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4IU6TYBBXOSEJ2XP%2F20230616%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230616T131330Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=93fc9840a8b44c112d0e0b470e0fb2008a0387dbdbd5b0f76ec3d54b9e4b5374',
    heading: 'Video Summarize',
    desc: 'Summarize any video or audio file from a Google Drive URL',
    url: '/apps/video-summerize',
    category: 'custom',
    color: 'bg-orange-400'
  },
  {
    logo: 'https://airops-production.s3.amazonaws.com/leagu3xwdnh64hgbnsb4fwl95ckz?response-content-disposition=inline%3B%20filename%3D%22recipes-images-15.png%22%3B%20filename%2A%3DUTF-8%27%27recipes-images-15.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4IU6TYBBXOSEJ2XP%2F20230616%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230616T131330Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=cdd2680badf56b8533b79bad7434877903a47b14c055f9eae3832ccfbe485b2f',
    heading: 'SQL Write with Pasted Schema',
    desc: 'Write SQL from natural language by pasting in your schema with the request.',
    url: '/apps/sql-write',
    category: 'data',
    color: 'bg-blue-500'
  },
  {
    logo: 'https://airops-production.s3.amazonaws.com/fer2xkaun8dkyba3n2mj6mep36t9?response-content-disposition=inline%3B%20filename%3D%22recipes-images-54.png%22%3B%20filename%2A%3DUTF-8%27%27recipes-images-54.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4IU6TYBBXOSEJ2XP%2F20230616%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230616T131330Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=7574645019a1f25c15453f1e6243973833858da153cb60b14a18e69cbc32be63',
    heading: 'Text Classification',
    desc: 'Craft any type of content.',
    url: '/apps/text-classification',
    category: 'generation',
    color: 'bg-yellow-500'
  },
  {
    logo: 'https://airops-production.s3.amazonaws.com/e6t3r84fllx01l6n0uoboncsca3e?response-content-disposition=inline%3B%20filename%3D%22recipes-images-56.png%22%3B%20filename%2A%3DUTF-8%27%27recipes-images-56.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4IU6TYBBXOSEJ2XP%2F20230616%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230616T131330Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=ad98f9432190ae56e36ffba4722fa3a568a4215b4b7e49749390d688fff4709f',
    heading: 'Language Translate',
    desc: 'Translate text from any language to any language.',
    url: '/apps/language-translate',
    category: 'analysis',
    color: 'bg-green-400'
  }
];

const CategoriesBar: { name: string; value: string; color: string }[] = [
  {
    name: 'All Categories',
    value: 'all',
    color: 'red-500'
  },
  {
    name: 'Data',
    value: 'data',
    color: 'blue-400'
  },
  {
    name: 'Text Analysis',
    value: 'analysis',
    color: 'green-500'
  },
  {
    name: 'Text Generation',
    value: 'generation',
    color: 'yellow-500'
  },
  {
    name: 'Custom',
    value: 'custom',
    color: 'orange-500'
  }
];

const index = () => {
  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState('all');
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };
  return (
    <div>
      <AppBar />
      <div className="max-w-5xl mx-auto mt-24 px-4">
        <h1 className="text-center text-2xl font-semibold my-4">Explore Apps</h1>
        <hr className="opacity-40" />
        {/* Categories */}
        <div className="flex justify-between my-4">
          <div className="flex gap-4">
            {CategoriesBar.map((cat, index) => (
              <button onClick={() => setCategory(cat.value)}>
                <p className={`${category === cat.value ? 'text-white' : 'text-slate-500'}`}>{cat.name}</p>
              </button>
            ))}
          </div>

          {/* <div className="flex border rounded-full border-slate-500">
            <input
              placeholder="Search"
              value={searchText}
              onChange={handleSearch}
              className="bg-transparent px-2 rounded-l-full text-slate-500"
            />
            <Search className="text-slate-500" />
          </div> */}
        </div>

        {/* Apps */}
        <div className="grid grid-cols-3 gap-4 my-12">
          {Data.map((app, index) =>
            category === 'all' ? (
              <AppCard logo={app.logo} desc={app.desc} heading={app.heading} url={app.url} key={index} color={app.color} />
            ) : (
              category === app.category && (
                <AppCard logo={app.logo} desc={app.desc} heading={app.heading} url={app.url} key={index} color={app.color} />
              )
            )
          )}
        </div>
      </div>
      <FooterPage />
    </div>
  );
};

export default index;
