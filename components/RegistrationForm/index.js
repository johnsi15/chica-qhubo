import styles from './RegistrationForm.module.css'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
  names: yup.string().required('Required'),
  images: yup.mixed().required('You need to provide a file'),
  // .test('fileSize', 'The file is too large', (value) => {
  //   console.log('yup value')
  //   console.log(value)
  //   if (value.length > 0) {
  //     Array.from(value).forEach((file, index) => {
  //       if (file.size <= 2000000) {
  //         return true
  //       }
  //     })
  //   }
  //   // return value && value[0].size <= 2000000
  //   return false
  // }),
  // .test('type', 'We only support jpeg', (value) => {
  //   return value && value[0].type === 'image/jpeg'
  // }),
})

export default function RegistrationForm() {
  const [filesUploaded, setFilesUploaded] = useState([])
  const [image, setImage] = useState([])

  const {
    register,
    handleSubmit,
    watch,
    setFocus,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    console.log('Submit')
    postData(data)
  }

  const postData = async (data) => {
    try {
      data = { ...data, images: image }
      // const res = await fetch('/api/girl', {
      //   method: 'POST',
      //   headers: { 'Content-type': 'application/json' },
      //   body: JSON.stringify(data),
      // })

      // const dataRes = await res.json()
      // console.log(dataRes)
      // console.log(errors)
      uploadToServer(data)

      setFilesUploaded([])
      setImage([])
    } catch (error) {
      console.log(error)
    }
  }

  const uploadToServer = async (data) => {
    // const body = new FormData()
    // body.append('photos', filesUploaded)

    const config = {
      headers: { 'content-type': 'multipart/form-data' },
      onUploadProgress: (event) => {
        console.log(
          `Current progress:`,
          Math.round((event.loaded * 100) / event.total)
        )
      },
    }

    const formData = new FormData()

    formData.append('folder', cleanText(data.names)) // Importante definir el nombre del folder antes de las images

    Array.from(filesUploaded).forEach((file, index) => {
      // console.log(file[index].name)
      // Object.defineProperty(file, 'name', {
      //   writable: true,
      //   value: `${data.names}/${cleanText(file.name)}`,
      // })
      formData.append('images', file)
    })

    // formData.append('names', data.names)

    const res = await axios.post('/api/uploads', formData, config)
    // const res = await fetch('/api/file', {
    //   method: 'POST',
    //   body,
    // })
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

  function cleanText(text) {
    return text
      .replaceAll(' ', '-')
      .replaceAll(/[&\/\\#,+()$~%´'"ñ:*¿?!¡;<>{}]/g, '')
      .toLowerCase()
      .trim()
  }

  const imageNames = []
  let imageFiles = []

  if (watch('images')) {
    console.log('watch images -> ')
    const files = watch('images')
    // console.log('This si files images')
    // console.log(files)
    for (const property in files) {
      if (typeof files[property] === 'object') {
        let nameFile = cleanText(files[property].name)
          .replaceAll(' ', '-')
          .replaceAll(/[&\/\\#,+()$~%´'":*?<>{}]/g, '')
          .toLowerCase()
          .trim()
        let nameFolder = cleanText(watch('names'))
        // console.log(`${property}: ${nameFile}`)
        imageNames.push(`${nameFolder}/${nameFile}`)
        // imageFiles.push(files)
      }
    }
    imageFiles = [...files]
  }

  useEffect(() => {
    // console.log(watch('images'))
    if (watch('images').length > 0) {
      // console.log('watch images -> ')
      // const files = watch('images')
      setImage([...image, ...imageNames])
      setFilesUploaded([...filesUploaded, ...imageFiles])
    }
  }, [watch('images')])

  useEffect(() => {
    setFocus('names')
  }, [setFocus])

  console.log('this is file state ')
  console.log(filesUploaded)
  // console.log('this is image state ')
  // console.log(image)

  console.log(errors.names)
  console.log(errors.images)

  useEffect(() => {
    if (errors.images && errors.images.type === 'lessThan2MB') {
      setFilesUploaded([])
      setImage([])
    }
  }, [errors.images])

  return (
    <>
      <form
        className={styles.form}
        encType='multipart/form-data'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={`${styles.field} ${styles.required}`}>
          <label htmlFor='names'>Nombres y Apellidos</label>
          <input
            {...register('names', { required: true, maxLength: 100 })}
            type='text'
            name='names'
            id='names'
          />
          {errors.names && (
            <span className={styles.error_input}>
              Este campo es obligatorio
            </span>
          )}
        </div>
        <div className={`${styles.field} ${styles.required}`}>
          <label htmlFor='birthday'>Fecha de Nacimiento</label>
          <input
            {...register('birthday', { required: true })}
            type='date'
            name='birthday'
            id='birthday'
          />
          {errors.birthday && (
            <span className={styles.error_input}>
              Este campo es obligatorio
            </span>
          )}
        </div>
        <div className={`${styles.field} ${styles.required}`}>
          <label htmlFor='document'>Cédula de Ciudadanía</label>
          <input
            {...register('document', { required: true, maxLength: 12 })}
            type='text'
            name='document'
            id='document'
          />
          {errors.document && (
            <span className={styles.error_input}>
              Este campo es obligatorio
            </span>
          )}
        </div>
        <div className={`${styles.field} ${styles.required}`}>
          <label htmlFor='email'>Correo Electrónico</label>
          <input
            {...register('email', { required: true })}
            type='email'
            name='email'
            id='email'
          />
          {errors.email && (
            <span className={styles.error_input}>
              Este campo es obligatorio
            </span>
          )}
        </div>
        <div className={`${styles.field} ${styles.required}`}>
          <label htmlFor='phone'>Celular</label>
          <input
            {...register('phone', { required: true, maxLength: 10 })}
            type='text'
            name='phone'
            id='phone'
          />
          {errors.phone && (
            <span className={styles.error_input}>
              Este campo es obligatorio
            </span>
          )}
        </div>
        <div className={`${styles.field} ${styles.photo} ${styles.required}`}>
          <label htmlFor='images'>
            Subir Foto <span>(Subir 5 imágenes máximo.)</span>
          </label>
          <div className={styles.fileContainer}>
            <input
              {...register('images', {
                validate: {
                  required: (files) => files && files.length > 0,
                  acceptedFormats: (files) => {
                    let error = false
                    Array.from(files).forEach((file, index) => {
                      error = ['image/jpeg', 'image/png', 'image/jpg'].includes(
                        file?.type
                      )
                    })

                    if (!error) {
                      return 'Formatos permitidos de las fotos jpg o png.'
                    } else {
                      return true
                    }
                  },
                  lessThan2MB: (files) => {
                    let error = false
                    Array.from(files).forEach((file, index) => {
                      if (file?.size <= 2000000) {
                        error = true
                      }
                    })

                    if (!error) {
                      return 'Una de las fotos es demasaido pesada Max 2Mb por foto.'
                    } else {
                      return true
                    }
                  },
                },
              })}
              type='file'
              name='images'
              id='images'
              multiple
              accept='image/png, image/jpeg'
            />
            <span>Seleccionar archivo</span>
          </div>
          {errors.images && errors.images.type === 'required' && (
            <span className={styles.error_input}>
              Este campo es obligatorio.
            </span>
          )}
          {errors.images && errors.images.type === 'acceptedFormats' && (
            <span className={styles.error_input}>{errors.images.message}</span>
          )}
          {errors.images && errors.images.type === 'lessThan2MB' && (
            <span className={styles.error_input}>{errors.images.message}</span>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor='social_network'>
            Redes sociales <span>(Mínimos 5k seguidores)</span>
          </label>
          <input
            {...register('social_network', { required: true })}
            type='text'
            name='social_network'
            id='social_network'
          />
          <aside>
            *Este espacio solo será diligenciado por quienes participan como
            influenciadoras
          </aside>
        </div>

        <div className={styles.field}>
          {image.length > 0 &&
            image.map((image) => <div key={image}>{image}</div>)}
        </div>

        <div className={`${styles.field_lg}`}>
          <div className={styles.terminos}>
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
              {...register('terminos', { required: true })}
              type='checkbox'
              name='terminos'
              id='terminos'
            />
          </div>
          {errors.terminos && (
            <span className={styles.error_input}>
              Este campo es obligatorio
            </span>
          )}
        </div>
        <div className={styles.field_btn}>
          <button className={styles.btn}>Enviar</button>
        </div>
      </form>
    </>
  )
}
