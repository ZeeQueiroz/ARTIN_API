const mongoose = require('./database');
const { Schema } = mongoose;

const VendaSchema = new Schema({
  data: { type: Date, default: Date.now },
  numeroNota: { type: String, required: true },
  cliente: {
    cpf: String,
    nome: String,
    endereco: {
      rua: String,
      numero: Number,
      bairro: String,
      cidade: String,
      estado: String,
      cep: String
    },
    telefone: String,
    email: String
  },
  produtos: [
    {
      codigoInterno: String,
      nome: String,
      quantidade: Number,
      valorUnitario: Number
    }
  ],
  totalVenda: Number
});

const Venda = mongoose.model('Venda', VendaSchema);
module.exports = Venda;
