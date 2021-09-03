import styles from './RegistrationForm.module.css'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

export default function RegistrationForm() {
  const [filesUploaded, setFilesUploaded] = useState([])
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    console.log('Submit')
  }

  useEffect(() => {
    // const filesArray = []
    console.log(watch('images'))
    if (watch('images').length > 0) {
      // console.log('ok paso')
      const files = watch('images')
      for (const property in files) {
        if (typeof files[property] === 'object') {
          let nameFile = files[property].name
          console.log(`${property}: ${nameFile}`)
          setFilesUploaded([...filesUploaded, nameFile])
          // filesArray.push(nameFile)
        }
      }
    }
  }, [watch('images')])

  console.log('this is file state ')
  console.log(filesUploaded)
  return (
    <>
      <form
        className={styles.form}
        encType='multipart/form-data'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={styles.field}>
          <label htmlFor='names'>Nombres y Apellidos</label>
          <input type='text' name='names' id='names' />
        </div>
        <div className={styles.field}>
          <label htmlFor='birthday'>Fecha de Nacimiento</label>
          <input type='date' name='birthday' id='birthday' />
        </div>
        <div className={styles.field}>
          <label htmlFor='email'>Correo Electrónico</label>
          <input type='email' name='email' id='email' />
        </div>
        <div className={styles.field}>
          <label htmlFor='phone'>Celular</label>
          <input type='text' name='phone' id='phone' />
        </div>
        <div className={styles.field}>
          <label htmlFor='socialNetwork'>
            Redes sociales <span>(Mínimos 5k seguidores)</span>
          </label>
          <input type='text' name='socialNetwork' id='socialNetwork' />
        </div>
        <div className={styles.field}>
          <label htmlFor='images'>Subir Foto</label>
          <div className={styles.fileContainer}>
            <input
              {...register('images', { required: true })}
              type='file'
              name='images'
              id='images'
              multiple
            />
            <span>Seleccionar archivo</span>
          </div>
          {errors.images && <span>This field is required</span>}
        </div>
        <div className={`${styles.field} ${styles.terminos}`}>
          <label htmlFor='terminos'>
            Acepto los{' '}
            <a
              href='https://www.laopinion.com.co/terminos-condiciones'
              target='_blank'
            >
              Términos y condiciones
            </a>{' '}
            y el tratamiento de mis datos conforme a la{' '}
            <a
              href='https://www.laopinion.com.co/politica-de-tratamiento-de-datos-personales'
              target='_blank'
            >
              Política de Tratamiento de datos de La Opinión.
            </a>
          </label>
          <input type='checkbox' name='terminos' id='terminos' />
        </div>
        <div className={styles.field}>
          <button className={styles.btn}>Enviar</button>
        </div>
      </form>
    </>
  )
}
