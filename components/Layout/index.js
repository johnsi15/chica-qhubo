import Head from 'next/head'
import styles from './Layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Chica Qhubo</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  )
}