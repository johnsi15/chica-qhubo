import formidable from 'formidable'
import fs from 'fs'

export const config = {
  api: {
    bodyParser: false,
  },
}

const post = async (req, res) => {
  const form = formidable({ multiples: true, maxFileSize: 50 * 1024 * 1024 }) // 5Mb

  form.parse(req, async function (err, fields, files) {
    console.log('fields:', fields)
    console.log('files:', files)
    if (err) {
      console.log('Error parsing the files')
      return res.status(400).json({
        status: 'Fail',
        message: 'There was an error parsing the files',
        error: err,
      })
    }
    // await saveFile(files.file)
    return res.status(201).send('')
  })
}

const saveFile = async (file) => {
  console.log(file)
  // const data = fs.readFileSync(file.path)
  // console.log(data)
  // fs.writeFileSync(`./public/girls/${file.name}`, data)
  // await fs.unlinkSync(file.path)
  return
}

export default (req, res) => {
  req.method === 'POST'
    ? post(req, res)
    : req.method === 'PUT'
    ? console.log('PUT')
    : req.method === 'DELETE'
    ? console.log('DELETE')
    : req.method === 'GET'
    ? console.log('GET')
    : res.status(404).send('')
}
