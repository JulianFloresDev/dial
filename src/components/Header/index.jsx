import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex w-full py-4 items-center justify-center">
      <Image
        priority
        src={'/assets/logo-dial.svg'}
        alt="Dial"
        width={112}
        height={68}
      />
    </header>
  );
};

export default Header;
