import { Button, Card, Grid, Text, useTheme } from '@zeit-ui/react'
import { Codepen, Github, Linkedin, Mail } from '@zeit-ui/react-icons'

const data = [
  {
    icon: <Mail />,
    title: 'helbert.juan@gmail.com',
    link: 'mailto:helbert.juan@gmail.com'
  }, {
    icon: <Linkedin size={23} />,
    title: 'Juan Helbert',
    link: 'https://www.linkedin.com/in/juan-helbert-30a65516a/'
  }, {
    icon: <Github />,
    title: 'juanhelbert',
    link: 'https://github.com/juanhelbert'
  }, {
    icon: <Codepen />,
    title: 'helbertjuan',
    link: 'https://codepen.io/helbertjuan'
  }
]

const Contact = () => {
  const { palette } = useTheme()
  return (
    <>
      <Card type='lite' className='custom-contact'>
        <Grid.Container gap={2} justify="center" style={{ paddingLeft: 0, paddingRight: 0 }}>
          {data.map(i => (
            <Grid xs={24} sm={12} md key={i.title}>
              <Card shadow>
                <Text b style={{ display: 'flex' }}>
                  {i.icon} <a href={i.link} target='_blank' rel="noopener" style={{ color: palette.foreground, marginLeft: '10px' }}>{i.title}</a>
                </Text>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      </Card>

      <style global jsx>{`
        #__next .custom-contact > .content {
          padding-left: 0;
          padding-right: 0;
        }

      `}</style>
    </>
  )
}

export { Contact }