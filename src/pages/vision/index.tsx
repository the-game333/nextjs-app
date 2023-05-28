import FooterPage from 'components/landingpage/Footer'
import React from 'react'
import AppBar from 'ui-component/extended/AppBar'

const Card = (props:{heading:string,desc:string,key:number}) => {
    return(
        <div key={props.key} className='p-6 bg-white text-black rounded-lg'>
            <h2 className='text-5xl'>{props.heading}</h2>
            <p className='text-xl leading-relaxed'>{props.desc}</p>
        </div>
    )
}


const index = () => {
    const CardData = [
        {
            heading: "Safe",
            desc: "Our goal is to build AI that doesn’t lie, mislead or harm end-users. The guardrails to prevent AI from having undesirable outcomes are important to our mission mission. All decisions at WorkHack are shaped by our estimation of risk for our customers."
        },
        {
            heading: "Controllable",
            desc: "We believe the pre-condition for large-scale AI deployment is a reasonable degree of explainability and predictability. WorkHack is building tools to allow customers to control the range of topics, assumption boundaries and brand-specific preferences. "
        },
        {
            heading: "Thoughtful",
            desc: "Human interactions are complex and our bet is to help AI understand the nuances of different behaviours beyond deep learning and LLMs. WorkHack layer combines strategic reasoning and natural language processing to teach autonomous agents achieve end-goals."
        },
    ]
  return (
    <div>
        <AppBar />
        {/* Vision */}
        <div className='w-full py-24'>
            <div className='max-w-3xl mx-auto'>
            <h1 className='text-5xl'>vision</h1>
            <p className='text-xl leading-relaxed'>WorkHack is a language AI company focused on building generative AI products with significant delta over current behaviours and tools. We are a layer between Large Language Models and commercial applications with AWS-like guarantees.</p>
            </div>
        </div>

        {/* Cards */}
        <div  className='w-full py-24'>
            <div className='grid grid-cols-2 max-w-5xl mx-auto gap-6'>
                {CardData.map((card,index) => (
                    <Card heading={card.heading} desc={card.desc} key={index}/>
                ))}
            </div>
        </div>

        <FooterPage />
    </div>
  )
}

export default index