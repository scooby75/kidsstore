import express from "express";
import Produto from "../models/Produto.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const produtos = await Produto.find();
  res.json(produtos);
});

router.post("/", async (req, res) => {
  const produto = new Produto(req.body);
  await produto.save();
  res.json(produto);
});

export default router;