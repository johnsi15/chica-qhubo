import Head from 'next/head'
import styles from './Layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Chica Qhubo</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1,minimum-scale=1, maximum-scale=5'
        />
        <meta name='description' content='Chica Qhubo Cúcuta' />
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  )
}
