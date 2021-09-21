import mongoose from 'mongoose'

/* GirlSchema will correspond to a collection in your MongoDB database. */
const GirlSchema = new mongoose.Schema({
  names: {
    type: String,
    required: [true, 'Por favor se necesita un nombre.'],
    maxlength: [40, 'El nombre no puede tener mas de 40 caracteres.'],
  },
  birthday: {
    type: Date,
    required: [true, 'Por favor ingrese una fecha.'],
  },
  email: {
    type: String,
    match: [
      /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      'Formato invalido de correo electrónico',
    ],
    required: [true, 'Por favor ingrese un correo electrónico'],
    unique: true,
  },
  phone: {
    type: String,
    required: [true, 'Por favor ingrese un número de teléfono.'],
    maxlength: [
      10,
      'El número de teléfono no puede tener mas de 10 caracteres.',
    ],
  },
  social_network: {
    type: String,
  },
  images: {
    required: [false, 'Por favor cargue una foto.'],
    type: Array,
  },
})

export default mongoose.models.Girl || mongoose.model('Girl', GirlSchema)