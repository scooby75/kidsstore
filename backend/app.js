import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import produtosRouter from "./routes/produtos.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/catalogo", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use("/produtos", produtosRouter);

app.get("/", (req, res) => res.send("API do Catálogo de Moda Infantil!"));

app.listen(4000, () => console.log("Backend rodando na porta 4000"));