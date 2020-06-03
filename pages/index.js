import Head from 'next/head'
import { Page, Text, Card, Note, Code, Spacer } from '@zeit-ui/react'

export default function Home() {
  return (
    <Page>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Text h1>
        Welcome to <a href="/about">Next.js!</a>
      </Text>
      <Card>
        hello, world!
        </Card>
      <Spacer y={1.5} />
      <Card shadow>
        <Note type="success">This note details something important.</Note>
      </Card>
    </Page>
  )
}