import styles from './RegistrationForm.module.css'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

export default function RegistrationForm() {
  const [filesUploaded, setFilesUploaded] = useState([])
  const [image, setImage] = useState([])

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    console.log('Submit')
    // postData(data, image)
  }

  const postData = async (data, images) => {
    try {
      data = { ...data, images: [...filesUploaded] }
      console.log(data)
      // console.log(filesUploaded)
      console.log('images -> ')
      console.log(images)

      images.forEach((img) => {
        uploadToServer(img)
      })
      // uploadToServer(images)

      setFilesUploaded([])
      setImage([])
      // const res = await fetch('/api/girl', {
      //   method: 'POST',
      //   headers: { 'Content-type': 'application/json' },
      //   body: JSON.stringify(data),
      // })

      // const dataRes = await res.json()
      // console.log(dataRes)
      // console.log(errors)
    } catch (error) {
      console.log(error)
    }
  }

  const uploadToServer = async (images) => {
    const body = new FormData()
    body.append('file', images)
    const res = await fetch('/api/file', {
      method: 'POST',
      body,
    })
    console.log('res uploadToServer ')
    console.log(res)
  }

  /*
    https://www.youtube.com/watch?v=XlAs-Lid-TA
    https://github.com/satansdeer/react-hook-form-file-input/blob/master/src/App.js
    https://www.youtube.com/watch?v=PEGUFi9Sx-U
    https://github.com/satansdeer/rhf-file-upload
    https://codesandbox.io/s/thyb0?file=/pages/index.js:209-214
    https://react-hook-form.com/get-started
    https://stackoverflow.com/questions/33531140/get-file-size-in-mb-or-kb/33531404
  */

  const imageNames = []
  const imageFiles = []

  if (watch('images')) {
    console.log('watch images -> ')
    const files = watch('images')
    for (const property in files) {
      if (typeof files[property] === 'object') {
        let nameFile = files[property].name.replaceAll(' ', '-').trim()
        // console.log(`${property}: ${nameFile}`)
        imageNames.push(nameFile)
        imageFiles.push(files[property])
      }
    }
  }

  useEffect(() => {
    console.log(watch('images'))
    if (watch('images').length > 0) {
      console.log('watch images -> ')
      // const files = watch('images')
      setImage([...image, ...imageNames])
      setFilesUploaded([...filesUploaded, ...imageFiles])
    }
  }, [watch('images')])

  console.log('this is file state ')
  console.log(filesUploaded)
  console.log('this is image state ')
  console.log(image)

  return (
    <>
      <form
        className={styles.form}
        encType='multipart/form-data'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={styles.field}>
          <label htmlFor='names'>Nombres y Apellidos</label>
          <input
            {...register('names', { required: false })}
            type='text'
            name='names'
            id='names'
          />
          {errors.names && <span>This field is required</span>}
        </div>
        <div className={styles.field}>
          <label htmlFor='birthday'>Fecha de Nacimiento</label>
          <input
            {...register('birthday', { required: false })}
            type='date'
            name='birthday'
            id='birthday'
          />
          {errors.birthday && <span>This field is required</span>}
        </div>
        <div className={styles.field}>
          <label htmlFor='email'>Correo Electrónico</label>
          <input
            {...register('email', { required: false })}
            type='email'
            name='email'
            id='email'
          />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className={styles.field}>
          <label htmlFor='phone'>Celular</label>
          <input
            {...register('phone', { required: false })}
            type='text'
            name='phone'
            id='phone'
          />
          {errors.images && <span>This field is required</span>}
        </div>
        <div className={styles.field}>
          <label htmlFor='social_network'>
            Redes sociales <span>(Mínimos 5k seguidores)</span>
          </label>
          <input
            {...register('social_network', { required: false })}
            type='text'
            name='social_network'
            id='social_network'
          />
        </div>
        <div className={styles.field}>
          <label htmlFor='images'>Subir Foto</label>
          <div className={styles.fileContainer}>
            <input
              {...register('images', { required: false })}
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
          <input
            {...register('terminos', { required: false })}
            type='checkbox'
            name='terminos'
            id='terminos'
          />
          {errors.terminos && <span>This field is required</span>}
        </div>
        <div className={styles.field}>
          <button className={styles.btn}>Enviar</button>
        </div>
        {image.length > 0 && image.map((item) => <p>{item}</p>)}
      </form>
    </>
  )
}
