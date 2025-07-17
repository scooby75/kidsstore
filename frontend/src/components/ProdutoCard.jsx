import React from "react";

export default function ProdutoCard({ produto }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <img
        src={produto.imagens[0] || "https://via.placeholder.com/300x200.png?text=Sem+Imagem"}
        alt={produto.nome}
        className="h-48 w-full object-cover rounded"
      />
      <h2 className="text-lg font-bold mt-2">{produto.nome}</h2>
      <p className="text-pink-600 font-semibold">R$ {produto.preco}</p>
      <p className="text-xs text-gray-500">{produto.categoria}</p>
      <div className="mt-2 flex gap-2 flex-wrap">
        {produto.tamanhos?.map((t) => (
          <span key={t} className="bg-pink-200 text-xs px-2 py-1 rounded">{t}</span>
        ))}
      </div>
      <div className="mt-2 flex gap-2 flex-wrap">
        {produto.cores?.map((c) => (
          <span key={c} className="bg-yellow-200 text-xs px-2 py-1 rounded">{c}</span>
        ))}
      </div>
      <button
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
        onClick={() =>
          window.open(
            `https://wa.me/?text=Veja%20esse%20produto:%20${window.location.href}`,
            "_blank"
          )
        }
      >
        Compartilhar no WhatsApp
      </button>
    </div>
  );
}