import React, { useEffect, useState } from "react";
import ProdutoCard from "../components/ProdutoCard";

export default function Catalogo() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/produtos")
      .then((res) => res.json())
      .then(setProdutos);
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      {produtos.map((prod) => (
        <ProdutoCard key={prod._id} produto={prod} />
      ))}
    </div>
  );
}