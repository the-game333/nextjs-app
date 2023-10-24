import FormatColorTextRounded from '@mui/icons-material/FormatColorTextRounded';
import Image from 'next/image';

const FooterLinks = [
  { name: '', path: '#' },
  { name: 'Privacy Policy', path: '/privacy-policy' },
  { name: 'Terms & Conditions', path: '/terms-and-conditions' },
  { name: 'Contact Now', path: '/contact' }
];

const SocialMedia = [
  { path: '/assets/images/twitter.png', alt: 'Twitter', link: 'https://twitter.com/infrahive' },
  { path: '/assets/images/linkedin.png', alt: 'LinkedIn', link: 'https://linkedin.com/company/infrahive' }
];

const Footer = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between w-full px-12 py-4 mx-auto">
        <div className="w-full mb-4 text-center md:mb-0 md:w-1/2 md:text-left lg:w-1/3">
       {true &&    <Image width={255} height={80} src="/footer/InfraHiveLogo.svg" alt="InfraHiveLogo" />}
        </div>
        <div className="flex flex-wrap justify-center w-full gap-4 md:w-1/2 md:justify-end md:gap-8 lg:w-2/3 lg:gap-12 xl:gap-16">
          {FooterLinks.map((item) => (
            <a key={item.name} href={item.path} className="font-medium text-white">
              {item.name}
            </a>
          ))}
        </div>
      </div>

      <hr className="w-full mx-auto my-4 border-t" />
      <div className="flex flex-wrap items-center justify-between w-full px-12 py-4 mx-auto">
        <div className="w-full mb-4 text-center text-white md:mb-0 md:w-1/2 md:pl-10 md:text-left lg:w-1/3 lg:pl-10">
          <span>Aivinya Inc. © {new Date().getFullYear()}</span>
        </div>
        <div className="flex flex-wrap justify-center w-full gap-4 text-white md:w-1/2 md:justify-end md:gap-8 lg:w-2/3">
          {SocialMedia.map((item, idx) => (
            <a key={idx} target="_blank" href={item.link} className="text-white" style={{ textDecoration: 'none', color: 'white' }}>
             {item.path &&  <Image className="text-white" key={item.alt} width={24} height={24} src={item.path} alt={item.alt} />}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
