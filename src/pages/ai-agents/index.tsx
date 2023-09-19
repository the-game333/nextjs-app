import AppBar from 'ui-component/extended/AppBar';
import Accordian from 'components/ai-agents/Accordian';
import React from 'react';
import Footer from 'components/landingpage/Footer';
import GetStarted from 'components/ai-agents/GetStarted';
import TrustedBy from 'components/ai-agents/TrustedBy';
import How from 'components/ai-agents/How';
import Hero from 'components/ai-agents/Hero';
import Features from 'components/ai-agents/Features';

const Container = ({ children }: { children: React.ReactNode }) => <div className="max-w-6xl px-6 mx-auto sm:px-12 ">{children}</div>;

export default function AiAgents() {
  return (
    <React.Fragment>
      <main className="text-white bg-hero">
        <AppBar background={'transparent'} />
        <Container>
          <Hero />
          <Features />
          <How />
          {/* <TrustedBy /> */}
          <GetStarted />
          <Accordian />
        </Container>
        <Footer />
      </main>
    </React.Fragment>
  );
}
