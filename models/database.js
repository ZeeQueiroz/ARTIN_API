require('dotenv').config();
const mongoose = require("mongoose");

try {
    const url = process.env.MONGO_URL; 
    
    mongoose.connect(url)
    .then(() => console.log('Conectado ao MongoDB com sucesso'))
    .catch(err => console.log('Erro ao conectar no MongoDB', err));
}
catch (err) {
    console.log(err);
}

mongoose.Promise = global.Promise;

module.exports = mongoose;
