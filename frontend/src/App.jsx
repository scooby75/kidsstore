import React from "react";
import Catalogo from "./pages/Catalogo";
import Admin from "./pages/Admin";

function App() {
  const [admin, setAdmin] = React.useState(false);
  return (
    <div>
      <header className="bg-pink-400 text-white p-4 flex justify-between">
        <h1 className="text-xl font-bold">Catálogo Moda Infantil</h1>
        <button
          className="bg-white text-pink-500 px-3 py-1 rounded"
          onClick={() => setAdmin((a) => !a)}
        >
          {admin ? "Ver Catálogo" : "Área Admin"}
        </button>
      </header>
      {admin ? <Admin /> : <Catalogo />}
    </div>
  );
}
export default App;