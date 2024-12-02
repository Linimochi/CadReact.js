# Projeto de Cadastro de Ingressantes

## Visão Geral
Este projeto foi desenvolvido para criar uma tela de cadastro para novos ingressantes nos cursos oferecidos. A aplicação é feita utilizando React, JavaScript, HTML e CSS.

## Funcionalidades
- **Seleção de Curso:** Os usuários podem selecionar o curso desejado.
- **Seleção de Estado e Cidade:** Ao selecionar um estado, os campos de cidade correspondentes são automaticamente atualizados, permitindo uma seleção dinâmica e intuitiva.
- **Formulário de Cadastro:** Os usuários podem preencher o formulário com seus dados.

## Tecnologias Utilizadas
- **React:** Biblioteca JavaScript para construção de interfaces de usuário.
- **JavaScript:** Linguagem de programação utilizada para a lógica da aplicação.
- **HTML:** Linguagem de marcação utilizada para estruturar a página.
- **CSS:** Linguagem de estilo utilizada para a apresentação visual.

![CadReact](https://github.com/user-attachments/assets/0780ce99-c405-4d13-b028-184308d1a950)

![CadReact](https://github.com/user-attachments/assets/de2676b6-06d1-4e55-ade4-2afe66793143)


## Estrutura do Código
```javascript
import './App.css';
import { useState } from 'react';

function App() {
  const [Estado, setEstado] = useState('');

  const DefineCity = {
    '1': ['Mogi das Cruzes', 'Suzano', 'Poá', 'Guararema'],
    '2': ['Angra dos Reis', 'Niterói', 'Itaboraí'],
    '3': ['Belo Horizonte', 'Monte Azul', 'Muzambinho'],
  };

  const setDefineCity = (e) => {
    setEstado(e.target.value);
  };

  return (
    <div className="App">
      <form>
        <h1 className="top-h1">Cadastro de Ingressantes</h1>
        <label>Nome</label>
        <input type="text" className="focus" />
        <label>Curso</label>
        <select className="focus">
          <option value="" disabled selected hidden>
            Selecione curso...
          </option>
          <option value="1">Matemática</option>
          <option value="2">Letras</option>
          <option value="3">Geografia</option>
        </select>
        <label>Estado</label>
        <select onChange={setDefineCity} className="focus">
          <option value="" disabled selected hidden>
            Selecione estado...
          </option>
          <option value="1">São Paulo</option>
          <option value="2">Rio de Janeiro</option>
          <option value="3">Minas Gerais</option>
        </select>
        <label>Cidades</label>
        <select className="focus">
          <option value="" disabled selected hidden>
            Selecione cidade...
          </option>
          {Estado && DefineCity[Estado].map((Cidade, index) => (
            <option key={index} value={Cidade}>
              {Cidade}
            </option>
          ))}
        </select>
        <div className="Container-button">
          <button type="submit" className="button-voltar">
            Voltar
          </button>
          <button type="submit" className="button-gravar">
            Gravar
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
