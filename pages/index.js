import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

import dbConnect from '../lib/dbConnect'
import Girl from '../models/Girl'

export default function Home({ girls }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Submit')
  }
  return (
    <>
      <Layout>
        <div className={styles.background}>
          <div className={styles.container}>
            <h2 className={styles.title}>Regístrate aquí</h2>
            <form
              action=''
              className={styles.form}
              encType='multipart/form-data'
              onSubmit={handleSubmit}
            >
              <div className={styles.field}>
                <label htmlFor='names'>Nombres y Apellidos</label>
                <input type='text' name='names' id='names' />
              </div>
              <div className={styles.field}>
                <label htmlFor='birthday'>Fecha de Nacimiento</label>
                <input type='date' name='birthday' id='birthday' />
              </div>
              <div className={styles.field}>
                <label htmlFor='email'>Correo Electrónico</label>
                <input type='email' name='email' id='email' />
              </div>
              <div className={styles.field}>
                <label htmlFor='phone'>Celular</label>
                <input type='text' name='phone' id='phone' />
              </div>
              <div className={styles.field}>
                <label htmlFor='socialNetwork'>
                  Redes sociales <span>(Mínimos 5k seguidores)</span>
                </label>
                <input type='text' name='socialNetwork' id='socialNetwork' />
              </div>
              <div className={styles.field}>
                <label htmlFor='images'>Subir Foto</label>
                <div className={styles.fileContainer}>
                  <input
                    type='file'
                    name='images'
                    id='images'
                    multiple
                    accept='.jpg, .jpeg, .png'
                  />
                </div>
              </div>
              <div className={`${styles.field} ${styles.terminos}`}>
                <label htmlFor='terminos'>
                  Acepto los{' '}
                  <a
                    href='https://www.laopinion.com.co/terminos-condiciones'
                    target='_blank'
                  >
                    Términos y condiciones
                  </a>{' '}
                  y el tratamiento de mis datos conforme a la{' '}
                  <a
                    href='https://www.laopinion.com.co/politica-de-tratamiento-de-datos-personales'
                    target='_blank'
                  >
                    Política de Tratamiento de datos de La Opinión.
                  </a>
                </label>
                <input type='checkbox' name='terminos' id='terminos' required />
              </div>
              <div className={styles.field}>
                <button className={styles.btn}>Enviar</button>
              </div>
            </form>
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
