import { Button, Card, Grid, Image, Text, Tooltip, Spacer, useMediaQuery, useTheme } from '@zeit-ui/react'
import Link from 'next/link'
import { Github } from '@zeit-ui/react-icons'

const data = [
  {
    title: 'Only one div',
    description: 'Cool things with only one div and pure CSS.',
    web: 'https://only-one-div.now.sh/',
    repo: 'https://github.com/juanhelbert/Only-one-div',
    img: '/images/only_one_div.jpg'
  }, {
    title: 'Global Breath',
    description: 'The challenge was to have it done ASAP in order to tackle the covid-19 globally.',
    web: 'https://theglobalbreath.com/',
    img: '/images/global_breath.jpg'
  }, {
    title: 'Rick and Morty',
    description: 'An app made with GraphQL to search characters',
    web: 'https://rickandmorty-jh.netlify.app/',
    repo: 'https://github.com/juanhelbert/Rick-and-Morty',
    img: '/images/rick_and_morty.jpg'
  }
]

const HomeProjects = () => {
  const { palette } = useTheme()
  const isSM = useMediaQuery('sm', { match: 'down' })

  const TextAndButtons = ({ title, description, web, repo }) => {
    return (
      <Card type='lite' className='custom-card'>
        <Text h2 style={{ marginBottom: 0 }}>{title}</Text>
        <Text p style={{ marginTop: 0, color: palette.accents_6 }}>{description}</Text>
        <Spacer />
        <Grid.Container gap={1} justify="flex-start" className='grid'>
          <Grid >
            <a href={web} target='_blank'><Button type="success" size="small" shadow>Visit</Button></a>
          </Grid>
          <Grid>
            {repo
              ? (
                <a href={repo} target='_blank'><Button size="small" shadow style={{ color: palette.accents_7, borderColor: palette.accents_7 }} icon={<Github color={palette.accents_7} />}>Repo</Button></a>
              ) : (
                <Tooltip text={"It's a private repo 🙁"} placement='bottom' trigger='click'>
                  <Button size="small" disabled icon={<Github />}>Repo</Button>
                </Tooltip>
              )}
          </Grid>
        </Grid.Container>
      </Card>
    )
  }

  const ProjectImage = ({ web, img, title }) => {
    return (
      <Image.Browser url={web}>
        <Image width="540" height="246" src={img} alt={title} />
      </Image.Browser>
    )
  }

  return (
    <>
      {/* Only one div */}
      <div className='custom-row'>
        <Grid.Container justify="space-between">
          <Grid xs={24} md={11}>
            <TextAndButtons title={data[0].title} description={data[0].description} web={data[0].web} repo={data[0].repo} />
          </Grid>
          <Grid xs={24} md={11}>
            <ProjectImage img={data[0].img} web={data[0].web} title={data[0].title} />
          </Grid>
        </Grid.Container>
      </div>

      {/* The Global Breath */}
      <div className='custom-row'>
        <Grid.Container justify="space-between">
          <Grid xs={24} md={11} className='mobile-reorder'>
            <ProjectImage img={data[1].img} web={data[1].web} title={data[1].title} />
          </Grid>
          <Grid xs={24} md={11}>
            <TextAndButtons title={data[1].title} description={data[1].description} web={data[1].web} repo={data[1].repo} />
          </Grid>
        </Grid.Container>
      </div>

      {/* Rick and Morty */}
      <div className='custom-row'>
        <Grid.Container justify="space-between">
          <Grid xs={24} md={11}>
            <TextAndButtons title={data[2].title} description={data[2].description} web={data[2].web} repo={data[2].repo} />
          </Grid>
          <Grid xs={24} md={11}>
            <ProjectImage img={data[2].img} web={data[2].web} title={data[2].title} />
          </Grid>
        </Grid.Container>
      </div>

      <div className='custom-row'>
        <Grid.Container justify="center">
          <Link href="/projects"><Button shadow type="success" size='large'>View all projects</Button></Link>
        </Grid.Container>
      </div>


      <style global jsx>{`
        #__next .custom-row {
          display: flex;
          padding: 48px 0;
        }

        #__next .custom-card .content {
          padding-left: ${isSM && 0};
          padding-right: ${isSM && 0};
        }

        #__next .mobile-reorder {
          order: ${isSM ? 2 : 0}
        }

        @media only screen and (max-width: 470px) {
          .custom-card .content .grid .item, .custom-card .content .grid .btn, .custom-card .content .tooltip {
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}

export { HomeProjects }