import Image from 'next/image'
import Layout from '../components/Layout'
import RegistrationForm from '../components/RegistrationForm'
import styles from '../styles/Home.module.css'

import dbConnect from '../lib/dbConnect'
import Girl from '../models/Girl'

export default function Home({ girls }) {
  return (
    <>
      <Layout>
        <div className={styles.background}>
          <div className={styles.logo}>
            <Image
              src='/logo-chica-qhubo.svg'
              alt='Chica Qhubo'
              width={120}
              height={160}
            />
          </div>
          <div className={styles.container}>
            <h2 className={styles.title}>Regístrate aquí</h2>
            <RegistrationForm />
            {girls.map((girl) => (
              <p className={styles.girl} key={girl._id}>
                {girl.name}
              </p>
            ))}
          </div>
        </div>
      </Layout>
    </>
  )
}

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect()

  /* find all the data in our database */
  const result = await Girl.find({})
  const girls = result.map((doc) => {
    const girl = doc.toObject()
    girl._id = girl._id.toString()
    return girl
  })

  return { props: { girls } }
}
