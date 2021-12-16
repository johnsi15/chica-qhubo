import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import Layout from '../Layout'
import Modal from '../Modal'
import styles from './Perfil.module.css'
import '@splidejs/splide/dist/css/splide.min.css'

export default function ProfileGirl({
  name,
  age,
  measures,
  studies,
  project,
  hobbies,
  photo_profile,
  photos = [],
  strength,
  model_agency,
}) {
  const [showModal, setShowModal] = useState(false)
  const [startSlide, setStartSlide] = useState(0)
  // console.log(name)

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
              <Link href='/chicaqhubo'>
                <a>
                  <Image
                    src='/logo-chica-qhubo.svg'
                    alt='Chica Qhubo'
                    width={247}
                    height={135}
                  />
                </a>
              </Link>
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
                {photo_profile && (
                  <Image
                    src={photo_profile}
                    alt={name}
                    layout='responsive'
                    width={286}
                    height={429}
                  />
                )}
              </div>
              <div className={styles.content_info}>
                <h5>{name}</h5>
                <p>Edad: {age}.</p>
                <p>Medidas: {measures}.</p>
                {studies && <p>Estudios: {studies}.</p>}
                {model_agency && <p>Agencia de modelos: {model_agency}</p>}
                {project && <p>Proyecto: {project}.</p>}
                {hobbies && <p>Hobbies: {hobbies}.</p>}
                {strength && <p>Fortaleza: {strength}.</p>}
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
                {photos.length > 0 &&
                  photos.map((photo, index) => (
                    <SplideSlide key={index}>
                      <Image
                        src={photo}
                        alt={name}
                        layout='responsive'
                        width={492}
                        height={739}
                      />
                    </SplideSlide>
                  ))}
              </Splide>
            </Modal>
            <div className={styles.block_galery}>
              <h3>Galería</h3>
              <div className={styles.content_galery}>
                {photos.length > 0 &&
                  photos.map((photo, index) => (
                    <div
                      className={styles.image}
                      onClick={() => handleClick(index)}
                      key={index}
                    >
                      <Image
                        src={photo}
                        alt={name}
                        layout='responsive'
                        width={493}
                        height={740}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
