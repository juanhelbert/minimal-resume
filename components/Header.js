import { Text, Button, Col, Row, Link as Zlink, useTheme } from '@zeit-ui/react'
import { Sun, Moon } from '@zeit-ui/react-icons'
import Link from 'next/link'

const Header = ({ parentCallback, theme }) => {
  const { palette } = useTheme()
  const isLight = theme === 'light'

  return (
    <>
      <header >
        <div className='container'>
          <Row align='middle' justify='space-between'>
            <Col>
              <Link href="/">
                <Zlink style={{ marginRight: '24px' }}>Home</Zlink>
              </Link>
              <Link href="/projects">
                <Zlink style={{ marginRight: '24px' }}>Projects</Zlink>
              </Link>
            </Col>
            <Button
              auto size="small"
              icon={isLight
                ? <Sun color={palette.foreground} />
                : <Moon color={palette.foreground} />}
              onClick={parentCallback}
              style={{ color: palette.foreground }}
            >
              <Text>{isLight ? 'Light' : 'Dark'}</Text>
            </Button>
          </Row>
        </div>
      </header>

      <style jsx>{`
        header {
          border-bottom: 1px solid ${palette.accents_2};
          padding-top: 10px;
          padding-bottom: 10px;
        }
      `}</style>
    </>
  )
}

export { Header }