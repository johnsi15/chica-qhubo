import Image from 'next/image'
import Layout from '../components/Layout'
import RegistrationForm from '../components/RegistrationForm'
import styles from '../styles/Home.module.css'

import dbConnect from '../lib/dbConnect'
import Girl from '../models/Girl'

function getDateHuman(unixTimestamp) {
  // const unixTimestamp = 1575909015

  const milliseconds = unixTimestamp * 1000 // 1575909015000

  const dateObject = new Date(milliseconds)

  // const humanDateFormat = dateObject.toLocaleString() // 5/21/2021, 11:49:16 AM
  // console.log(humanDateFormat)

  const dayName = dateObject.toLocaleString('es-CO', { weekday: 'long' }) // Lunes
  const month = dateObject.toLocaleString('es-CO', { month: 'long' }) // Mayo
  const dayNumber = dateObject.toLocaleString('es-CO', { day: 'numeric' }) // 9
  const year = dateObject.toLocaleString('es-CO', { year: 'numeric' }) // 2019
  // const hour = dateObject.toLocaleString('es-CO', { hour: 'numeric' }) // 10 AM
  // const minute = dateObject.toLocaleString('es-CO', { minute: 'numeric' }) // 30
  // const second = dateObject.toLocaleString('es-CO', { second: 'numeric' }) // 15
  // dateObject.toLocaleString('es-CO', { timeZoneName: 'short' }) // 12/9/2019, 10:30:15 AM CST
  // Viernes, 16 de Julio de 2021
  const dateHuman = `${dayName}, ${dayNumber} de ${month} del ${year}`
  return dateHuman
}

export default function Home({ girls }) {
  return (
    <>
      <Layout>
        <div className={styles.background}>
          <div className={styles.logo}>
            <Image
              src='/logo-chica-qhubo.svg'
              alt='Chica Qhubo'
              width={247}
              height={135}
            />
          </div>
          <div className={styles.container}>
            <RegistrationForm />
            <div className={styles.terminos}>
              <h2>Términos y Condiciones</h2>
              <ul>
                <li>1. Ser mujer mayor de edad (De 18 a 27 años).</li>
                <li>2. Residir en Cúcuta.</li>
                <li>
                  3. Ser bonita, de buen cuerpo, auténtica, animada, enérgica,
                  carismática.
                </li>
                <li>
                  4. Deberá ser responsable por permisos con su empleador y/o
                  centro de estudios para participar de las diferentes
                  producciones que se requieran.
                </li>
                <li>
                  5. Estar en buenas condiciones físicas y no estar en estado de
                  gestación.
                </li>
                <li>
                  6. No participar o haber participado en ningún tipo de evento,
                  concurso o actividad contraria a la ley, el orden público y
                  las buenas costumbres, en especial declarar que no he
                  participado en ningún tipo de desnudo público.
                </li>
                <li>
                  7. La decisión final del jurado es absoluta y no está sujeta a
                  revisión o apelación.
                </li>
                <li>
                  8. Las fotos, imágenes y/o videos son propiedad de La Opinión
                  y Q’Hubo Cúcuta.
                </li>
                <li>
                  9. Si participa como influenciadora deberá tener un mínimo de
                  5.000 seguidores en una de las redes sociales (Aplica para
                  Facebook e Instagram).
                </li>
                <li>
                  10. La convocatoria inicia el 30 de agosto y finaliza el 15 de
                  septiembre.
                </li>
                <li>
                  11. Las mujeres seleccionadas serán contactadas vía email o de
                  forma telefónica donde se les informarán los paso a seguir. En
                  caso de no poder establecer comunicación durante la semana
                  siguiente a su elección, se procederá a elegir a otra
                  participante en su lugar.
                </li>
                <li>
                  12. De llegar a ser seleccionadas, quienes participan como
                  influenciadoras se comprometen a compartir en sus redes
                  sociales su salida mencionando al Qhubo (Facebook o IG).
                </li>
              </ul>
            </div>
            <div className={styles.recibe}>
              <h2>¿Qué recibe?</h2>
              <ul>
                <li>
                  1. Salir en afiche central del diario Q’Hubo Cúcuta con un
                  perfil corto.
                </li>
                <li>
                  2. Son 20 seleccionadas que serán publicadas mensualmente.
                </li>
                <li>
                  3. Fotografías profesionales para la publicación en el diario.
                </li>
              </ul>
            </div>
            {girls.map((girl) => (
              <p className={styles.girl} key={girl._id}>
                {girl.names}
                {girl?.create_date && girl.create_date}
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

  const data = JSON.parse(JSON.stringify(girls))

  return { props: { girls: data } }
}
