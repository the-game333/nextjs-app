import Search from '@mui/icons-material/Search';
import FooterPage from 'components/landingpage/Footer';
import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import AppBar from 'ui-component/extended/AppBar';
import useConfig from 'hooks/useConfig';
import Link from 'next/link';

const AppCard = (props: { logo: string; heading: string; desc: string; url: string; color: string }) => {
  return (
    <Link
      href={{
        pathname: props.url,
        query: { id: props.url.split('/').pop() }
      }}
    >
      {/* <a> */}
      <div className="min-h-[12rem] rounded-md border border-slate-500 bg-[#0E0C15] p-4 text-white">
        <img src={props.logo} alt={props.heading} className={`h-12 ${props.color} p-2`} />
        <p className="text-md mt-4 font-semibold">{props.heading}</p>
        <p className="text-sm text-slate-400 ">{props.desc}</p>
      </div>
      {/* </a> */}
    </Link>
  );
};

const Data: {
  logo: string;
  heading: string;
  desc: string;
  url: string;
  category: 'all' | 'programming' | 'translate' | 'hr' | 'writing' | 'assistant';
  color: 'bg-yellow-500' | 'bg-blue-500' | 'bg-orange-400' | 'bg-green-400';
}[] = [
  {
    logo: '/assets/images/apps/sql.png',
    heading: 'SQL Creator',
    desc: 'Write SQL from natural language by pasting in your schema with the request.',
    url: '/apps/sentiment-analyze',
    category: 'programming',
    color: 'bg-orange-400'
  },
  {
    logo: '/assets/images/apps/developer.png',
    heading: 'Developer Relation Advisor',
    desc: 'I am Developer Relations Consultant Tom. I can research software packages and their available documentation.',
    url: '/apps/text-summarize',
    category: 'programming',
    color: 'bg-green-400'
  },
  {
    logo: '/assets/images/apps/code.png',
    heading: 'Code Interpreter',
    desc: 'Code interpreter, clarifying the syntax and semantics of the code.',
    url: '/apps/entity-extract',
    category: 'programming',
    color: 'bg-blue-500'
  },
  {
    logo: '/assets/images/apps/languages.png',
    heading: 'Translate Assistant',
    desc: 'A multilingual translator that provides translation capabilities in multiple languages. Input the text you need to translate and select the target language.',
    url: '/apps/data-transformer',
    category: 'translate',
    color: 'bg-blue-500'
  },
  {
    logo: '/assets/images/apps/employee.png',
    heading: 'Employee Training Plan',
    desc: 'Employee Training Program Assistant',
    url: '/apps/video-summerize',
    category: 'hr',
    color: 'bg-orange-400'
  },
  {
    logo: '/assets/images/apps/interviewer.png',
    heading: 'AI FrontEnd Interviewer',
    desc: 'A simulated front-end interviewer that tests the skill level of front-end development through questioning.',
    url: '/apps/sql-write',
    category: 'hr',
    color: 'bg-blue-500'
  },
  {
    logo: '/assets/images/apps/copy.png',
    heading: 'Social Media Copy-Writing Assistant',
    desc: 'Write promotional copy for multiple social media platforms for you.',
    url: '/apps/text-classification',
    category: 'writing',
    color: 'bg-yellow-500'
  },
  {
    logo: '/assets/images/apps/meeting.png',
    heading: 'Meeting Minutes & Summary',
    desc: 'Generate Meeting Minutes',
    url: '/apps/language-translate',
    category: 'writing',
    color: 'bg-green-400'
  },
  {
    logo: '/assets/images/apps/planning.png',
    heading: 'Project Planner Agent',
    desc: 'Project Plan Writing',
    url: '/apps/sql-write',
    category: 'writing',
    color: 'bg-blue-500'
  },
  {
    logo: '/assets/images/apps/consultant.png',
    heading: 'Strategic Consultant Expert',
    desc: 'I can answer your questions related to strategic marketing.',
    url: '/apps/text-classification',
    category: 'assistant',
    color: 'bg-yellow-500'
  },
  {
    logo: '/assets/images/apps/advisor.png',
    heading: 'Legal Advisor',
    desc: 'As your legal advisor, I will answer your legal questions for you.',
    url: '/apps/language-translate',
    category: 'assistant',
    color: 'bg-green-400'
  },
  {
    logo: "/assets/images/apps/seo.png",
    heading: "Fully SEO Optimized Article including FAQ's",
    desc: "Fully SEO Optimized Article including FAQ's",
    url: "/apps/language-translate",
    category: "assistant",
    color:"bg-green-400"
  }
];

const CategoriesBar: { name: string; value: string; color: string }[] = [
  {
    name: 'All Categories',
    value: 'all',
    color: 'red-500'
  },
  {
    name: 'Programming',
    value: 'programming',
    color: 'blue-400'
  },
  {
    name: 'Translate',
    value: 'translate',
    color: 'green-500'
  },
  {
    name: 'HR',
    value: 'hr',
    color: 'yellow-500'
  },
  {
    name: 'Writing',
    value: 'writing',
    color: 'orange-500'
  },
  {
    name:"Assistant",
    value: "assistant",
    color: 'blue-400'
  }
];

const index = () => {
  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState('all');
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };
  const { onChangeMenuType } = useConfig();
  useEffect(() => {
    onChangeMenuType('light');
  }, []);
  return (
    <div className="min-h-screen bg-[#0E0C15]">
      <AppBar background={'transparent'} />
      <div className="mx-auto mt-24 max-w-5xl px-4">
        <h1 className="my-4 text-center text-2xl font-semibold  text-[#FFFFFF]">Explore Apps</h1>
        <hr className="opacity-40" />
        {/* Categories */}
        <div className="my-3  justify-between absolute">
          <div className=" gap-3">
            {CategoriesBar.map((cat, index) => (
              <button key={index} onClick={() => setCategory(cat.value)} className='px-2' >
                <p className={`${category === cat.value ? 'font-semibold text-white' : 'font-semibold text-slate-500'} text-xs md:text-sm`}>
                  {cat.name}
                </p>
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
        <p
          style={{
            height: '30%',
            width: '10%',
            top: '20%',
            right: '22%',
            transform: 'translateX(50%)',
            position: 'absolute',
            borderRadius: '582px',
            background: 'linear-gradient(180deg, rgba(99, 35, 196, 0.00) 0%, #FE851D 100%)',
            filter: 'blur(90px)'
          }}
        ></p>
        <p
          style={{
            height: '20%',
            width: '10%',
            bottom: '10%',
            left: '10%',
            transform: 'translateX(50%)',
            position: 'absolute',
            borderRadius: '582px',
            background: 'linear-gradient(180deg, rgba(99, 35, 196, 0.00) 0%, #FE851D 100%)',
            filter: 'blur(120px)'
          }}
        ></p>
        {/* Apps */}
        <div className="my-12 pt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3  ">
          {Data.map((app, index) =>
            category === 'all' ? (
              <AppCard
                logo={app.logo}
                desc={app.desc}
                heading={app.heading}
                // url={'https://calendly.com/infrahive/infrahive-demo'}
                url={""}
                key={index}
                color={app.color}
              />
            ) : (
              category === app.category && (
                <AppCard
                  logo={app.logo}
                  desc={app.desc}
                  heading={app.heading}
                  url={''}
                  key={index}
                  color={app.color}
                />
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
