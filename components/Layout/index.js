import Head from 'next/head'
import styles from './Layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Qhubo Cúcuta. Chica Qhubo</title>
        <link rel='icon' href='/favicon_2.ico' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1,minimum-scale=1, maximum-scale=5'
        />
        <meta name='title' content='Qhubo Cúcuta. Chica Qhubo' />
        <meta
          name='description'
          content='Qhubo Cucuta es el medio de noticias populares lider en Norte de Santander'
        />

        <meta
          key='twitter:card'
          name='twitter:card'
          content='summary_large_image'
        />
        <meta
          key='twitter:site'
          name='twitter:site'
          content='@laopinioncucuta'
        />
        <meta
          key='twitter:title'
          name='twitter:title'
          content='Qhubo Cúcuta. Chica Qhubo'
        />
        <meta
          key='twitter:description'
          name='twitter:description'
          content='Qhubo Cúcuta es el medio de noticias populares lider en Norte de Santander'
        />
        <meta
          key='twitter:url'
          name='twitter:url'
          content='https://qhubocucuta.com/chicaqhubo'
        />
        <meta
          name='twitter:image:src'
          content='https://qhubocucuta.com/default.png'
        />
        <meta
          key='og:url'
          property='og:url'
          content='https://qhubocucuta.com/chicaqhubo'
        />
        <meta key='og:type' property='og:type' content='website' />
        <meta
          key='og:title'
          property='og:title'
          content='Qhubo Cúcuta. Chica Qhubo'
        />
        <meta
          key='og:description'
          property='og:description'
          content='Qhubo Cúcuta es el medio de noticias populares lider en Norte de Santander'
        />
        <meta
          key='og:image'
          property='og:image'
          content='https://qhubocucuta.com/default.png'
        />
        <meta
          key='og:image:secure_url'
          property='og:image:secure_url'
          content='https://qhubocucuta.com/default.png'
        />
        <meta key='og:image:width' property='og:image:width' content='1200' />
        <meta key='og:image:height' property='og:image:height' content='630' />
        <meta property='fb:pages' content='110045065716092' />
        <meta
          key='og:locale:alternate'
          property='og:locale:alternate'
          content='es_LA'
        />
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  )
}
