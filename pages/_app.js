import React, { useState, useEffect } from 'react'
import { CssBaseline, ZeitProvider } from '@zeit-ui/react'
import { Header } from '../components/Header'

function MyApp({ Component, pageProps }) {
  const [themeType, setThemeType] = useState('light')
  const [showAfterRender, setShowAfterRender] = useState(false)

  const flickerStuff = () => {
    document.documentElement.removeAttribute('style')
    document.body.removeAttribute('style')
    setShowAfterRender(true)
  }

  const themeStuff = () => {
    const savedTheme = localStorage.getItem('theme')
    savedTheme && setThemeType(savedTheme)
    if (!savedTheme) {
      const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      if (userPrefersDark) {
        setThemeType('dark')
        localStorage.setItem('theme', 'dark')
      }
    }
  }

  const switchThemes = () => {
    setThemeType(themeType === 'dark' ? 'light' : 'dark')
    localStorage.setItem('theme', themeType === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    flickerStuff()
    themeStuff()
  }, [])

  return (
    !showAfterRender
      ? null
      : <>
        <ZeitProvider theme={{ type: themeType }}>
          <CssBaseline />
          <Header parentCallback={switchThemes} theme={themeType} />
          <Component {...pageProps} />
        </ZeitProvider>

        <style global jsx>{`
          *:focus {
            outline: -webkit-focus-ring-color auto 1px !important;
          }
          
          #__next main {
            padding: 0;
          }

          .container {
            width: 750pt;
            max-width: 100vw;
            margin: 0 auto;
            padding: 0 16pt;
            box-sizing: border-box;
            position: relative;
          }
        `}</style>
      </>
  );
}
export default MyApp