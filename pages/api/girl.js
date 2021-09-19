import dbConnect from '../../lib/dbConnect'
import Girl from '../../models/Girl'
import fs from 'fs'

export default async (req, res) => {
  // res.statusCode = 200
  // res.json({ name: 'John Doe' })
  await dbConnect()

  // POST api/girl
  const { method } = req
  switch (method) {
    case 'POST':
      try {
        const girl = new Girl(req.body)
        await girl.save()

        fs.mkdir(
          `./public/uploads/${req.body.names
            .replaceAll(' ', '-')
            .toLowerCase()
            .trim()}`,
          { recursive: true },
          (err) => {
            if (err) throw err
          }
        )

        return res
          .status(200)
          .json({ success: true, data: girl, message: 'created girl' })
      } catch (error) {
        res.status(400).json({ success: false, message: error })
      }
    default:
      return res
        .status(500)
        .json({ success: false, message: 'Falla del servidor' })
  }
}
