import { Poppins } from 'next/font/google';
import dynamic from 'next/dynamic';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Image from 'next/image';
const DeviceSections = dynamic(() => import('@/components/DeviceSections'));

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export default function Page() {
  return (
    <main
      className={`${poppins.className} min-h-screen w-full py-16 pb-52 px-2 md:px-0 flex flex-col gap-9 items-center text-black-700 overflow-hidden`}
    >
      <section className="w-full flex flex-col gap-9 items-center text-black-700">
        <h1 className="text-6xl md:text-[84px] leading-none text-center font-bold -tracking-wide max-w-lg">
          Listen to what&apos;s new
        </h1>

        <p className="font-semibold text-2xl tracking-tight">
          Catch up and record what&apos;s happening with short sound clips.
        </p>

        <form className="w-full flex items-center justify-center gap-4 flex-wrap md:flex-nowrap">
          <Input type="email" name="email" placeholder="Your email" />
          <Button type="submit">Get early access</Button>
        </form>

        <DeviceSections />
      </section>
      <section className="md:pt-56 pb-28">
        <h2 className="max-w-3xl font-semibold text-black-700 text-3xl md:text-6xl text-center tracking-tight">
          Up to 5 minutes long. Disappear after 48 hours.{' '}
          <span className="text-detail-blue">Always fresh.</span>
        </h2>
      </section>
      <section className="w-full md:w-4/5 py-8 flex flex-col md:flex-row justify-between items-center gap-12">
        <Image
          src="/assets/images/second-section-img.png"
          alt="Schedule your music as you want."
          width={543}
          height={569}
          className="w-full md:w-3/5 aspect-auto object-cover "
        />

        <div className="flex flex-col gap-8 max-w-[416px] text-4xl leading-[110%] md:text-6xl text-left text-black-700 tracking-tight">
          <h2 className="font-bold">Play your favourite voices</h2>
          <p className="font-semibold text-2xl leading-tight text-gray-600">
            Follow people and news summaries and listen to their latest clips
            seamlessly.
          </p>
        </div>
      </section>
      <section className="w-full py-8 md:pl-[10%] flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
        <div className="flex shrink flex-col gap-8 max-w-[416px] text-4xl leading-[110%] md:text-6xl text-left text-black-700 tracking-tight">
          <h2 className="font-bold">Listen to what&apos;s hot</h2>
          <p className="font-semibold text-2xl leading-tight text-gray-600">
            Discover what&apos;s trending and find new people to follow.
          </p>
        </div>
        <Image
          src="/assets/images/third-section-img.png"
          alt="Listen to what's hot"
          width={773}
          height={415}
          className="w-full md:w-3/5 aspect-auto object-cover"
        />
      </section>
      <section className="w-full md:w-4/5 py-8 flex flex-col md:flex-row justify-between items-center gap-12">
        <Image
          src="/assets/images/four-section-img.png"
          alt="Schedule your music as you want."
          width={695}
          height={568}
          className="w-full md:w-3/5 aspect-auto object-cover order-1 md:order-[0]"
        />

        <div className="flex flex-col gap-8 max-w-[416px] text-4xl leading-[110%] md:text-6xl text-left text-black-700 tracking-tight">
          <h2 className="font-bold">Drop it</h2>
          <p className="font-semibold text-2xl leading-tight text-gray-600">
            Record your clip in the app or upload a pre-recorded one and share
            it with the world.
          </p>
        </div>
      </section>
    </main>
  );
}
