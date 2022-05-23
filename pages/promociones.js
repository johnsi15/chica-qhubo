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
          </div>
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
          <div className={styles.list}>
            <div className={styles.item}>
              Compra el periódico que trae el cupón
            </div>
            <div className={styles.item}>
              Recorta los cupones del producto que desees.
            </div>
            <div className={styles.item}>
              Colecciona 20 cupones en cualquier orden.
            </div>
            <div className={styles.item}>
              Cuando completes los 20 cupones insértalos en un sobre de manila.
              Marca el sobre con los siguientes datos:
              <p>• Referencia: Concursos Cupones Computador</p>
              <p>• Nombre completo, Cédula, Dirección, Celular, Email.</p>
            </div>
            <div className={styles.item}>
              Acércate a nuestras oficinas y deposita el sobre en la urna
              asignada y/o envía el sobre a las oficinas de La Opinión (Av. 4 #
              16-12 B. La Playa) Oferta válida del 23 de mayo al 30 de junio de
              2022
            </div>
            <div className={styles.item}>
              Fecha del sorteo: Julio 1 de 2022{' '}
            </div>
            <div className={styles.item}>
              El tiempo límite para la respuesta del ganador es de 20 días, si
              no se confirma se sorteará nuevamente.
            </div>
            <div className={styles.item}>
              Oferta válida para Norte de Santander.
            </div>
          </div>
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
