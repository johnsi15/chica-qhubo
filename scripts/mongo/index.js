const dbConnect = require('../../lib/dbConnectRequire')
const Girl = require('../../models/GirlRequire')
const fs = require('fs')

function getDateHuman(fecha) {
  // const unixTimestamp = 1575909015

  // const milliseconds = unixTimestamp * 1000 // 1575909015000

  const dateObject = new Date(fecha)

  // const humanDateFormat = dateObject.toLocaleString() // 5/21/2021, 11:49:16 AM
  // console.log(humanDateFormat)

  const dayName = dateObject.toLocaleString('es-CO', { weekday: 'long' }) // Lunes
  const month = dateObject.toLocaleString('es-CO', { month: 'long' }) // Mayo
  const dayNumber = dateObject.toLocaleString('es-CO', { day: 'numeric' }) // 9
  const year = dateObject.toLocaleString('es-CO', { year: 'numeric' }) // 2019
  // const hour = dateObject.toLocaleString('es-CO', { hour: 'numeric' }) // 10 AM
  // const minute = dateObject.toLocaleString('es-CO', { minute: 'numeric' }) // 30
  // const second = dateObject.toLocaleString('es-CO', { second: 'numeric' }) // 15
  // dateObject.toLocaleString('es-CO', { timeZoneName: 'short' }) // 12/9/2019, 10:30:15 AM CST
  // Viernes, 16 de Julio de 2021
  const dateHuman = `${dayName}, ${dayNumber} de ${month} del ${year}`
  return dateHuman
}

async function getData() {
  await dbConnect()

  /* find all the data in our database */
  const result = await Girl.find({}).limit(10).sort({ create_date: -1 })
  const girls = result.map((doc) => {
    const girl = doc.toObject()
    girl._id = girl._id.toString()
    return girl
  })

  const data = JSON.parse(JSON.stringify(girls))
  const dataGirls = data.map((girl) => {
    let fotos = ''
    girl.images.forEach((image) => {
      fotos += ` ${image}`
    })

    return `Nombres: ${girl.names} ${
      girl.lastname
    } \nFecha de nacimiento: ${getDateHuman(girl.birthday)} \nTeléfono: ${
      girl.phone
    } \nEmail: ${girl.email} \nCedula: ${
      girl.document
    } \nFecha de registro: ${getDateHuman(girl.create_date)} \nTerminos: ${
      girl.terminos
    } \nFotos: ${fotos} \n\n`
  })

  const dateObj = new Date()
  const month = dateObj.getUTCMonth() + 1 //months from 1-12
  const day = dateObj.getUTCDate()
  const year = dateObj.getUTCFullYear()

  await writeFile(
    `./girls-${day}-${month}-${year}.txt`,
    dataGirls.toString().replaceAll(',', '')
  )
  // console.log(data)
  return process.exit(0)
}

getData().then((data) => {
  // console.log(data)
})

const writeFile = (path, data, opts = 'utf8') =>
  new Promise((resolve, reject) => {
    fs.writeFile(path, data, opts, (err) => {
      if (err) reject(err)
      else resolve()
    })
  })
