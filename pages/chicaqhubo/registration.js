import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'
import RegistrationForm from '../../components/RegistrationForm'
import styles from '../../styles/Home.module.css'

// import dbConnect from '../lib/dbConnect'
// import Girl from '../models/Girl'

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

export default function Home() {
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
                <Link href='/chicaqhubo/celena-manosalva'>
                  <a>Ver la Chica Q'hubo del día</a>
                </Link>
              </h3>
              <h3 className={styles.profile}>
                <Link href='/chicaqhubo'>
                  <a>Conoce a nuestras Chicas Q'hubo</a>
                </Link>
              </h3>
            </div>
          </div>
          <div className={styles.container}>
            <RegistrationForm />
            <div className={styles.terminos}>
              <h2>Términos y Condiciones</h2>
              <p>
                Ser chica Q´Hubo tiene muchas ventajas. Para nadie es un secreto
                que nuestro periódico es el más leído de Norte de Santander, con
                miles de lectores diarios. Haciendo parte de esta nueva sección,
                tu imagen podrá llegar a cualquier lugar. Como tenemos todo tipo
                de lectores, muchos podrán conocer tu belleza y tu historia de
                vida, lo que seguramente te ayudará a abrir muchas puertas.
                Recuerda que no es necesario ser modelo profesional, ni tener
                cirugías. Esta nueva sección quiere destacar lo mejor de la
                mujer nortesantandereana. A continuación te contamos los
                términos y condiciones para participar:
              </p>
              <ul>
                <li>1. Ser mujer mayor de edad (De 18 a 27 años).</li>
                <li>2. Residir en Norte de Santander.</li>
                <li>3. Ser auténtica, animada, enérgica, carismática.</li>
                <li>
                  4. Las participantes deberán enviar las 5 fotos con las
                  siguientes características: cuerpo entero con jean y camisa
                  (frente), cuerpo entero en vestido de baño (frente), rostro
                  (frente y perfil) y medio cuerpo (frente). Las fotos deben ser
                  mínimo de 2500px y no pesar más de 2MB.
                </li>
                <li>
                  5. Debes ser responsable por permisos con tu empleador y/o
                  centro de estudios para participar de las diferentes
                  producciones que se requieran.
                </li>
                <li>
                  6. Un jurado calificador se encargará de hacer un proceso de
                  selección para escoger quiénes serán publicadas en el
                  periódico.
                </li>
                <li>
                  7. Las fotos, imágenes y/o videos que se produzcan como parte
                  de la sección Chica Q´Hubo son propiedad de La Opinión y
                  Q’Hubo Cúcuta.
                </li>
                <li>
                  8. Si tienes muchos seguidores en redes sociales, podrás
                  ayudarnos a replicar el mensaje de esta convocatoria y también
                  compartir las distintas publicaciones de Chica Q´Hubo.
                </li>
                <li>
                  9. La primera convocatoria inicia el 27 de septiembre y
                  finaliza el 10 de octubre.
                </li>
                <li>
                  10. Las mujeres seleccionadas serán contactadas vía email o de
                  forma telefónica donde se les informarán los paso a seguir. En
                  caso de no poder establecer comunicación durante la semana
                  siguiente a su elección, se procederá a elegir a otra
                  participante en su lugar.
                </li>
                <li>
                  11. Si tuviste un error al diligenciar el formulario vuelve a
                  ingresar tus datos. Ten en cuenta que el registro más reciente
                  será el seleccionado.
                </li>
              </ul>
            </div>
            <div className={styles.recibe}>
              <h2>¿Qué recibe?</h2>
              <ul>
                <li>
                  1. Salir en el afiche central del diario Q’Hubo Cúcuta con un
                  perfil corto.
                </li>
                <li>
                  2. Son 20 seleccionadas que serán publicadas mensualmente.
                </li>
                <li>
                  3. Fotografías profesionales solo si las enviadas no cumplen
                  con los estándares.
                </li>
                <li>
                  4. La posibilidad de ser la imagen de producto de alguno de
                  los patrocinadores. Esto está sujeto a la decisión de cada
                  patrocinador.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

/* Retrieves pet(s) data from mongodb database */
// export async function getServerSideProps() {
//   await dbConnect()

//   /* find all the data in our database */
//   const result = await Girl.find({})
//   const girls = result.map((doc) => {
//     const girl = doc.toObject()
//     girl._id = girl._id.toString()
//     return girl
//   })

//   const data = JSON.parse(JSON.stringify(girls))

//   return { props: { girls: data } }
// }
