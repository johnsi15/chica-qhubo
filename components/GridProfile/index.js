import Image from 'next/image'
import Link from 'next/link'
import styles from './GridProfile.module.css'

export default function GridProfile({ girls }) {
  return (
    <>
      <div className={styles.conten_perfiles}>
        {girls.map(({ _id, name, photo_profile }) => (
          <Link href='/chicaqhubo/alejandra-suarez' key={_id}>
            <div className={styles.perfil}>
              <Image
                src={photo_profile}
                alt={name}
                layout='responsive'
                // objectFit='cover'
                width={493}
                height={740}
              />
              <h3>{name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
