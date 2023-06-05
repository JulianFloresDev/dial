import { Poppins } from 'next/font/google';
import dynamic from 'next/dynamic';
import Button from '@/components/Button';
import Input from '@/components/Input';
const DeviceSections = dynamic(() => import('@/components/DeviceSections'));

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export default function Page() {
  return (
    <main
      className={`${poppins.className} min-h-screen w-full py-16 flex flex-col gap-9 items-center text-black-700 overflow-hidden`}
    >
      <section className="w-full pt-40 flex flex-col gap-9 items-center text-black-700">
        <h1 className="text-[84px] leading-none text-center font-bold -tracking-wide max-w-lg">
          Listen to what&apos;s new
        </h1>

        <p>Catch up and record what&apos;s happening with short sound clips.</p>

        <form className="w-full flex items-center justify-center gap-4 flex-wrap md:flex-nowrap">
          <Input type="email" name="email" placeholder="Your email" />
          <Button type="submit">Get early access</Button>
        </form>

        <DeviceSections />

        <h3 className="max-w-3xl py-16 font-semibold text-black-700 text-6xl text-center tracking-tight">
          Up to 5 minutes long. Disappear after 48 hours.{' '}
          <span className="text-detail-blue">Always fresh.</span>
        </h3>
      </section>
    </main>
  );
}
