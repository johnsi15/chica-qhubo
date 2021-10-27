import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'
import styles from '../../styles/Home.module.css'


export default function Perfiles() {
  return (
    <>
      <Layout>
        <div className={styles.background}>
          <div className={styles.header}>
            <div className={styles.logo}>
              <Image
                src='/logo-chica-qhubo.svg'
                alt='Chica Qhubo'
                width={247}
                height={135}
              />
            </div>

            <h3 className={styles.profile}>
              <Link href='/chicaqhubo/mariana-hidalgo'>
                <a>Ver la Chica Q'hubo del día</a>
              </Link>
            </h3>
          </div>
          <div className={styles.container_perfiles}>
            <div className={styles.title_perfiles}>            
                <h3>Chica Q'Hubo del Día</h3>
            </div>
            <div className={styles.letras_buscador}>
                <button>A</button>
                <button>B</button>
                <button>C</button>
                <button>D</button>
                <button>E</button>
            </div>
            <div className={styles.conten_perfiles}>
                <div className={styles.perfil}>
                    <Image
                        src='/mariana-hidalgo/c4.png'
                        alt='Mariana Hidalgo'
                        layout='responsive'
                        width={214}
                        height={214}
                    />
                    <h3>Mariana Hidalgo</h3>
                </div> 
                <div className={styles.perfil}>
                    <Image
                        src='/mariana-hidalgo/c4.png'
                        alt='Mariana Hidalgo'
                        layout='responsive'
                        width={214}
                        height={214}
                    />
                    <h3>Mariana Hidalgo</h3>
                </div> 
                <div className={styles.perfil}>
                    <Image
                        src='/mariana-hidalgo/c4.png'
                        alt='Mariana Hidalgo'
                        layout='responsive'
                        width={214}
                        height={214}
                    />
                    <h3>Mariana Hidalgo</h3>
                </div> 
                <div className={styles.perfil}>
                    <Image
                        src='/mariana-hidalgo/c4.png'
                        alt='Mariana Hidalgo'
                        layout='responsive'
                        width={214}
                        height={214}
                    />
                    <h3>Mariana Hidalgo</h3>
                </div> 
                <div className={styles.perfil}>
                    <Image
                        src='/mariana-hidalgo/c4.png'
                        alt='Mariana Hidalgo'
                        layout='responsive'
                        width={214}
                        height={214}
                    />
                    <h3>Mariana Hidalgo</h3>
                </div> 
                <div className={styles.perfil}>
                    <Image
                        src='/mariana-hidalgo/c4.png'
                        alt='Mariana Hidalgo'
                        layout='responsive'
                        width={214}
                        height={214}
                    />
                    <h3>Mariana Hidalgo</h3>
                </div>
                <div className={styles.perfil}>
                    <Image
                        src='/mariana-hidalgo/c4.png'
                        alt='Mariana Hidalgo'
                        layout='responsive'
                        width={214}
                        height={214}
                    />
                    <h3>Mariana Hidalgo</h3>
                </div>
                <div className={styles.perfil}>
                    <Image
                        src='/mariana-hidalgo/c4.png'
                        alt='Mariana Hidalgo'
                        layout='responsive'
                        width={214}
                        height={214}
                    />
                    <h3>Mariana Hidalgo</h3>
                </div> 
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

