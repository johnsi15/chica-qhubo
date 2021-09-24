import dbConnect from '../../lib/dbConnect'
import Girl from '../../models/Girl'
// import fs from 'fs'

export default async (req, res) => {
  // res.statusCode = 200
  // res.json({ name: 'John Doe' })
  await dbConnect()

  // POST api/girl
  const { method } = req
  const { email } = req.query
  switch (method) {
    case 'POST':
      try {
        const girl = new Girl(req.body)
        await girl.save()

        return res
          .status(200)
          .json({ success: true, data: girl, message: 'created girl' })
      } catch (error) {
        res.status(400).json({ success: false, message: error })
      }
    case 'GET':
      try {
        // console.log(params)
        let girl = await Girl.findOne({ email })
        // console.log(girl)
        if (girl) {
          return res
            .status(200)
            .json({ success: true, data: 'exists', message: 'The user exists' })
        } else {
          return res.status(200).json({
            success: true,
            data: null,
            message: 'The user does not exist',
          })
        }
      } catch (error) {
        res.status(400).json({ success: false, message: error })
      }
    default:
      return res
        .status(500)
        .json({ success: false, message: 'Falla del servidor' })
  }
}
