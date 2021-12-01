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
                  src='/alejandra-suarez/principal.png'
                  alt='Alejandra Suarez'
                  layout='responsive'
                  width={286}
                  height={429}
                />
              </div>
              <div className={styles.content_info}>
                <h5>María Alejandra Suárez Niño</h5>
                <p>
                  Edad: 22 años. <br />       
                  Estudios: Ingeniería agroindustrial. <br />
                  Agencia de modelos: @classfashionmodels <br />
                  Proyecto: Terminar la carrera profesional y ser una modelo reconocida. <br />
                  Hobbies: Maquillar y recorrer destinos campestres. <br />
                  Fortaleza: Su familia. <br />                  
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
                    src='/alejandra-suarez/foto-1.png'
                    alt='Alejandra Suarez'
                    layout='responsive'
                    width={492}
                    height={739}
                  />
                </SplideSlide>
                <SplideSlide>
                  <Image
                    src='/alejandra-suarez/foto-2.png'
                    alt='Alejandra Suarez'
                    layout='responsive'
                    width={492}
                    height={739}
                  />
                </SplideSlide>
                <SplideSlide>
                  <Image
                    src='/alejandra-suarez/foto-3.png'
                    alt='Alejandra Suarez'
                    layout='responsive'
                    width={492}
                    height={739}
                  />
                </SplideSlide>
                <SplideSlide>
                  <Image
                    src='/alejandra-suarez/foto-4.png'
                    alt='Alejandra Suarez'
                    layout='responsive'
                    width={492}
                    height={739}
                  />
                </SplideSlide>
                <SplideSlide>
                  <Image
                    src='/alejandra-suarez/foto-5.png'
                    alt='Alejandra Suarez'
                    layout='responsive'
                    width={492}
                    height={739}
                  />
                </SplideSlide>
                <SplideSlide>
                  <Image
                    src='/alejandra-suarez/foto-6.png'
                    alt='Alejandra Suarez'
                    layout='responsive'
                    width={492}
                    height={739}
                  />
                </SplideSlide>
                <SplideSlide>
                  <Image
                    src='/alejandra-suarez/foto-7.png'
                    alt='Alejandra Suarez'
                    layout='responsive'
                    width={492}
                    height={739}
                  />
                </SplideSlide>
                <SplideSlide>
                  <Image
                    src='/alejandra-suarez/foto-8.png'
                    alt='Alejandra Suarez'
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
                    src='/alejandra-suarez/c2.png'
                    alt='Alejandra Suarez'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                </div>
                <div className={styles.image} onClick={() => handleClick(1)}>
                  <Image
                    src='/alejandra-suarez/c3.png'
                    alt='Alejandra Suarez'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                </div>
                <div className={styles.image} onClick={() => handleClick(2)}>
                  <Image
                    src='/alejandra-suarez/c4.png'
                    alt='Alejandra Suarez'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                </div>
                <div className={styles.image} onClick={() => handleClick(3)}>
                  <Image
                    src='/alejandra-suarez/c5.png'
                    alt='Alejandra Suarez'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                </div>
                <div className={styles.image} onClick={() => handleClick(4)}>
                  <Image
                    src='/alejandra-suarez/c6.png'
                    alt='Alejandra Suarez'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                </div>
                <div className={styles.image} onClick={() => handleClick(5)}>
                  <Image
                    src='/alejandra-suarez/c7.png'
                    alt='Alejandra Suarez'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                </div>
                <div className={styles.image} onClick={() => handleClick(6)}>
                  <Image
                    src='/alejandra-suarez/c8.png'
                    alt='Alejandra Suarez'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                </div>
                <div className={styles.image} onClick={() => handleClick(7)}>
                  <Image
                    src='/alejandra-suarez/c9.png'
                    alt='Alejandra Suarez'
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