import Head from 'next/head'
import { Page, Spacer } from '@zeit-ui/react'
import { IntroWrapper } from '../components/IntroWrapper'


export default function Home() {
  return (
    <Page>
      <Head>
        <title>Juan Helbert | Web resume</title>
        <meta name="description" content="I'm a multidisciplinary Software Engineer with a solid knowledge in frontend. I aim to build apps that put user experience and accessibility to the forefront." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Spacer y={3} />
      <IntroWrapper />
    </Page >
  )
}