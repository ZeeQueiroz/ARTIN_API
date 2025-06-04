const express = require("express");
const route = express.Router();
const Usuario = require("../models/usuario");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

route.post("/registrar", async (req, res) => {
  const { usuario, senha } = req.body;

  if (!usuario || !senha)
    return res.status(400).send({ error: "Preencha todos os campos" });

  const userExists = await Usuario.findOne({ usuario });
  if (userExists)
    return res.status(400).send({ error: "Usuário já existe" });

  const hashedSenha = await bcrypt.hash(senha, 8);
  const novoUsuario = await Usuario.create({ usuario, senha: hashedSenha });

  return res.send({ message: "Usuário criado com sucesso", novoUsuario });
});

route.post("/login", async (req, res) => {
  const { usuario, senha } = req.body;

  const usuarioEncontrado = await Usuario.findOne({ usuario });
  if (!usuarioEncontrado)
    return res.status(400).send({ error: "Usuário inválido" });

  const isMatch = await bcrypt.compare(senha, usuarioEncontrado.senha);
  if (!isMatch)
    return res.status(400).send({ error: "Senha inválida" });

  const token = jwt.sign({ id: usuarioEncontrado._id }, "chaveSecreta", { expiresIn: "1d" });

  return res.send({ message: "Login realizado", token });
});

module.exports = route;
