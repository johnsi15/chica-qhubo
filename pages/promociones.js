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
              src='/optativos/bg-arroz-3.png'
              alt='Colecciona los cupones de Qhubo'
              width={1110}
              height={300}
            />
          </div>
          <div className={styles.bannerMobile}>
            <Image
              src='/optativos/bg-arroz-3-m.png'
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
              Recorta el cupón que aparecerá todos los días en tu diario Q’hubo
              Cúcuta.
            </div>
            <div className={styles.item}>
              Colecciona 30 cupones en cualquier orden.
            </div>
            <div className={styles.item}>
              Comunícate al 316 876 8730 y con tus cupones +$30.000 recibe tu
              mini mercado en tu domicilio (Vlr del domicilio $6.000 solo
              Cúcuta) o recorta y lleva los cupones a nuestras instalaciones en
              la Av 4 #16-12 B. La playa.
            </div>
            <div className={styles.item}>
              Recibirás 5Kg de Arroz Zulia, 2.5 Kg de azúcar El Palacio, 2 Kg de
              harina Arepasan y 250gr de café para colar Aroma.
            </div>
            <div className={styles.item}>
              Válido del 1 de marzo del 2023 al 31 de marzo del 2023
            </div>
            <div className={styles.item}>
              Oferta válida para Norte de Santander.
            </div>
            <div className={styles.item}>Aplican términos y condiciones.</div>
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
