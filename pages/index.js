import Head from 'next/head'
import Typewriter from 'typewriter-effect';

const Home = () => (
  <div className="container">
    <Head>
      <title>Jeffrey Lin</title>
      <link rel="icon" href="/favicon.ico" />
      <link
          href="https://fonts.googleapis.com/css?family=Fira+Sans:400,400i,700&display=swap"
          rel="stylesheet"
      />
    </Head>

    <main>
      <Typewriter
        options={{
          strings: ['site under construction.'],
          autoStart: true,
          loop: true,
        }}
      />
    </main>
  </div>
)

export default Home
