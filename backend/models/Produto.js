import mongoose from "mongoose";
const ProdutoSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  preco: Number,
  categoria: String,
  tamanhos: [String],
  cores: [String],
  imagens: [String]
});
export default mongoose.model("Produto", ProdutoSchema);