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
                  src='/lizeth-trujillo/principal.png'
                  alt='Lizeth Trujillo'
                  layout='responsive'
                  width={286}
                  height={429}
                />
              </div>
              <div className={styles.content_info}>
                <h5>Nathalia Lizeth Trujillo Torres</h5>
                <p>
                  Edad: 18 años. <br />
                  Medidas: 87-67-97. <br />       
                  Estudios: Ingeniería ambiental. <br />
                  Agencia de modelos: @classfashionmodels <br />
                  Proyecto: Ser una gran profesional y seguir mostrando las tradiciones y costumbres de Norte de Santander. <br />
                  Hobbies: Bailar danzas folclóricas y modelaje. <br />
                  Fortaleza: Resiliencia y perseverancia. <br />                  
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
                    src='/lizeth-trujillo/foto-1.png'
                    alt='Lizeth Trujillo'
                    layout='responsive'
                    width={492}
                    height={739}
                  />
                </SplideSlide>
                <SplideSlide>
                  <Image
                    src='/lizeth-trujillo/foto-4.png'
                    alt='Lizeth Trujillo'
                    layout='responsive'
                    width={492}
                    height={739}
                  />
                </SplideSlide>
                <SplideSlide>
                  <Image
                    src='/lizeth-trujillo/foto-3.png'
                    alt='Lizeth Trujillo'
                    layout='responsive'
                    width={492}
                    height={739}
                  />
                </SplideSlide>
                <SplideSlide>
                  <Image
                    src='/lizeth-trujillo/foto-5.png'
                    alt='Lizeth Trujillo'
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
                    src='/lizeth-trujillo/c2.png'
                    alt='Lizeth Trujillo'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                </div>
                <div className={styles.image} onClick={() => handleClick(1)}>
                  <Image
                    src='/lizeth-trujillo/c4.png'
                    alt='Lizeth Trujillo'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                </div>
                <div className={styles.image} onClick={() => handleClick(2)}>
                  <Image
                    src='/lizeth-trujillo/c5.png'
                    alt='Lizeth Trujillo'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                </div>
                <div className={styles.image} onClick={() => handleClick(3)}>
                  <Image
                    src='/lizeth-trujillo/c6.png'
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