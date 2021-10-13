import styles from '../../styles/Perfil.module.css'
import Layout from '../../components/Layout'

export default function Sandra() {
  return (
    <>
      <Layout>
        <section className={styles.background}>
          <div className={styles.container}>
            <h3>Hola Sandra :D</h3>
          </div>
        </section>
      </Layout>
    </>
  )
}
