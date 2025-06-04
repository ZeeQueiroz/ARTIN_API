const mongoose = require('./database');
const { Schema } = mongoose;

const ProdutoSchema = new Schema({
  codigoInterno: { type: String, required: true, unique: true },
  nome: { type: String, required: true },
  descricao: String,
  preco: { type: Number, required: true },
  quantidade: { type: Number, required: true },
  categoria: { type: Schema.Types.ObjectId, ref: 'Categoria' }
});

const Produto = mongoose.model('Produto', ProdutoSchema);
module.exports = Produto;
