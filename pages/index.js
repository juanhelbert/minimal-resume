import Head from 'next/head'
import { Page, Spacer, useTheme } from '@zeit-ui/react'
import { IntroWrapper } from '../components/IntroWrapper'
import { HomeText } from '../components/HomeText'

export default function Home() {
  const { palette } = useTheme()

  return (
    <Page>
      <Head>
        <title>Juan Helbert | Web resume</title>
        <meta name="description" content="I'm a multidisciplinary Software Engineer with a solid knowledge in frontend. I aim to build apps that put user experience and accessibility to the forefront." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IntroWrapper />
      <Spacer y={3} />
      <HomeText
        title='About me'
        content="I'm a 24 years old Software Engineer, passionate about learning and solving problems. I love creating clean code, researching new technologies and growing in the process."
      />
      <Spacer y={6} />
      <HomeText
        title='A web enthusiast'
        content={`As a Frontend developer I have developed a lot of sites, always keeping the focus on <b style="color: ${palette.accents_7}">UI/UX</b>, the <b style="color: ${palette.accents_7}">accessibility</b> and never leaving aside the <b style="color: ${palette.accents_7}">performance</b>.`}
        extra={"Some projects I've been worked on:"}
      />
    </Page >
  )
}