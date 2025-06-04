const mongoose = require('./database');
const { Schema } = mongoose;

const ClienteSchema = new Schema({
  cpf: { type: String, required: true, unique: true },
  nome: { type: String, required: true },
  endereco: {
    rua: String,
    numero: Number,
    bairro: String,
    cidade: String,
    estado: String,
    cep: String
  },
  telefone: String,
  email: { type: String, required: true }
});

const Cliente = mongoose.model('Cliente', ClienteSchema);
module.exports = Cliente;
