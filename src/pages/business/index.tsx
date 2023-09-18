import Awards from 'components/business-page/Awards';
import Contact from 'components/business-page/Contact';
import Hero from 'components/business-page/Hero';
// import HowTo from 'components/business-page/HowTo';
import Our from 'components/business-page/Our';
// import Products from 'components/business-page/Products';
import NewProducts from 'components/business-page/NewProducts';
import Footer from 'components/landingpage/Footer';
import React from 'react';
import AppBar from 'ui-component/extended/AppBar';

const Container = ({ children }: { children: React.ReactNode }) => <div className="max-w-6xl px-6 mx-auto sm:px-12 ">{children}</div>;

export default function Businesses() {
  return (
    <React.Fragment>
      <main className="w-full text-white bg-hero">
        <div className="bg-hero-overlay">
          <AppBar background="transparent" />
          <Container>
            <Hero />
          </Container>
        </div>
        <div className="pt-16 bg-white">
          <Container>
            <Our />
          </Container>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,224L60,213.3C120,203,240,181,360,176C480,171,600,181,720,186.7C840,192,960,192,1080,170.7C1200,149,1320,107,1380,85.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
        <Container>
          <NewProducts />
          {/* <Products /> */}
          {/* <HowTo /> */}
          <Awards />
          <Contact />
        </Container>
        <Footer />
      </main>
    </React.Fragment>
  );
}
