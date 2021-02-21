import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { CssBaseline } from '@zeit-ui/react'


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const styles = CssBaseline.flush();

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {styles}
        </>
      )
    }
  }

  render() {
    return (
      <Html lang="en-us">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com/" />
          <link rel="dns-prefetch" href="https://www.google-analytics.com" />
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
          <link href="https://www.google-analytics.com" rel="preconnect" crossOrigin />
          <link href="https://www.googletagmanager.com" rel="preconnect" crossOrigin />
        </Head>
        <body>
          <script dangerouslySetInnerHTML={{
            __html: `
            (function(){
              if (!window.localStorage) return;
              if (window.localStorage.getItem('theme') === 'dark') {
                document.documentElement.style.background = '#000'
                document.body.style.background = '#000'
              }
            })()
          `}} />
          <Main />
          <NextScript />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-168587762-1"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || []
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date())
  
            gtag('config', 'UA-168587762-1')
              `,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;