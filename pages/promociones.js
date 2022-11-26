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
              src='/optativos/navidad_d.png'
              alt='Colecciona los cupones de Qhubo'
              width={1110}
              height={300}
            />
          </div>
          <div className={styles.bannerMobile}>
            <Image
              src='/optativos/navidad_m.png'
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
              Recorta el cupón que aparecerá todos los días en Q'hubo.
            </div>
            <div className={styles.item}>
              Colecciona 15 cupones en cualquier orden.
            </div>
            <div className={styles.item}>
              Lleva o envía tus cupones dentro de un sobre manila a las
              instalaciones del diario La Opinión. Av 4 #16-12 B. La playa.
            </div>
            <div className={styles.item}>
              El sobre debe estar marcado con la referencia Concurso Ancheta
              Navideña tu Nombre y Apellido, Número de cédula, Número de
              celular, email y dirección.
            </div>
            <div className={styles.item}>
              Oferta válida del 28 de noviembre al 19 de diciembre. Son 3
              anchetas, 3 ganadores.
            </div>
            <div className={styles.item}>
              El sorteo se hará el 20 de diciembre.
            </div>
            <div className={styles.item}>
              Las entregas de las anchetas se harán el 20 y 21 de diciembre en
              el Diario La Opinión.
            </div>
            <div className={styles.item}>
              Oferta Válida para Cúcuta y Norte de Santander.
            </div>
            <div className={styles.item}>
              Q'hubo no se hace cargo de envíos de los productos.
            </div>
            <div className={styles.item}>
              El premio no será cambiado por dinero en ningún caso.
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
