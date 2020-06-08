import Head from 'next/head'
import { Page, Text, Card, Spacer } from '@zeit-ui/react'

export default function Projects() {
  return (
    <Page>
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Text h1>
        Projects
      </Text>
      <Card>
        Projects
      </Card>
      <Spacer y={1.5} />
    </Page>
  )
}