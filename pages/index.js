import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

import dbConnect from '../lib/dbConnect'
import Girl from '../models/Girl'

export default function Home({ girls }) {
  return (
    <>
      <Layout>
        <div className={styles.background}>
          <div className={styles.container}>
            <h2>Regístrate aquí</h2>
            <form action='' enctype='multipart/form-data'>
              <div className='field'>
                <label htmlFor='names'>Nombres y Apellidos</label>
                <input type='text' name='names' id='names' />
              </div>
              <div className='field'>
                <label htmlFor='birthday'>Fecha de Nacimiento*</label>
                <input type='date' name='birthday' id='birthday' />
              </div>
              <div className='field'>
                <label htmlFor='email'>Correo Electrónico</label>
                <input type='email' name='email' id='email' />
              </div>
              <div className='field'>
                <label htmlFor='phone'>Celular</label>
                <input type='text' name='phone' id='phone' />
              </div>
              <div className='field'>
                <label htmlFor='socialNetwork'>
                  Redes sociales <span>(Mínimos 5k seguidores)</span>
                </label>
                <input type='text' name='socialNetwork' id='socialNetwork' />
              </div>
              <div className='field'>
                <label htmlFor='images'>Subir Foto</label>
                <input
                  type='file'
                  name='images'
                  id='images'
                  multiple
                  accept='.jpg, .jpeg, .png'
                />
              </div>
              <div className='field'>
                <label htmlFor='terminos'>
                  Acepto los Términos y condiciones y el tratamiento de mis
                  datos conforme a la Política de Tratamiento de datos de La
                  Opinión.
                </label>
                <input type='check' name='terminos' id='terminos' required />
              </div>
              <div className='field'>
                <button className='btn btn-submit'>Enviar</button>
              </div>
            </form>
            <h3 className={styles.title}>Hello world</h3>
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
