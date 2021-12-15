import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'
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
                <Link href='/chicaqhubo/alejanni-mendoza'>
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
            {girls.map((girl) => (
              <>
                <h3>{girl.name}</h3>
                <p>{girl.hobbies}</p>
              </>
            ))}
            <div className={styles.conten_perfiles}>
              <Link href='/chicaqhubo/alejandra-suarez'>
                <div className={styles.perfil}>
                  <Image
                    src='/alejandra-suarez/c1.png'
                    alt='Alejandra Suarez'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                  <h3>Alejandra Suárez</h3>
                </div>
              </Link>
              <Link href='/chicaqhubo/alejanni-mendoza'>
                <div className={styles.perfil}>
                  <Image
                    src='/alejanni-mendoza/c1.png'
                    alt='Alejanni Mendoza'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                  <h3>Alejanni Mendoza</h3>
                </div>
              </Link>
              <Link href='/chicaqhubo/celena-manosalva'>
                <div className={styles.perfil}>
                  <Image
                    src='/celena-manosalva/c3.png'
                    alt='Celena Manosalva'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                  <h3>Celena Manosalva</h3>
                </div>
              </Link>
              <Link href='/chicaqhubo/dayana-neira'>
                <div className={styles.perfil}>
                  <Image
                    src='/dayana-neira/c1.png'
                    alt='Dayana Neira'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                  <h3>Dayana Neira</h3>
                </div>
              </Link>
              <Link href='/chicaqhubo/dayana-ortiz'>
                <div className={styles.perfil}>
                  <Image
                    src='/dayana-ortiz/miniatura-6.png'
                    alt='Dayana Ortiz'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                  <h3>Dayana Ortiz</h3>
                </div>
              </Link>
              <Link href='/chicaqhubo/harly-padilla'>
                <div className={styles.perfil}>
                  <Image
                    src='/harly-padilla/c2.png'
                    alt='Harly Padilla'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                  <h3>Harly Padilla</h3>
                </div>
              </Link>
              <Link href='/chicaqhubo/isabel-burgos'>
                <div className={styles.perfil}>
                  <Image
                    src='/isabel-burgos/c3.png'
                    alt='Isabel Burgos'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                  <h3>Isabel Burgos</h3>
                </div>
              </Link>
              <Link href='/chicaqhubo/liseth-maldonado'>
                <div className={styles.perfil}>
                  <Image
                    src='/liseth-maldonado/miniatura4.png'
                    alt='Liseth Maldonado'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                  <h3>Liseth Maldonado</h3>
                </div>
              </Link>
              <Link href='/chicaqhubo/lizeth-trujillo'>
                <div className={styles.perfil}>
                  <Image
                    src='/lizeth-trujillo/c2.png'
                    alt='Lizeth Trujillo'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                  <h3>Lizeth Trujillo</h3>
                </div>
              </Link>
              <Link href='/chicaqhubo/marcela-nieves'>
                <div className={styles.perfil}>
                  <Image
                    src='/marcela-nieves/c2.png'
                    alt='Marcela Nieves'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                  <h3>Marcela Nieves</h3>
                </div>
              </Link>
              <Link href='/chicaqhubo/margarita-fuentes'>
                <div className={styles.perfil}>
                  <Image
                    src='/margarita-fuentes/c5.png'
                    alt='Margarita Fuentes'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                  <h3>Margarita Fuentes</h3>
                </div>
              </Link>
              <Link href='/chicaqhubo/maria-robles'>
                <div className={styles.perfil}>
                  <Image
                    src='/maria-robles/c6.png'
                    alt='María Robles'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                  <h3>María Robles</h3>
                </div>
              </Link>
              <Link href='/chicaqhubo/mariana-hidalgo'>
                <div className={styles.perfil}>
                  <Image
                    src='/mariana-hidalgo/c7.png'
                    alt='Mariana Hidalgo'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                  <h3>Mariana Hidalgo</h3>
                </div>
              </Link>
              <Link href='/chicaqhubo/nataly-arciniegas'>
                <div className={styles.perfil}>
                  <Image
                    src='/nataly-arciniegas/c2.png'
                    alt='Nataly Arciniegas'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                  <h3>Nataly Arciniegas</h3>
                </div>
              </Link>
              <Link href='/chicaqhubo/nataly-villamizar'>
                <div className={styles.perfil}>
                  <Image
                    src='/nataly-villamizar/c5.png'
                    alt='Nataly Villamizar'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                  <h3>Nataly Villamizar</h3>
                </div>
              </Link>
              <Link href='/chicaqhubo/yohanna-morales'>
                <div className={styles.perfil}>
                  <Image
                    src='/yohanna-morales/c1.png'
                    alt='Yohanna Morales'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                  <h3>Yohanna Morales</h3>
                </div>
              </Link>
            </div>
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
  const result = await Profile.find({})
  const girls = result.map((doc) => {
    const girl = doc.toObject()
    girl._id = girl._id.toString()
    return girl
  })

  const data = JSON.parse(JSON.stringify(girls))

  return { props: { girls: data } }
}
