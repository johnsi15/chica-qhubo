import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import Layout from '../../components/Layout'
import Modal from '../../components/Modal'
import styles from '../../styles/Perfil.module.css'
import '@splidejs/splide/dist/css/splide.min.css'

export default function ProfileOne() {
  const [showModal, setShowModal] = useState(false)
  const [startSlide, setStartSlide] = useState(0)

  const handleClick = (index) => {
    setStartSlide(index)
    setShowModal(true)
  }

  return (
    <>
      <Layout>
        <section className={styles.background}>
          <div className={styles.content}>
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
            <div className={styles.block_title}>
              <div className={styles.title}>
                <h3>Chica Q'hubo del día</h3>
              </div>
              <div className={styles.patrocinio}>
                <p>Espacio patrocinado por:</p>
                <div className={styles.img_patrocinio}>
                  <Image
                    src='/logo-opitienda.png'
                    alt='Opitienda'
                    width={155}
                    height={34}
                  />
                </div>
              </div>
            </div>
            <div className={styles.block_content}>
              <div className={styles.content_image}>
                <Image
                  src='/marcela-nieves/principal.png'
                  alt='Marcela Nieves'
                  layout='responsive'
                  width={286}
                  height={429}
                />
              </div>
              <div className={styles.content_info}>
                <h5>Lina Marcela Nieves Arboleda</h5>
                <p>
                  Edad: 24 años. <br />
                  Medidas: 76-109-97. <br />                  
                  Estudios: Marketing digital. <br />
                  Agencia de modelo: @classfashionmodels <br />
                  Proyectos:  Terminar sus estudios de marketing, participar en el Reinado Señora Colombiana y ser una modelo reconocida nacionalmente. <br />
                  Hobbies:  Leer, bailar, comer, investigar y disfrutar de cada pequeño detalle que le da la vida.  <br />
                  Fortaleza: La empatía.
                </p>
              </div>
            </div>
            {/* <button onClick={() => handleClick()}>Open Modal</button> */}
            <Modal onClose={() => setShowModal(false)} show={showModal}>
              <Splide
                options={{
                  type: 'loop',
                  start: startSlide,
                }}
              >
                <SplideSlide>
                  <Image
                    src='/marcela-nieves/foto-4.png'
                    alt='Marcela Nieves'
                    layout='responsive'
                    width={492}
                    height={739}
                  />
                </SplideSlide>
                <SplideSlide>
                  <Image
                    src='/marcela-nieves/foto-3.png'
                    alt='Marcela Nieves'
                    layout='responsive'
                    width={492}
                    height={739}
                  />
                </SplideSlide>
                <SplideSlide>
                  <Image
                    src='/marcela-nieves/foto-5.png'
                    alt='Marcela Nieves'
                    layout='responsive'
                    width={492}
                    height={739}
                  />
                </SplideSlide>
                <SplideSlide>
                  <Image
                    src='/marcela-nieves/foto-7.png'
                    alt='Marcela Nieves'
                    layout='responsive'
                    width={492}
                    height={739}
                  />
                </SplideSlide>
              </Splide>
            </Modal>
            <div className={styles.block_galery}>
              <h3>Galería</h3>
              <div className={styles.content_galery}>
                <div className={styles.image} onClick={() => handleClick(0)}>
                  <Image
                    src='/marcela-nieves/c5.png'
                    alt='Marcela Nieves'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                </div>
                <div className={styles.image} onClick={() => handleClick(1)}>
                  <Image
                    src='/marcela-nieves/c4.png'
                    alt='Marcela Nieves'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                </div>
                <div className={styles.image} onClick={() => handleClick(2)}>
                  <Image
                    src='/marcela-nieves/c6.png'
                    alt='Marcela Nieves'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                </div>
                <div className={styles.image} onClick={() => handleClick(3)}>
                  <Image
                    src='/marcela-nieves/c8.png'
                    alt='Marcela Nieves'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
