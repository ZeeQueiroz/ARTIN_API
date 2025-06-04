const express = require("express");
const route = express.Router();
const Venda = require("../models/venda");
const auth = require("../middleware/authMiddleware");

route.use(auth);

route.get("/", async (req, res) => {
  const vendas = await Venda.find();
  res.send(vendas);
});

route.get("/:id", async (req, res) => {
  const venda = await Venda.findById(req.params.id);
  if (!venda) return res.status(404).send({ error: "Venda não encontrada" });
  res.send(venda);
});

route.get("/buscar/filtro", async (req, res) => {
  const { nome } = req.query;
  if (!nome) return res.send(await Venda.find());

  const vendas = await Venda.find({ "cliente.nome": { $regex: nome, $options: "i" } });
  res.send(vendas);
});

route.post("/", async (req, res) => {
  const venda = await Venda.create(req.body);
  res.send(venda);
});

route.put("/:id", async (req, res) => {
  const venda = await Venda.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(venda);
});

route.delete("/:id", async (req, res) => {
  await Venda.findByIdAndDelete(req.params.id);
  res.send({ message: "Venda excluída com sucesso" });
});

module.exports = route;
