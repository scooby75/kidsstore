import React, { useEffect, useState } from 'react';

export default function Catalogo() {
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/produtos').then(res => res.json()).then(setProdutos);
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {produtos.map(prod => (
        <div key={prod._id} className="bg-white rounded-lg shadow p-4">
          <img src={prod.imagens[0]} alt={prod.nome} className="h-48 w-full object-cover rounded"/>
          <h2 className="text-xl font-bold mt-2">{prod.nome}</h2>
          <p className="text-lg text-pink-600 font-semibold">R$ {prod.preco}</p>
          <button
            className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
            onClick={() => window.open(`https://wa.me/?text=Veja%20esse%20produto:%20${window.location.href}`, '_blank')}
          >
            Compartilhar no WhatsApp
          </button>
        </div>
      ))}
    </div>
  );
}