import Head from 'next/head';
import Review from './components/Review';

import DarkModeToggle from './utils/DarkModeToggle';

export default function Home() {
  return (
    <div>
      <Head>
        <title>QuotEK</title>
      </Head>
      <main
        id={'app'}
        className="transition-all ease-in-out duration-300 delay-100"
      >
        <div className="absolute">
          <DarkModeToggle />
        </div>
        <Review />
      </main>
    </div>
  );
}
