import React, { useState } from "react";
import AdminForm from "../components/AdminForm";

export default function Admin() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="p-4">
      <button
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setShowForm((s) => !s)}
      >
        {showForm ? "Ocultar Formulário" : "Cadastrar Produto"}
      </button>
      {showForm && <AdminForm />}
    </div>
  );
}