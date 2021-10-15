import Image from 'next/image'
import styles from '../../styles/Perfil.module.css'
import Layout from '../../components/Layout'

export default function mostrar_perfil() {
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
                    src='/adpone.png'
                    alt='Adpone'
                    width={155}
                    height={34}
                  />
                </div>
              </div>
            </div>
            <div className={styles.block_content}>
              <div className={styles.content_image}>
                <Image
                  src='/principal_img.png'
                  alt='Laura Guedez'
                  layout='responsive'
                  width={286}
                  height={429}
                />
              </div>
              <div className={styles.content_info}>
                <h5>Laura Guedez</h5>
                <p>
                  Nació en Bogotá el 8 de septiembre de 1995. Tiene 24 años. Es
                  profesional en Negocios Internacionales de la Fundación
                  Universitaria Empresarial de la Cámara de Comercio de Bogotá y
                  está especializándose en Marketing Mix.
                </p>
                <p>
                  <strong> Laura Guedez en cinco datos:</strong> <br />
                  •&nbsp;&nbsp;En 15 años quiere dirigir una empresa con impacto
                  internacional. <br />
                  •&nbsp;&nbsp;Le gustaría conocer la Amazonía colombiana.
                  <br />
                  •&nbsp;&nbsp;Su mayor antojo es la milhojas. <br />
                  •&nbsp;&nbsp;Ha trabajado como gerente de negocios
                  internacionales y mercadeo. <br />
                  •&nbsp;&nbsp;Admira a la cantante Shakira por ser una pionera
                  de la educación, gracias a sus fundaciones.
                </p>
              </div>
            </div>
            <div className={styles.block_galery}>
              <h3>Galería</h3>
              <div className={styles.content_galery}>
                <div className={styles.image}>
                  <Image
                    src='/galeria-1.png'
                    alt='Laura Guedez'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                </div>
                <div className={styles.image}>
                  <Image
                    src='/galeria-1.png'
                    alt='Laura Guedez'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                </div>
                <div className={styles.image}>
                  <Image
                    src='/galeria-1.png'
                    alt='Laura Guedez'
                    layout='responsive'
                    width={214}
                    height={214}
                  />
                </div>
                <div className={styles.image}>
                  <Image
                    src='/galeria-1.png'
                    alt='Laura Guedez'
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
