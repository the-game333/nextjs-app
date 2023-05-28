
import FooterPage from 'components/landingpage/Footer';
import React from 'react';
import AppBar from 'ui-component/extended/AppBar';

const index = () => {
  return (
    <div>
        <AppBar />
      <div className='max-w-2xl mx-auto py-24 text-white'>
        <h1 className='text-5xl text-infra-yellow'>join us</h1>
        <p className='text-xl leading-relaxed mt-12'>
          WorkHack is building on the frontiers of generative AI. We are looking for folks who are as excited as we are about building
          products with high impact on human productivity and business outcomes. 
          <br/><br/>
          We’re well capitalised to compete in an exciting large
          market. 
          <br/><br/>
          Starting with conversations as a medium, WH wants to be the product layer between Large Language Models and commercial
          applications making it easier for companies to utilise the generative AI capabilities by building goal-driven safe abstractions.
          <br/><br/>
          We’ve processed over 2 million users for our customers— being one of the first companies to put a Large Language Model for a
          complex end-user deployment. We are inventing newer applications of AI beyond code generation and copywriting. 
          <br/><br/>
          During all this,
          we’ve remained extremely lean. For most of our lifetime, we’ve functioned with 5 full-time teammates, and recently expanded to 10.
          Now growing to 15. 
          <br/><br/>
          3 AI Engineer - Ex-Genesys (NLP Researcher), Ex-Oriserve (built AI for e-commerce), Ex-Draup Data Scientist 
          <br/><br/>
          2
          Backend Engineers - Ex-head of engineering Damensch (tried to build an infra company), Ex-Circle Labs 
          <br/><br/>
          2 Full-stack Engineer - Our
          only early-stage bet, one of the best hires! Ex-Deepsource 
          <br/><br/>
          1 Conversation Designer 
          <br/><br/>
          2 Product Managers - Ex-Josh (ran a Healthy
          snacking company), Ex-Anar 
          <br/><br/>
          and the founder 🩳 
          <br/><br/>
          We operate with radical transparency and deeply value earnestness and intentionality
          in our teammates. Currently hiring for the following positions, in the order of priority— 
          <br/><br/>1 Frontend Engineer — Should have seen a
          minimum of a million user scale products, preferably enterprise B2B products. <br/><br/>2 Product Engineer with Backend Focus — Should have
          built, led and deployed products for a paid userbase of minimum 100k. <br/><br/>3 Chief of Staff — Helping the founder build a world-class
          org <br/><br/>4 AI Engineer — Research background with having worked on large scale AI applications <br/><br/>We love builders and hackers who’ve done
          interesting projects in the past. Tell us what we wouldn’t learn from your resume— email a@workhack.ai
        </p>
      </div>
      <FooterPage />
    </div>
  );
};

export default index;
