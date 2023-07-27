import { FormatColorTextRounded } from '@mui/icons-material';
import Image from 'next/image';

const FooterLinks = [
  { name: 'Legal', path: '#' },
  { name: 'Privacy', path: '#' },
  { name: 'Terms', path: '#' },
  { name: 'Cookies', path: '#' }
];

const SocialMedia = [
  { path: '/Footer/fb.svg', alt: 'Facebook' },
  { path: '/Footer/Discord.svg', alt: 'Discord' },
  { path: '/Footer/Twitter.svg', alt: 'Twitter' },
  { path: '/Footer/Medium.svg', alt: 'Medium' }
];

const Footer = () => {
  return (
    <>
      <div className="mx-auto flex w-full flex-wrap items-center justify-between px-12 py-4">
        <div className="mb-4 w-full text-center md:mb-0 md:w-1/2 md:text-left lg:w-1/3">
          <Image width={255} height={80} src="/Footer/InfraHiveLogo.svg" alt="InfraHiveLogo" />
        </div>
        <div className="flex w-full flex-wrap justify-center gap-4 md:w-1/2 md:justify-end md:gap-8 lg:w-2/3 lg:gap-12 xl:gap-16">
          {FooterLinks.map((item) => (
            <a key={item.name} href={item.path} className="font-medium">
              {item.name}
            </a>
          ))}
        </div>
      </div>

      <hr className="mx-auto my-4 w-full border-t" />
      <div className="mx-auto flex w-full flex-wrap items-center justify-between px-12 py-4">
        <div className="mb-4 w-full text-center md:mb-0 md:w-1/2 md:pl-10 md:text-left lg:w-1/3 lg:pl-10">
          <span>InfraHive © 2023</span>
        </div>
        <div className="flex w-full flex-wrap justify-center gap-4 md:w-1/2 md:justify-end md:gap-8 lg:w-2/3 lg:gap-12 xl:gap-16">
          {SocialMedia.map((item) => (
            <Image key={item.alt} width={24} height={24} src={item.path} alt={item.alt} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
