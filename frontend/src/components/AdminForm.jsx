import React, { useState } from "react";

export default function AdminForm() {
  const [form, setForm] = useState({
    nome: "",
    descricao: "",
    preco: "",
    categoria: "",
    tamanhos: "",
    cores: "",
    imagens: ["", "", ""],
  });
  const [msg, setMsg] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleImageChange(idx, val) {
    setForm((f) => {
      const imgs = [...f.imagens];
      imgs[idx] = val;
      return { ...f, imagens: imgs };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const body = {
      ...form,
      preco: parseFloat(form.preco),
      tamanhos: form.tamanhos.split(",").map((t) => t.trim()),
      cores: form.cores.split(",").map((c) => c.trim()),
    };
    await fetch("http://localhost:4000/produtos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    setMsg("Produto cadastrado!");
    setForm({
      nome: "",
      descricao: "",
      preco: "",
      categoria: "",
      tamanhos: "",
      cores: "",
      imagens: ["", "", ""],
    });
  }

  return (
    <form className="bg-white shadow rounded p-4 max-w-lg mx-auto" onSubmit={handleSubmit}>
      <div className="mb-2">
        <label className="block">Nome:</label>
        <input className="border rounded w-full" name="nome" value={form.nome} onChange={handleChange} required />
      </div>
      <div className="mb-2">
        <label className="block">Descrição:</label>
        <input className="border rounded w-full" name="descricao" value={form.descricao} onChange={handleChange} />
      </div>
      <div className="mb-2">
        <label className="block">Preço:</label>
        <input className="border rounded w-full" name="preco" type="number" value={form.preco} onChange={handleChange} required />
      </div>
      <div className="mb-2">
        <label className="block">Categoria:</label>
        <input className="border rounded w-full" name="categoria" value={form.categoria} onChange={handleChange} />
      </div>
      <div className="mb-2">
        <label className="block">Tamanhos (separados por vírgula):</label>
        <input className="border rounded w-full" name="tamanhos" value={form.tamanhos} onChange={handleChange} />
      </div>
      <div className="mb-2">
        <label className="block">Cores (separadas por vírgula):</label>
        <input className="border rounded w-full" name="cores" value={form.cores} onChange={handleChange} />
      </div>
      <div className="mb-2">
        <label className="block">Imagens (URLs):</label>
        {[0, 1, 2].map((idx) => (
          <input
            key={idx}
            className="border rounded w-full my-1"
            placeholder={`URL da imagem ${idx + 1}`}
            value={form.imagens[idx]}
            onChange={(e) => handleImageChange(idx, e.target.value)}
          />
        ))}
      </div>
      <button className="bg-pink-500 text-white px-4 py-2 rounded" type="submit">
        Salvar
      </button>
      {msg && <p className="mt-2 text-green-600">{msg}</p>}
    </form>
  );
}