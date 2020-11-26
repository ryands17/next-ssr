import { Footer, Header } from 'components/Boundaries'
import { Card } from 'components/Card'
import { Grid } from 'components/Grid'
import Head from 'next/head'
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
    link:
      'https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
    title: 'Deploy →',
    description:
      'Instantly deploy your Next.js site to a public URL with Vercel.',
  },
]

const Home = () => {
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
