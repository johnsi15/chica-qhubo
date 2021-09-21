import nextConnect from 'next-connect'
import multer from 'multer'
import fs from 'fs'
import { extname } from 'path'

// Returns a Multer instance that provides several methods for generating
// middleware that process files uploaded in multipart/form-data format.
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      console.log(req.body.folder)
      cb(null, './public/tmp/uploads')
    },
    filename: (req, file, cb) => {
      // console.log(file)

      if (file) {
        const imagePattern = /(jpg|jpeg|png)/gi
        const mathExt = extname(file.originalname).replace('.', '')

        if (!imagePattern.test(mathExt)) {
          return new TypeError('File format is not valid')
        }
        let namePhoto = file.originalname
          .replaceAll(' ', '-')
          .replaceAll(/[&\/\\#,+()$~%´'":*?<>{}]/g, '')
          .toLowerCase()
          .trim()

        // req.file = file.originalname
        cb(null, namePhoto)
      }
    },
  }),
})

const apiRoute = nextConnect({
  onError(error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` })
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` })
  },
})

// Returns middleware that processes multiple files sharing the same field name.
const uploadMiddleware = upload.array('images', 5)

// Adds the middleware to Next-Connect
apiRoute.use(uploadMiddleware)

// Create a helper function
async function moveFile(oldPath, newPath, folder) {
  console.log(oldPath)
  console.log(newPath)
  // 1. Create the destination directory if it does not exist
  // Set the `recursive` option to `true` to create all the subdirectories
  await fs.mkdir(folder, { recursive: true }, (err) => {
    // console.log(err)
    if (err) throw err
  })

  // 2. Rename the file (move it to the new directory)
  // Return the promise
  // return fs.rename(oldPath, newPath)
  try {
    // 2. Rename the file (move it to the new directory)
    fs.rename(oldPath, newPath, (err) => {
      console.log('rename')
      if (err) throw err
    })
  } catch (error) {
    if (error.code === 'EXDEV') {
      // 3. Copy the file as a fallback
      await fs.copyFile(oldPath, newPath)
      // Remove the old file
      await fs.unlink(oldPath)
    } else {
      // Throw any other error
      throw error
    }
  }
}

// Process a POST request
apiRoute.post((req, res) => {
  console.log('req files')
  console.log(req.files)
  req.files.forEach((file) => {
    console.log(file.filename)
    const folder = `./public/${req.body.folder}`
    const currentPath = `./public/tmp/uploads/${file.filename}`
    const newPath = `./public/${req.body.folder}/${file.filename}`
    // const currentPath = `./public/tmp/uploads/no-aparece.jpg`
    // const newPath = `./public/john-serrano/no-aparece.jpg`

    moveFile(currentPath, newPath, folder)
      .then(console.log('File moved successfully'))
      .catch(console.error)
  })

  res.status(200).json({ data: 'success' })
})

export default apiRoute

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
}
