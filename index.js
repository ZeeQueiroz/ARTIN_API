const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/categorias", require("./routes/categorias"));
app.use("/api/produtos", require("./routes/produtos"));
app.use("/api/vendas", require("./routes/vendas"));
app.use("/api/clientes", require("./routes/clientes"));
app.use("/api", require("./routes/auth"));

app.get("/", (req, res) => {
  res.send("<marquee>Minha primeira API</marquee>");
});

app.listen(3000, () => {
  console.log("Servidor online na porta 3000");
});
