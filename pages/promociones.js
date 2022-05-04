import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Promociones.module.css'

export default function Promociones() {
  return (
    <Layout title='Optativos Qhubo Cúcuta'>
      <section className={styles.background}>
        <div className={styles.header}>
          <Image
            src='/optativos/title-cupones.svg'
            alt='Colecciona los cupones de Qhubo'
            width={722}
            height={416}
          />
          <div className={styles.container_plancha}>
            <h3>Espectacular Picatodo</h3>
            <div className={styles.plancha}>
              <Image
                src='/optativos/picatodo.png'
                alt='Picatodo'
                width={337}
                height={337}
              />
            </div>
          </div>
        </div>
        <div className={styles.ficha_tecnica}>
          <ul>
            <li>• Cuchillas de acero inoxidable.</li>
            <li>
              • Te facilitará al momento de hacer tus más ricas recetas,
              obteniendo la consistencia que deseas en tus platos.
            </li>
            <li>
              • Es perfecto para guardar en cualquier parte de la cocina y a la
              vez tiene toda la potencia necesaria.
            </li>
            <li>• Su tamaño es ideal y práctico.</li>
            <li>• Capacidad: 0.35L - 1.5 cups</li>
            <li>• Potencia: 100 w</li>
          </ul>
        </div>
        <div className={styles.pasos}>
          <Image
            src='/optativos/pasos.svg'
            alt='Pasos'
            className={styles.texto}
            width={427}
            height={99}
          />
          <div className={styles.flecha}>
            <Image
              src='/optativos/down.svg'
              alt='Flecha'
              width={81}
              height={79}
            />
          </div>
        </div>

        <div className={styles.terminos}>
          <ol>
            <li>Compra el periódico que trae el cupón</li>
            <li>Recorta los cupones del producto que desees.</li>
            <li>Colecciona 15 cupones.</li>
            <li>
              Comunicate al 316 876 8730 y con tus cupones +$48.352 recibe el
              producto en tu domicilio (Vlr del domicilio $6.000 solo Cúcuta) o
              recorta y lleva los cupones a nuestras instalaciones en la Av 4
              #16-12 B. La playa.
            </li>
            <li>Válido hasta agotar existencias.</li>
            <li>
              Oferta válida del 27 de abril al 18 de mayo. (Si tienes los
              cupones puedes adquirir tu producto hasta el 30 de mayo)
            </li>
            <li>Oferta válida para Norte de Santander.</li>
          </ol>
        </div>

        <div className={styles.preguntas}>
          <a
            href='https://api.whatsapp.com/send/?phone=573168768730&text&app_absent=0'
            target='_blank'
          >
            <Image
              src='/optativos/wp.png'
              alt='3168768730'
              width={254}
              height={78}
            />
          </a>
        </div>
      </section>
    </Layout>
  )
}
