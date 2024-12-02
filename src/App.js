
import './App.css';
import {useState} from 'react';
function App() {
  const [Estado, setEstado] = useState('');

  const DefineCity = {
      '1' : ['Mogi das Cruzes', 'Suzano', 'Poá','Guararema'],
      '2' : ['Angra dos Reis', 'Niterói', 'Itaboraí'],
      '3' : ['Belo Horizonte', 'Monte Azul','Muzambinho'],
  }
  const setDefineCity = (e) =>{
   setEstado(e.target.value);
  }
  return (
    <div className="App">
      <form>
        <h1 className="top-h1">Cadastro de Ingressantes</h1>
      <label>Nome</label>
      <input type="text" className="focus"></input>
      <label>Curso</label>
      <select className="focus">
        <option value=""disabled selected hidden>Selecione curso...</option>
      <option value="1">Matemática</option>
    <option value="2">Letras</option>
    <option value="3">Geografia</option>
  </select>
      <label>Estado</label>
      <select label="" onChange={setDefineCity} className="focus">
        <option value=""disabled selected hidden >Selecione estado...</option>
      <option value="1" >São Paulo</option>
    <option value="2">Rio de Janeiro</option>
    <option value="3">Minas Gerais</option>
  </select>
      <label>Cidades</label>
      <select className="focus">
        <option value=""disabled selected hidden>Selecione cidade...</option>
        {Estado && DefineCity[Estado].map((Cidade, index) => (<option key={index} value={Cidade}>{Cidade}</option>))}
  </select>
    <div className="Container-button">
    <button type="submit" className="button-voltar">Voltar</button>
    <button type="submit" className="button-gravar">Gravar</button>
    </div>
    </form>
    </div>
  );
  };

export default App;
