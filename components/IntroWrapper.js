import { Button, Grid, Spacer, Text, useTheme } from '@zeit-ui/react'
import Link from 'next/link'

const IntroWrapper = () => {
  const { palette } = useTheme()
  return (
    <div className='intro-wrapper'>
      <Text h1 size={64} style={{ lineHeight: '64px', fontWeight: 800, marginBottom: 0 }}>
        Juan<br />Helbert
      </Text>
      <Grid.Container>
        <Grid xs={24} sm={11}>
          <Text p size={18}>
            I'm a multidisciplinary Software Engineer with a solid knowledge in frontend. I aim to build apps that put user experience and accessibility to the forefront.
          </Text>
        </Grid>
        <Grid />
      </Grid.Container>
      <Spacer />
      <Grid.Container gap={2} justify="flex-start" className='grid'>
        <Grid >
          <Link href="#contact"><Button shadow type="success">Contact me</Button></Link>
        </Grid>
        <Grid>
          <Link href="#home-projects"><Button shadow style={{ color: palette.accents_7, borderColor: palette.accents_7 }}>View projects</Button></Link>
        </Grid>
      </Grid.Container>

      <style global jsx>{`
        .intro-wrapper {
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          justify-content: center;
          padding-bottom: 20px;
          min-height: calc(100vh - 55px);
        }

        @media only screen and (max-width: 470px) {
          .intro-wrapper .grid .item, .intro-wrapper .grid .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}

export { IntroWrapper }