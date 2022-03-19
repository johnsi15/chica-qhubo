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
            <h3>Espectacular Plancha inalámbrica</h3>
            <div className={styles.plancha}>
            <Image
              src='/optativos/plancha.png'
              alt='Plancha'
              width={337}
              height={337}
            />
             </div>
          </div>
        </div>
        <div className={styles.ficha_tecnica}>
          <ul>
            <li>• Con cable flexible de 360°.</li>
            <li>• Con indicador de luz.. </li>
            <li>
              • Plancha de vapor inalámbrica función de pulverización y control
              de vapor.
            </li>
            <li>• Función de auto limpieza. </li>
            <li>• Con control de temperatura ajustable.</li>
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
              Comunicate al 316 876 8730 y con tus cupones +$62.550 recibe el
              producto en tu domicilio (Vlr del domicilio $10.000) o recorta y
              lleva los cupones a nuestras instalaciones en la Av 4 #16-12 B. La
              playa.
            </li>
            <li>Válido hasta agotar existencias.</li>
            <li>
              Oferta válida del 22 de marzo al 26 de abril. (Si tienes los
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
