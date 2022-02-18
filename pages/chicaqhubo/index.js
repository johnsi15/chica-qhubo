import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'
import GridProfile from '../../components/GridProfile'
import styles from '../../styles/Home.module.css'

import dbConnect from '../../lib/dbConnect'
import Profile from '../../models/Profile'

export default function Perfiles({ girls }) {
  return (
    <>
      <Layout>
        <div className={styles.background}>
          <div className={styles.header}>
            <Link href='/chicaqhubo'>
              <a>
                <div className={styles.logo}>
                  <Image
                    src='/logo-chica-qhubo.svg'
                    alt='Chica Qhubo'
                    width={247}
                    height={135}
                  />
                </div>
              </a>
            </Link>
            <div className={styles.botones}>
              <h3 className={styles.profile}>
                <Link href='/chicaqhubo/marguijuliet-mendoza'>
                  <a>Ver la Chica Q'hubo del día</a>
                </Link>
              </h3>
              <h3 className={styles.profile}>
                <Link href='/chicaqhubo/registration'>
                  <a>Inscríbete en Chica Q'hubo</a>
                </Link>
              </h3>
            </div>
          </div>
          <div className={styles.container_perfiles}>
            <div className={styles.block_title}>
              <div className={styles.title}>
                <h3>Conoce a nuestras Chicas Q'hubo</h3>
              </div>
              <div className={styles.patrocinio}>
                <p>Espacio patrocinado por:</p>
                <div className={styles.img_patrocinio}>
                  <Image
                    src='/logo-opitienda.png'
                    alt='Opitienda'
                    width={155}
                    height={34}
                  />
                </div>
              </div>
            </div>

            <div className={styles.letras_buscador}></div>

            {girls.length > 0 && <GridProfile girls={girls} />}
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
  const result = await Profile.find({}).sort({ name: 1 })
  const girls = result.map((doc) => {
    const girl = doc.toObject()
    girl._id = girl._id.toString()
    return girl
  })
  // console.log(girls)

  const data = JSON.parse(JSON.stringify(girls))

  return { props: { girls: data } }
}
