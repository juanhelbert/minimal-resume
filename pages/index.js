import Head from 'next/head'
import { Page, Spacer, useTheme } from '@zeit-ui/react'
import { IntroWrapper } from '../components/IntroWrapper'
import { HomeText } from '../components/HomeText'
import { HomeProjects } from '../components/HomeProjects'
import { Contact } from '../components/Contact'

export default function Home() {
  const { palette } = useTheme()
  const age = Math.floor((new Date() - new Date('1996-01-20').getTime()) / 3.15576e+10)

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
        content={`I'm a ${age} years old Software Engineer, passionate about learning and solving problems. I love creating clean code, researching new technologies and growing in the process.`}
        extra={"I started with web development when I was very young, but I've been working on it since 2017."}
      />
      <Spacer y={8} />
      <HomeText
        title='A web enthusiast'
        content={`As a Frontend developer I have developed a lot of sites, always keeping the focus on <b style="color: ${palette.accents_7}">UI/UX</b>, the <b style="color: ${palette.accents_7}">accessibility</b> and never leaving aside the <b style="color: ${palette.accents_7}">performance</b>. `}
        extra={"Usually, I come up with some ideas and implement them in small projects, here are some of them:"}
      />
      <HomeProjects />
      <Spacer y={8} />
      <div id='contact'>
        <HomeText title='Contact' />
        <Contact />
      </div>
      <Spacer y={2} />
    </Page >
  )
}