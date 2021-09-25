import dbConnect from '../../lib/dbConnect'
import Girl from '../../models/Girl'
import axios from 'axios'
// import fs from 'fs'

async function validateHuman(token) {
  const secret = process.env.RECAPTCHA_SECRET_KEY
  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`
    )
    // const captchaValidation = await response.json()

    // console.log(response, 'captcha validate')

    return response.data.success
  } catch (error) {
    console.log(error)
  }
}

export default async (req, res) => {
  // res.statusCode = 200
  // res.json({ name: 'John Doe' })
  await dbConnect()

  // POST api/girl
  const { method } = req
  const { email, token } = req.query
  switch (method) {
    case 'POST':
      try {
        const human = await validateHuman(req.body.token)
        // console.log(req.body.token, 'human token')
        // console.log(human, 'human response')
        if (!human) {
          return res
            .status(400)
            .json({ success: false, message: 'human error' })
        }

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
        // const human = await validateHuman(token)
        // if (!human) {
        //   return res
        //     .status(400)
        //     .json({ success: false, message: 'human error' })
        // }

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
