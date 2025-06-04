const express = require("express");
const route = express.Router();
const Cliente = require("../models/cliente");
const auth = require("../middleware/authMiddleware");

route.use(auth);

route.get("/", async (req, res) => {
  const clientes = await Cliente.find();
  return res.send(clientes);
});

route.get("/buscar", async (req, res) => {
  const { nome, cpf } = req.query;
  let filtro = {};

  if (nome) filtro.nome = { $regex: nome, $options: "i" };
  if (cpf) filtro.cpf = cpf;

  const clientes = await Cliente.find(filtro);
  return res.send(clientes);
});

route.get("/:id", async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) {
      return res.status(404).send({ error: "Cliente não encontrado" });
    }
    return res.send(cliente);
  } catch (err) {
    return res.status(400).send({ error: "ID inválido" });
  }
});

route.post("/", async (req, res) => {
  const novoCliente = await Cliente.create(req.body);
  return res.send(novoCliente);
});

route.put("/:id", async (req, res) => {
  const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
  return res.send(cliente);
});

route.delete("/:id", async (req, res) => {
  await Cliente.findByIdAndDelete(req.params.id);
  return res.send({ message: "Cliente deletado com sucesso" });
});

module.exports = route;
