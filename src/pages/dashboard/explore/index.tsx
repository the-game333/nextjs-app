// material-ui
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Button, Divider, Grid, IconButton, InputBase, Paper } from '@mui/material';
// project imports
import { gridSpacing } from 'store/constant';
import Link from 'next/link';

// ==============================|| Default DASHBOARD ||============================== //

const AppCard = (props: { logo: string; heading: string; desc: string; url: string; color: string }) => {
  return (
    <Link href={props.url}>
      <div className="min-h-[12rem] cursor-pointer rounded-md border border-slate-200 bg-white p-4 text-black">
        <img src={props.logo} alt={props.heading} className={`h-12 ${props.color} p-2`} />
        <p className="text-md mt-4 font-semibold">{props.heading}</p>
        <p className="text-sm text-slate-400 ">{props.desc}</p>
      </div>
    </Link>
  );
};

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

const Data: {
  logo: string;
  heading: string;
  desc: string;
  url: string;
  category: 'all' | 'data' | 'analysis' | 'generation' | 'custom';
  color: 'bg-yellow-500' | 'bg-blue-500' | 'bg-orange-400' | 'bg-green-400';
}[] = [
  {
    logo: '/assets/images/apps/sentiment.png',
    heading: 'Sentiment Analyze',
    desc: 'Assess the sentiment of any text as positive or negative.',
    url: '/dashboard/explore/sentiment-analyze',
    category: 'custom',
    color: 'bg-orange-400'
  },
  {
    logo: '/assets/images/apps/text_summarise.png',
    heading: 'Text Summarize',
    desc: 'Summarize any text, exactly how you need it.',
    url: '/dashboard/explore/text-summarize',
    category: 'analysis',
    color: 'bg-green-400'
  },
  {
    logo: '/assets/images/apps/entity.png',
    heading: 'Entity Extract',
    desc: 'Detect, extract, and count relevant keywords and phrases from text data',
    url: '/dashboard/explore/entity-extract',
    category: 'data',
    color: 'bg-blue-500'
  },
  {
    logo: '/assets/images/apps/transformer.png',
    heading: 'Data Transformer',
    desc: 'A general purpose interface to apply a function to a set of points.',
    url: '/dashboard/explore/data-transformer',
    category: 'data',
    color: 'bg-blue-500'
  },
  {
    logo: '/assets/images/apps/video.png',
    heading: 'Video Summarize',
    desc: 'Summarize any video or audio file from a Google Drive URL',
    url: '/dashboard/explore/video-summerize',
    category: 'custom',
    color: 'bg-orange-400'
  },
  {
    logo: '/assets/images/apps/sql.png',
    heading: 'SQL Write with Pasted Schema',
    desc: 'Write SQL from natural language by pasting in your schema with the request.',
    url: '/dashboard/explore/sql-write',
    category: 'data',
    color: 'bg-blue-500'
  },
  {
    logo: '/assets/images/apps/text_classification.png',
    heading: 'Text Classification',
    desc: 'Craft any type of content.',
    url: '/dashboard/explore/text-classification',
    category: 'generation',
    color: 'bg-yellow-500'
  },
  {
    logo: '/assets/images/apps/translator.png',
    heading: 'Language Translate',
    desc: 'Translate text from any language to any language.',
    url: '/dashboard/explore/language-translate',
    category: 'analysis',
    color: 'bg-green-400'
  }
];

const Explore = () => {
  const theme = useTheme();
  const [selectedBtn, setSelectedBtn] = useState('All');
  const [cardList, useCardList] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  const [isLoading, setLoading] = useState(true);
  const [category, setCategory] = useState('all');

  const headerButtons = ['All', 'App', 'DDD', 'Test-child', 'ChatGPT', 'Image'];

  useEffect(() => {
    setLoading(false);
    console.log(cardList.length, 'length');
  }, []);
  return (
    <Grid container spacing={gridSpacing}>
      <div className="w-100 mx-auto mt-24 max-w-5xl px-4">
        <h1 className="my-4 text-center text-2xl font-semibold">Explore Apps</h1>
        <hr className="opacity-40" />
        {/* Categories */}
        <div className="w-100 my-4 flex justify-between">
          <div className="flex gap-4">
            {CategoriesBar.map((cat, index) => (
              <button onClick={() => setCategory(cat.value)}>
                <p className={`${category === cat.value ? 'text-black' : 'text-slate-500'}`}>{cat.name}</p>
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
        <div className="my-12 grid grid-cols-3 gap-4">
          {Data?.map((app, index) =>
            category === 'all' ? (
              <AppCard
                logo={app.logo}
                desc={app.desc}
                heading={app.heading}
                // url={'https://calendly.com/infrahive/infrahive-demo'}
                url={app.url}
                key={index}
                color={app.color}
              />
            ) : (
              category === app.category && (
                <AppCard
                  logo={app.logo}
                  desc={app.desc}
                  heading={app.heading}
                  url={'https://calendly.com/infrahive/infrahive-demo'}
                  key={index}
                  color={app.color}
                />
              )
            )
          )}
        </div>
      </div>
    </Grid>
  );
};
Explore.Layout = 'authGuard';
export default Explore;
