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
                  src='/maria-robles/principal.png'
                  alt='María Robles'
                  layout='responsive'
                  width={286}bb
                  height={429}
                />
              </div>
              <div className={styles.content_info}>
                <h5>Doris María Robles Acosta</h5>
                <p>
                  Edad: 18 años. <br />
                  Medidas: 61-76-78. <br />       
                  Agencia de modelos: @classfashionmodels <br />
                  Proyecto: Quiere estudiar Odontología y ser una modelo reconocida. <br />
                  Hobbies: Bailar y disfrutar de cada momento de la vida. <br />
                  Fortaleza: Compresiva, amigable y carismática. <br />                  
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
                    src='/maria-robles/foto-1.png'
                    alt='María Robles'
                    layout='responsive'
                    width={492}
                    height={739}
                  />
                </SplideSlide>
                <SplideSlide>
                  <Image
                    src='/maria-robles/foto-2.png'
                    alt='María Robles'
                    layout='responsive'
                    width={492}
                    height={739}
                  />
                </SplideSlide>
                <SplideSlide>
                  <Image
                    src='/maria-robles/foto-3.png'
                    alt='María Robles'
                    layout='responsive'
                    width={492}
                    height={739}
                  />
                </SplideSlide>
                <SplideSlide>
                  <Image
                    src='/maria-robles/foto-4.png'
                    alt='María Robles'
                    layout='responsive'
                    width={492}
                    height={739}
                  />
                </SplideSlide>
                <SplideSlide>
                  <Image
                    src='/maria-robles/foto-6.png'
                    alt='María Robles'
                    layout='responsive'
                    width={492}
                    height={739}
                  />
                </SplideSlide>
                <SplideSlide>
                  <Image
                    src='/maria-robles/foto-5.png'
                    alt='María Robles'
                    layout='responsive'
                    width={492}
                    height={739}
                  />
                </SplideSlide>
                <SplideSlide>
                  <Image
                    src='/maria-robles/foto-7.png'
                    alt='María Robles'
                    layout='responsive'
                    width={492}
                    height={739}
                  />
                </SplideSlide>
                <SplideSlide>
                  <Image
                    src='/maria-robles/foto-8.png'
                    alt='María Robles'
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
                    src='/maria-robles/c2.png'
                    alt='María Robles'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                </div>
                <div className={styles.image} onClick={() => handleClick(1)}>
                  <Image
                    src='/maria-robles/c3.png'
                    alt='María Robles'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                </div>
                <div className={styles.image} onClick={() => handleClick(2)}>
                  <Image
                    src='/maria-robles/c5.png'
                    alt='María Robles'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                </div>
                <div className={styles.image} onClick={() => handleClick(3)}>
                  <Image
                    src='/maria-robles/c6.png'
                    alt='María Robles'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                </div>
                <div className={styles.image} onClick={() => handleClick(4)}>
                  <Image
                    src='/maria-robles/c7.png'
                    alt='María Robles'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                </div>
                <div className={styles.image} onClick={() => handleClick(5)}>
                  <Image
                    src='/maria-robles/c8.png'
                    alt='María Robles'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                </div>
                <div className={styles.image} onClick={() => handleClick(6)}>
                  <Image
                    src='/maria-robles/c9.png'
                    alt='María Robles'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                </div> 
                <div className={styles.image} onClick={() => handleClick(7)}>
                  <Image
                    src='/maria-robles/c10.png'
                    alt='María Robles'
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