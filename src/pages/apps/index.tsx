import { Search } from '@mui/icons-material'
import FooterPage from 'components/landingpage/Footer'
import React, { useState } from 'react'
import AppBar from 'ui-component/extended/AppBar'

const AppCard = (props:{logo:string, heading:string, desc: string, url: string}) => {
    return (    <a>
            <div className='p-4 border border-slate-500 rounded-md min-h-[12rem] bg-black text-white'>
                <img src={props.logo} alt={props.heading} className='h-12 bg-blue-400 p-2'/>
                <p className='text-md font-semibold mt-4'>{props.heading}</p>
                <p className='text-slate-400 text-sm '>{props.desc}</p>
            </div>
        </a>
    )
}

const Data:{logo:string, heading:string, desc: string, url: string}[] = [
    {
        logo: "https://airops-production.s3.amazonaws.com/hzyc6uxnfflt18rkkrw10uswqmmn?response-content-disposition=inline%3B%20filename%3D%22recipes-images-52.png%22%3B%20filename%2A%3DUTF-8%27%27recipes-images-52.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4IU6TYBBXOSEJ2XP%2F20230614%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230614T004211Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=7436b0bf1c292425864c66ae2a7bf31d52472aabe662049c0acc0037a77b0d59",
        heading: "Sentiment Analyze",
        desc: "Assess the sentiment of any text as positive or negative.",
        url: "/app/sentiment"
    },
    {
        logo: "https://airops-production.s3.amazonaws.com/c9yv54o2k78i0s2efp0apunapp4s?response-content-disposition=inline%3B%20filename%3D%22recipes-images-1125.png%22%3B%20filename%2A%3DUTF-8%27%27recipes-images-1125.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4IU6TYBBXOSEJ2XP%2F20230614%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230614T004211Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=d1bbd70e3b924556a4a1fff75f24c4205e3f7972b3e813e55e182c3a60b527a4",
        heading: "Text Summarize",
        desc: "Summarize any text, exactly how you need it.",
        url: "/app/text"
    },
    {
        logo: "https://airops-production.s3.amazonaws.com/pi6646if0jq3j0no4r2px4th6we4?response-content-disposition=inline%3B%20filename%3D%22recipes-images-55.png%22%3B%20filename%2A%3DUTF-8%27%27recipes-images-55.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4IU6TYBBXOSEJ2XP%2F20230614%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230614T004712Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=102da3a131d5680854e71dfbe3e9ecca51a5fa50dbee71facdce5b05cb0af106",
        heading: "Entity Extract",
        desc: "Detect, extract, and count relevant keywords and phrases from text data",
        url: "/app/entity-extract"
    },
    {
        logo: "https://airops-production.s3.amazonaws.com/tp3wnbi2udzsuw73gv2w5d38gkga?response-content-disposition=inline%3B%20filename%3D%22recipes-images-72.png%22%3B%20filename%2A%3DUTF-8%27%27recipes-images-72.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4IU6TYBBXOSEJ2XP%2F20230614%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230614T004712Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=60b4c7d092990736b4084bbb4f0b5469543fc429244bd7077f1bbbfef8c1a3dc",
        heading: "Data Transformer",
        desc: "A general purpose interface to apply a function to a set of points.",
        url: "/app/data-transformer"
    },
    {
        logo: "https://airops-production.s3.amazonaws.com/3qov99ire5h78yghsueq83zymdx1?response-content-disposition=inline%3B%20filename%3D%22recipes-images-2621.png%22%3B%20filename%2A%3DUTF-8%27%27recipes-images-2621.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4IU6TYBBXOSEJ2XP%2F20230614%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230614T004712Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=4e4d838c3e76f7d4da400127f56bfa1b42052aebf31c6dbd6534fe4d0fa3c9b3",
        heading: "Video Summarize",
        desc: "Summarize any video or audio file from a Google Drive URL",
        url: "/app/video-summerizer"
    },
    {
        logo: "https://airops-production.s3.amazonaws.com/leagu3xwdnh64hgbnsb4fwl95ckz?response-content-disposition=inline%3B%20filename%3D%22recipes-images-15.png%22%3B%20filename%2A%3DUTF-8%27%27recipes-images-15.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4IU6TYBBXOSEJ2XP%2F20230614%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230614T004712Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=5424ac6eea843735ed9a60fc92b87022d8271fec1e4cd30399dd3edd5c686544",
        heading: "SQL Write with Pasted Schema",
        desc: "Write SQL from natural language by pasting in your schema with the request.",
        url: "/app/sql-writer"
    },
    {
        logo: "https://airops-production.s3.amazonaws.com/survf9zghks25imkwv700419ekg7?response-content-disposition=inline%3B%20filename%3D%22recipes-images-684.png%22%3B%20filename%2A%3DUTF-8%27%27recipes-images-684.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4IU6TYBBXOSEJ2XP%2F20230614%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230614T005214Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=fdaf6a144b3ca3d9d353112523e1caab3a6054e88efdeb50e64b929feb1efde8",
        heading: "Text Classification",
        desc: "Craft any type of content.",
        url: "/app/text-classification"
    },
    {
        logo: "https://airops-production.s3.amazonaws.com/e6t3r84fllx01l6n0uoboncsca3e?response-content-disposition=inline%3B%20filename%3D%22recipes-images-56.png%22%3B%20filename%2A%3DUTF-8%27%27recipes-images-56.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4IU6TYBBXOSEJ2XP%2F20230614%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230614T005214Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=8e4768f1e1ed21966b69e94e92d2ba563ec9830c12628d3ae278bb1998b8655f",
        heading: "Language Translate",
        desc: "Translate text from any language to any language.",
        url: "/app/language-translate"
    },
]


const index = () => {

    const [searchText, setSearchText] = useState('');

    const handleSearch = (event:React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    }
  return (
    <div>
        <AppBar />
            <div className='max-w-5xl mx-auto mt-24'>
                <h1 className='text-center text-2xl font-semibold my-4'>Explore Apps</h1>
                <hr className='opacity-40'/>
                {/* Categories */}
                <div className='flex justify-between my-4'>
                    <div className='flex gap-4'>
                    <p className='text-white '>All Categories</p>
                    <p className='text-slate-600'>Data</p>
                    <p className='text-slate-600'>Text Analysis</p>
                    <p className='text-slate-600'>Text Generation</p>
                    <p className='text-slate-600'>Custom</p>
                    </div>

                    <div className='flex border rounded-full border-slate-500'>
                        <input placeholder='Search' value={searchText} onChange={handleSearch} className='bg-transparent px-2 rounded-l-full text-slate-500'/>
                        <Search className='text-slate-500'/>
                    </div>
                </div>

                {/* Apps */}
                <div className='grid grid-cols-3 gap-4 my-12'>
                    {Data.map((app,index) => (
                        <AppCard  logo={app.logo} desc={app.desc} heading={app.heading} url={app.url} key={index}/>
                    ))}
                </div>
            </div>
        <FooterPage />
    </div>
  )
}

export default index