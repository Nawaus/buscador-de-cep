import { useState } from "react";
import { FiSearch } from "react-icons/fi"
import './styles.css'
import api from "./services/api"

function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})

  async function handleSearch() {
    // 21061210/json/
    if (input === "") {
      alert("Please enter")
      return
    }

    try {
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput("")

    } catch (error) {
      alert("cep não encontrado")
      setInput("")
    }
  }

  return (
    <div className="container">
    <h1 className="title">Buscador de cep</h1>
    <div className="containerInput">
      <input type="search"
      placeholder="Digite seu cep..."
      value={input}
      onChange={(e) => setInput(e.target.value) }
      />
    <button className="buttonSearch" onClick={handleSearch}>
      <FiSearch size={25} color="#fff"></FiSearch>
    </button>
    </div>

    {Object.keys(cep).length > 0 && (
      <main className="main">
        <h2>CEP: {cep.cep}</h2>

        <span>Rua: {cep.logradouro}</span>
        <span>Complemento: {cep.complemento === "" ? "Não encontrado" : cep.complemento}</span>
        <span>Bairro: {cep.bairro}</span>
        <span>Localidade: {cep.localidade} - {cep.uf}</span>
    </main>
    )}
  </div>
  );

}
export default App;
