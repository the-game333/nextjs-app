import React from 'react';
import AppBar from 'ui-component/extended/AppBar';
import Footer from 'components/landingpage/Footer';

type indexProps = {};

const Container = ({ children }: { children: React.ReactNode }) => <div className="max-w-6xl px-6 mx-auto sm:px-12 ">{children}</div>;

const index: React.FC<indexProps> = () => {
  return (
    <main className="text-white bg-hero">
      <AppBar background="transparent" />
      <Container>
        <div className="my-12">
          <h1 className="text-4xl font-extrabold lg:text-6xl md:text-5xl">Privacy Policy</h1>
          <p className="my-12">Last Updated: September 19, 2023</p>
        </div>
        <h2 className="my-6 text-3xl font-bold">Introduction</h2>
        <p>
          This Privacy Policy describes how InfraHive (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects, uses, and discloses your personal information when
          you access or use our services. We understand that your privacy is important, and we are committed to protecting your personal
          information.
        </p>
        <h2 className="my-6 text-3xl font-bold">Information We Collect</h2>
        <p>
          When you use our platform, we may collect the following types of information:
          <br />
          <br />
          <strong>Account Information:</strong> If you choose to sign up or register using your Google account or email, we may collect
          basic account information, such as your name, email address, and profile picture, as provided by Google.
          <br />
          <br />
          <strong>Usage Information:</strong> We may collect information about how you use our platform, such as your interactions,
          activities, and preferences while using our
        </p>
        <h2 className="my-6 text-3xl font-bold">How We Use Your Information</h2>
        <p>
          We use the information we collect for the following purposes:
          <br />
          <br />
          <strong>Account Creation:</strong> To create and manage your account, verify your identity, and provide you with access to our
          platform.
          <br />
          <br />
          <strong>Improvement:</strong> To enhance and personalize your experience on our platform, including providing tailored content and
          recommendations.
          <br />
          <br />
          <strong>Communication:</strong> To communicate with you, including responding to your inquiries and providing important updates
          related to our services.
        </p>
        <h2 className="my-6 text-3xl font-bold">Data Security</h2>
        <p>
          We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
          However, please be aware that no method of data transmission over the internet is entirely secure, and we cannot guarantee the
          absolute security of your data.
        </p>
        <h2 className="my-6 text-3xl font-bold">Sharing Your Information</h2>
        <p>
          We do not sell or rent your personal information to third parties. However, we may share your information with trusted third-party
          service providers who assist us in operating our platform, subject to confidentiality agreements.
        </p>
        <h2 className="my-6 text-3xl font-bold">Your Choices</h2>
        <p>
          You have the right to access, correct, or delete your personal information. You can also choose to disable cookies in your web
          browser. However, please note that certain features of our platform may not function correctly if cookies are disabled.
        </p>

        <h2 className="my-6 text-3xl font-bold">Changes to this Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or
          regulatory reasons. We will notify you of any significant changes by posting an updated version of this Privacy Policy on our
          platform.
        </p>
        <h2 className="my-6 text-3xl font-bold">Contact Us</h2>
        <p>
          If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us at
          team@infrahive.io
        </p>
      </Container>
      <Footer />
    </main>
  );
};
export default index;
