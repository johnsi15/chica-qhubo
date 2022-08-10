import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Promociones.module.css'

export default function Promociones() {
  return (
    <Layout title='Optativos Qhubo Cúcuta'>
      <section className={styles.background}>
        <div className={styles.header}>
          <div className={styles.banner}>
            <Image
              src='/optativos/cine-d.png'
              alt='Colecciona los cupones de Qhubo'
              width={1110}
              height={300}
            />
          </div>
          <div className={styles.bannerMobile}>
            <Image
              src='/optativos/cine-m.png'
              alt='Colecciona los cupones de Qhubo'
              width={320}
              height={100}
            />
          </div>
          {/* <div className={styles.container_plancha}>
            <div className={styles.left}>
              <h3>Portátil Asus X415</h3>
              <div className={styles.ficha_tecnica}>
                <ul>
                  <li>• Intel® Core i3-1115G4</li>
                  <li>• 8GB de RAM</li>
                  <li>• 256GB de Disco SSD</li>
                  <li>• 14 pulgadas</li>
                  <li>• Pantalla LED</li>
                  <li>• Windows 11 HOME</li>
                </ul>
              </div>
            </div>
            <div className={styles.plancha}>
              <Image
                src='/optativos/laptop.png'
                alt='Portátil Asus X415'
                width={424}
                height={424}
              />
            </div>
          </div> */}
        </div>

        <div className={styles.pasos}>
          <Image
            src='/optativos/pasos2.svg'
            alt='Pasos'
            className={styles.texto}
            width={427}
            height={99}
          />
          {/* <div className={styles.flecha}>
            <Image
              src='/optativos/down.svg'
              alt='Flecha'
              width={81}
              height={79}
            />
          </div> */}
        </div>

        <div className={styles.terminos}>
          <div className={styles.list}>
            <div className={styles.item}>
              Compra el periódico que trae el cupón.
            </div>
            <div className={styles.item}>
              Recorta el cupón que aparecerá todos los días en La Opinión.
            </div>
            <div className={styles.item}>
              Colecciona 15 cupones en cualquier orden.
            </div>
            <div className={styles.item}>
              Lleva los cupones y $31.000 a nuestras instalaciones en la Av 4
              #16-12 B. La playa.
            </div>
            <div className={styles.item}>Válido hasta agotar existencias.</div>
            <div className={styles.item}>
              Oferta válida del 11 de agosto al 10 de septiembre de 2022.
            </div>
            <div className={styles.item}>
              Oferta válida para Cúcuta (Norte de Santander).
            </div>
            <div className={styles.item}>
              Las boletas 2D para cine tienen una vigencia de 1 año.
            </div>
          </div>
        </div>

        <div className={styles.preguntas}>
          <a
            href='https://api.whatsapp.com/send/?phone=573168768730&text&app_absent=0'
            target='_blank'
          >
            <Image
              src='/optativos/number.svg'
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
