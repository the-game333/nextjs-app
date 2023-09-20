import React from 'react';
import AppBar from 'ui-component/extended/AppBar';
import Footer from 'components/landingpage/Footer';

type indexProps = {};

const Container = ({ children }: { children: React.ReactNode }) => <div className="max-w-6xl px-6 mx-auto sm:px-12 ">{children}</div>;

const index: React.FC<indexProps> = () => {
  return (
    <>
      <main className="text-white bg-hero">
        <AppBar background="transparent" />
        <Container>
          <div className="my-12">
            <h1 className="text-4xl font-extrabold lg:text-6xl md:text-5xl">Terms & Conditions</h1>
            <p className="my-12">Last Updated: September 19, 2023</p>
          </div>
          <h2 className="my-6 text-3xl font-bold">Acceptance of Terms</h2>
          <p>
            By accessing or using InfraHive (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you agree to comply with and be bound by these Terms and Conditions. If
            you do not agree to these terms, please do not use our services.
          </p>
          <h2 className="my-6 text-3xl font-bold">Use of Services</h2>
          <p>
            <strong>Eligibility:</strong> You must be at least 16 years old to use our services. By using our services, you represent and
            warrant that you meet this eligibility requirement.
            <br />
            <br />
            <strong>Account Creation:</strong> To access certain features of our platform, you may be required to create an account. You are
            responsible for maintaining the confidentiality of your account information and for all activities that occur under your
            account.
          </p>
          <h2 className="my-6 text-3xl font-bold">User Content</h2>
          <p>
            <strong>User-Generated Content:</strong> Users may contribute content to our platform, such as comments, reviews, or other
            submissions. By submitting content, you grant us a non-exclusive, worldwide, royalty-free, perpetual, and irrevocable license to
            use, modify, adapt, and display your content for our purposes.
            <br />
            <br />
            <strong>Prohibited Content:</strong> You agree not to submit content that is unlawful, defamatory, harassing, abusive, or
            violates the rights of others. We reserve the right to remove or modify user-generated content that violates these terms.
            <br />
            <br />
            <strong>Privacy:</strong> Our platform's privacy practices are governed by our Privacy Policy, which you can review
            https://infrahive.io/privacy.
          </p>
          <h2 className="my-6 text-3xl font-bold">Intellectual Property</h2>
          <p>
            All content and materials on our platform, including text, graphics, logos, and software, are protected by intellectual property
            rights and are the property of InfraHive or its licensors. You may not use, reproduce, or distribute our content without our
            express permission.
          </p>
          <h2 className="my-6 text-3xl font-bold">Limitation of Liability</h2>
          <p>
            We disclaim all warranties and liability related to your use of our platform. We are not responsible for any damages, losses, or
            injuries arising from your use of our services.
          </p>
          <h2 className="my-6 text-3xl font-bold">Termination</h2>
          <p>
            We reserve the right to terminate or suspend your access to our platform at our discretion, without notice, for any reason,
            including if you violate these Terms and Conditions.
          </p>

          <h2 className="my-6 text-3xl font-bold">Changes to terms</h2>
          <p>
            We may update these Terms and Conditions from time to time. We will notify you of significant changes by posting an updated
            version on our platform.
          </p>
          <h2 className="my-6 text-3xl font-bold">Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us
            at team@infrahive.io
          </p>
        </Container>
        <Footer />
      </main>
    </>
  );
};
export default index;
