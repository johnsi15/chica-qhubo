import mongoose from 'mongoose'

/* GirlSchema will correspond to a collection in your MongoDB database. */
const GirlSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this girl.'],
    maxlength: [40, 'Name cannot be more than 40 characters'],
  },
  birthday: {
    type: Date,
    required: [true, 'Please provide a valid date'],
  },
  email: {
    type: String,
    match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Invalid email format'],
    required: [true, 'Please enter Email Address'],
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    maxlength: [10, 'Phone cannot be more than 10 characters'],
  },
  social_network: {
    type: String,
  },
  image_url: {
    required: [true, 'Please provide an image url for this pet.'],
    type: Array,
  },
})

export default mongoose.models.Girl || mongoose.model('Girl', GirlSchema)
