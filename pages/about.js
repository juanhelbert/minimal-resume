import Head from 'next/head'
import { Page, Text, Card, Note, Code, Spacer } from '@zeit-ui/react'

export default function About() {
  return (
    <Page>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Text h1>
        aaaaaa
      </Text>
      <Card>
        hello, world. I am using <Code>@zeit-ui/react</Code> !
        </Card>
      <Spacer y={1.5} />
      <Card shadow>
        <Note type="success">This note details something important.</Note>
      </Card>
    </Page>
  )
}