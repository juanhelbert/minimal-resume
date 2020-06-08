import { Button, Grid, Spacer, Text } from '@zeit-ui/react'
import Link from 'next/link'

const IntroWrapper = () => {
  return (
    <div className='dioo'>
      <Text h1 style={{ fontSize: '64px', lineHeight: '64px' }}>
        Juan Helbert
      </Text>
      <Grid.Container>
        <Grid xs={24} sm={11}>
          <Text p style={{ fontSize: '18px' }}>
            I'm a multidisciplinary Software Engineer with a solid knowledge in frontend. I aim to build apps that put user experience and accessibility to the forefront.
          </Text>
        </Grid>
        <Grid />
      </Grid.Container>
      <Spacer />
      <Grid.Container gap={2} justify="flex-start" className='grid'>
        <Grid >
          <Link href="/contact"><Button shadow type="success">Contact me</Button></Link>
        </Grid>
        <Grid>
          <Link href="/projects"><Button shadow>View projects</Button></Link>
        </Grid>
      </Grid.Container>

      <style global jsx>{`
        @media only screen and (max-width: 470px) {
          .grid .item, .grid .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}

export { IntroWrapper }