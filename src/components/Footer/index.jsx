import Image from 'next/image';
import Input from '../Input';
import Button from '../Button';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full py-12 bg-black-700 text-gray-400 flex flex-col gap-16 items-center justify-center">
      <Image
        src="/assets/logo-white.png"
        alt="Dial Radio"
        width={231}
        height={110}
        className="object-cover aspect-auto"
      />
      <form className="w-full flex items-center justify-center gap-4 flex-wrap md:flex-nowrap">
        <Input type="email" name="email" placeholder="Your email" />
        <Button type="submit">Get early access</Button>
      </form>

      <div className="w-full md:w-3/5 flex flex-col md:flex-row gap-4 md:gap-12 justify-center items-center font-bold">
        <Link target="_blank" href="https://www.twitter.com/dial-radio">
          Twitter
        </Link>
        <Link target="_blank" href="https://www.instagram.com/dial-radio">
          Instagram
        </Link>
        <Link target="_blank" href="https://www.instagram.com/dial-radio">
          Contact
        </Link>
      </div>

      <p className="text-detail-blue font-normal text-base tracking-tight">
        © Dial 2023 - designed by Norman Silva
      </p>
    </footer>
  );
};
export default Footer;
