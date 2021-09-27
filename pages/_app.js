import { useEffect } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import '../styles/globals.css'

function App({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Script src='https://cdn.onesignal.com/sdks/OneSignalSDK.js' async='' />
      <Script
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.OneSignal = window.OneSignal || [];
            OneSignal.push(function() {
              OneSignal.init({
                appId: "8e2b4867-3e2a-4f33-8270-d0ccd0aaad3c",
              });
            });
          `,
        }}
      />

      <Script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: `{
                "@context": "http://schema.org",
                "@type": "BlogPosting",
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://qhubocucuta.com/chicaqhubo"
                },
                "headline": "Qhubo Cúcuta. Chica Qhubo",
                "image": [
                  "https://qhubocucuta.com/default.png"
                ],
                "datePublished": "Lun, 27/09/2021 - 04:00",
                "dateModified": "Lun, 27/09/2021 - 06:29",
                "author": {
                  "@type": "Person",
                  "name": "Diario La Opinión"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "La Opinión",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://qhubocucuta.com/default.png"
                  }
                },
                "description": "Qhubo Cucuta es el medio de noticias populares lider en Norte de Santander"
              }`,
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default App
