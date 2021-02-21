import { Button, Card, Grid, Image, Spacer, Tag, Text, Link as Zlink, useTheme } from '@zeit-ui/react'

const ProjectsList = ({ data: projects, selectedType, selectedTechnology }) => {
  const { palette } = useTheme()

  return (
    <>
      <Card type='lite' className='projects-wrapper'>
        <Grid.Container gap={2}>
          {
            projects.length
              ? (
                projects.map(({ img, title, description, tags, link, repo }) =>
                  <Grid xs={24} sm={12} md={8} key={title}>
                    <Card shadow style={{ border: 0 }}>
                      <Zlink href={link} target='_blank' rel='noopener' style={{ margin: '-16pt' }}>
                        <Image src={img} alt={title} style={{ objectFit: 'cover' }} />
                      </Zlink>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text h4 style={{ marginBottom: '0', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{title} </Text>
                        <Zlink href={link} target='_blank' rel='noopener'>
                          <Button auto size='mini' style={{ color: palette.accents_7 }}>
                            <Text>Visit</Text>
                          </Button>
                        </Zlink>
                      </div>
                      <Text small style={{ color: palette.accents_7 }}>{description}</Text>
                      <Spacer />
                      {tags.slice(1).map(t =>
                        <div key={t} style={{ display: 'inline' }}>
                          <Tag style={{ borderColor: palette.accents_6, color: palette.accents_6, borderRadius: '20px', fontSize: '12px' }}>{t}</Tag>
                          <Spacer inline x={.3} />
                        </div>)}
                      <Card.Footer >
                        <Zlink href={repo} target='_blank' rel='noopener'>View source code on GitHub.</Zlink>
                      </Card.Footer>
                    </Card>
                  </Grid>
                )
              ) : (
                <Grid xs={24} >
                  <Text p size={20} style={{ textAlign: 'center' }}>
                    Sorry, there are no projects for <strong>{selectedType}</strong> and <strong>{selectedTechnology}</strong> filters.
                  </Text>
                </Grid>
              )
          }
        </Grid.Container>
      </Card>

      <style global jsx>{`
        #__next .projects-wrapper > .content {
          padding: 0;
        }

        #__next .value.placeholder span{
          color: ${palette.accents_6};
          line-height: 14px;
        }
      `}</style>
    </>
  )
}

export { ProjectsList }