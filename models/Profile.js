import mongoose from 'mongoose'

/* ProfileSchema will correspond to a collection in your MongoDB database. */
const ProfileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Por favor se necesita un nombre.'],
    maxlength: [60, 'El nombre no puede tener mas de 60 caracteres.'],
  },
  age: {
    type: String,
    required: [true, 'Por favor se necesita una edad.'],
  },
  studies: {
    type: String,
    required: [true, 'Por favor ingrese algun estudio.'],
  },
  project: {
    type: String,
    required: [true, 'Por favor ingrese algun proyecto.'],
  },
  hobbies: {
    type: String,
    required: false,
  },
  strength: {
    type: String,
    required: false,
  },
  photo_profile: {
    type: String,
    required: [true, 'Por favor ingrese una foto de perfil.'],
  },
  model_agency: {
    type: String,
    required: false,
  },
  photos: {
    required: [false, 'Por favor cargue algunas fotos.'],
    type: Array,
  },
  url: {
    required: [true, 'Por favor se necesita una url para el perfil.'],
    type: String,
  },
})

export default mongoose.models.Profiles_girl ||
  mongoose.model('Profiles_girl', ProfileSchema)
