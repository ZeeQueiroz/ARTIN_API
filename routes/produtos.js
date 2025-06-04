const express = require("express");
const route = express.Router();
const Produto = require("../models/produto");
const auth = require("../middleware/authMiddleware");

route.use(auth);

route.get("/", async (req, res) => {
  const produtos = await Produto.find().populate("categoria");
  res.send(produtos);
});

route.get("/:id", async (req, res) => {
  const produto = await Produto.findById(req.params.id).populate("categoria");
  if (!produto) return res.status(404).send({ error: "Produto não encontrado" });
  res.send(produto);
});

route.get("/buscar/filtro", async (req, res) => {
  const { nome, descricao } = req.query;
  const filtro = {};

  if (nome) filtro.nome = { $regex: nome, $options: "i" };
  if (descricao) filtro.descricao = { $regex: descricao, $options: "i" };

  const produtos = await Produto.find(filtro).populate("categoria");
  res.send(produtos);
});

route.post("/", async (req, res) => {
  const produto = await Produto.create(req.body);
  res.send(produto);
});

route.put("/:id", async (req, res) => {
  const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(produto);
});

route.delete("/:id", async (req, res) => {
  await Produto.findByIdAndDelete(req.params.id);
  res.send({ message: "Produto excluído com sucesso" });
});

module.exports = route;
