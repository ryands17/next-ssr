import Head from 'next/head'
import type { NextPage } from 'next'
import { Footer, Header } from 'components/Boundaries'
import { Card } from 'components/Card'
import { Grid } from 'components/Grid'
import { Cards } from 'types'

const cardItems: Cards = [
  {
    link: 'https://nextjs.org/docs',
    title: 'Docs →',
    description: 'Find in-depth information about Next.js features and API.',
  },
  {
    link: 'https://nextjs.org/learn',
    title: 'Learn →',
    description: 'Learn about Next.js in an interactive course with quizzes!',
  },
  {
    link: 'https://github.com/zeit/next.js/tree/master/examples',
    title: 'Examples →',
    description: 'Discover and deploy boilerplate example Next.js projects.',
  },
  {
    link: '/users',
    title: 'View Users →',
    description: 'Switch to the Server rendered `Users` Page',
  },
]

const Home: NextPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Head>
        <title>Next SSR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="pt-20 pb-20 flex-1 flex flex-col justify-center items-center">
        <Header />

        <Grid>
          {cardItems.map((cardItem, i) => (
            <Card card={cardItem} key={i} />
          ))}
        </Grid>
      </main>

      <Footer />
    </div>
  )
}

export default Home
