const express = require("express");
const route = express.Router();
const Categoria = require("../models/categoria");
const auth = require("../middleware/authMiddleware");

route.use(auth);

route.get("/", async (req, res) => {
  const categorias = await Categoria.find();
  res.send(categorias);
});

route.get("/:id", async (req, res) => {
  const categoria = await Categoria.findById(req.params.id);
  if (!categoria) return res.status(404).send({ error: "Categoria não encontrada" });
  res.send(categoria);
});

route.get("/buscar/filtro", async (req, res) => {
  const { nome, descricao } = req.query;
  const filtro = {};

  if (nome) filtro.nome = { $regex: nome, $options: "i" };
  if (descricao) filtro.descricao = { $regex: descricao, $options: "i" };

  const categorias = await Categoria.find(filtro);
  res.send(categorias);
});

route.post("/", async (req, res) => {
  const categoria = await Categoria.create(req.body);
  res.send(categoria);
});

route.put("/:id", async (req, res) => {
  const categoria = await Categoria.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(categoria);
});

route.delete("/:id", async (req, res) => {
  await Categoria.findByIdAndDelete(req.params.id);
  res.send({ message: "Categoria excluída com sucesso" });
});

module.exports = route;
