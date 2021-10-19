import Image from 'next/image'
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
            <div className={styles.logo}>
              <Image
                src='/logo-chica-qhubo.svg'
                alt='Chica Qhubo'
                width={247}
                height={135}
              />
            </div>
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
                  src='/liseth-maldonado/c1.png'
                  alt='Liseth Catalina'
                  layout='responsive'
                  width={286}
                  height={429}
                />
              </div>
              <div className={styles.content_info}>
                <h5>Liseth Catalina Maldonado Ortiz</h5>
                <p>
                  Edad: 21 años <br />
                  Medidas: 86-57-88 <br />
                  Estudios: Comunicación Social (5to Semestre) <br />
                  Proyectos: Se visiona siendo una excelente comunicadora
                  social, desempeñándose como presentadora y complementarlo con
                  el modelaje. <br />
                  Su pasión: Bailar y leer. <br />
                  Fortaleza: Segura de sí misma. <br />
                  Una palabra que la define: Carismática.
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
                    src='/liseth-maldonado/c2.png'
                    alt='Liseth Catalina'
                    layout='responsive'
                    width={492}
                    height={739}
                  />
                </SplideSlide>
                <SplideSlide>
                  <Image
                    src='/liseth-maldonado/c3.png'
                    alt='Liseth Catalina'
                    layout='responsive'
                    width={492}
                    height={739}
                  />
                </SplideSlide>
                <SplideSlide>
                  <Image
                    src='/liseth-maldonado/c4.png'
                    alt='Liseth Catalina'
                    layout='responsive'
                    width={492}
                    height={739}
                  />
                </SplideSlide>
                <SplideSlide>
                  <Image
                    src='/liseth-maldonado/c5.png'
                    alt='Liseth Catalina'
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
                    src='/liseth-maldonado/miniatura1.png'
                    alt='Liseth Catalina'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                </div>
                <div className={styles.image} onClick={() => handleClick(1)}>
                  <Image
                    src='/liseth-maldonado/miniatura2.png'
                    alt='Liseth Catalina'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                </div>
                <div className={styles.image} onClick={() => handleClick(2)}>
                  <Image
                    src='/liseth-maldonado/miniatura3.png'
                    alt='Liseth Catalina'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                </div>
                <div className={styles.image} onClick={() => handleClick(3)}>
                  <Image
                    src='/liseth-maldonado/miniatura4.png'
                    alt='Liseth Catalina'
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
