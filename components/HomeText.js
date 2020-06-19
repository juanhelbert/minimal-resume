import { Text, Grid, useMediaQuery, useTheme } from '@zeit-ui/react'

const HomeText = ({ title, content, extra }) => {
  const isXS = useMediaQuery('xs')
  const { palette } = useTheme()

  const styles = {
    title: {
      fontWeight: 800,
      fontSize: `${isXS ? 32 : 56}px`,
      marginBottom: 0
    },
    p: {
      textAlign: isXS ? 'left' : 'center',
      fontSize: `${isXS ? 18 : 24}px`,
      color: palette.accents_6
    }
  }

  return (
    <Grid.Container justify={isXS ? 'flex-start' : 'center'}>
      <Text h2 style={styles.title}>{title}</Text>
      <Text p style={styles.p} dangerouslySetInnerHTML={{ __html: content }} />
      <Text p style={styles.p}>{extra && extra}</Text>
    </Grid.Container>
  )
}

export { HomeText }