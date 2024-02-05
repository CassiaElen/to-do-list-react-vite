import { useState } from 'react';
import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaTrashAlt } from "react-icons/fa";


function App() {


  const [produtos, setProdutos] = useState([]);
  const inputRef = useRef();

  function ClickMe() {
    setProdutos([{ id: uuidv4(), nome: inputRef.current.value }, ...produtos]);
    inputRef.current.value = ''
  }

  function deletarProduto(id) {
    setProdutos(produtos.filter(produto => produto.id !== id))
  }

  return (

    <div className='todo-list'>
      <div className='header'>
        <h1>Lista de tarefas</h1>
        <div>
        <input className='input' type='text' placeholder='tarefas' ref={inputRef} />
        <button className='button' onClick={ClickMe}>Adicionar</button>
        </div>
      </div>

      {produtos.map((produto) => (
        <div className='tarefa' key={produto.id}>
          <p>{produto.nome}</p>
          <button onClick={() => deletarProduto(produto.id)}><FaTrashAlt className='lixo' /></button>
        </div>
      ))}
    </div>

  );
}


export default App
