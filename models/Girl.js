import mongoose from 'mongoose'

/* GirlSchema will correspond to a collection in your MongoDB database. */
const GirlSchema = new mongoose.Schema({
  names: {
    type: String,
    required: [true, 'Por favor se necesita un nombre.'],
    maxlength: [50, 'El nombre no puede tener mas de 50 caracteres.'],
  },
  lastname: {
    type: String,
    required: [true, 'Por favor se necesita un apellido.'],
    maxlength: [50, 'El nombre no puede tener mas de 50 caracteres.'],
  },
  birthday: {
    type: Date,
    required: [true, 'Por favor ingrese una fecha.'],
  },
  document: {
    type: String,
    required: [true, 'Por favor ingrese un número de documento.'],
  },
  create_date: {
    type: Date,
    required: [true, 'Por favor ingrese una fecha de registro.'],
  },
  email: {
    type: String,
    match: [
      /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      'Formato invalido de correo electrónico',
    ],
    required: [true, 'Por favor ingrese un correo electrónico'],
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
  terminos: {
    type: Boolean,
    required: [true, 'Por favor Acepte los Términos y condiciones.'],
  },
  images: {
    required: [false, 'Por favor cargue una foto.'],
    type: Array,
  },
})

export default mongoose.models.Girl || mongoose.model('Girl', GirlSchema)
