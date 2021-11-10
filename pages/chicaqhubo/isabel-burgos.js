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
                  src='/isabel-burgos/foto-1.png'
                  alt='Isabel Burgos'
                  layout='responsive'
                  width={286}
                  height={429}
                />
              </div>
              <div className={styles.content_info}>
                <h5>María Isabel Burgos Olivares</h5>
                <p>
                  Edad: 22 años. <br />  
                  Medidas: 68-65-95. <br />             
                  Estudios: Administración pública. <br />
                  Agencia de modelos: @classfashionmodels. <br />
                  Concurso de belleza: Candidata al Reinado Señora Mundo Colombia. <br />
                  Proyectos: Ser una gran empresaria y modelo. <br />
                  Hobbies: Leer, nadar, modelar, viajar, gimnasio. <br />
                  Fortaleza: Ser 100% positiva cada día y cree que nada es imposible.
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
                    src='/isabel-burgos/foto-7.png'
                    alt='Isabel Burgos'
                    layout='responsive'
                    width={492}
                    height={739}
                  />
                </SplideSlide>
                <SplideSlide>
                  <Image
                    src='/isabel-burgos/foto-2.png'
                    alt='Isabel Burgos'
                    layout='responsive'
                    width={492}
                    height={739}
                  />
                </SplideSlide>
                <SplideSlide>
                  <Image
                    src='/isabel-burgos/foto-4.png'
                    alt='Isabel Burgos'
                    layout='responsive'
                    width={492}
                    height={739}
                  />
                </SplideSlide>
                <SplideSlide>
                  <Image
                    src='/isabel-burgos/foto-5.png'
                    alt='Isabel Burgos'
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
                    src='/isabel-burgos/c8.png'
                    alt='Isabel Burgos'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                </div>
                <div className={styles.image} onClick={() => handleClick(1)}>
                  <Image
                    src='/isabel-burgos/c3.png'
                    alt='Isabel Burgos'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                </div>
                <div className={styles.image} onClick={() => handleClick(2)}>
                  <Image
                    src='/isabel-burgos/c5.png'
                    alt='Isabel Burgos'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                </div>
                <div className={styles.image} onClick={() => handleClick(3)}>
                  <Image
                    src='/isabel-burgos/c6.png'
                    alt='Isabel Burgos'
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