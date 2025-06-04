const mongoose = require('./database');
const { Schema } = mongoose;

const CategoriaSchema = new Schema({
  nome: { type: String, required: true, unique: true },
  descricao: String
});

const Categoria = mongoose.model('Categoria', CategoriaSchema);
module.exports = Categoria;
