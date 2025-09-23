import { useParams, useNavigate } from "react-router-dom"; 
import { useTodoStore } from "../store/todoStore"; 

function Detail() { 
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const { todoList, increaseCounter } = useTodoStore(); 

  const idx = parseInt(id) - 1;
  const todoItem = todoList[idx];

  if (!todoItem) return <h2>Data tidak ditemukan</h2>;

  return ( 
    <div>
      <button onClick={() => navigate('/')}>Go to home</button> 
      <h1>Detail Page</h1> 
      <p>id: {todoItem.id}</p> 
      <p>title: {todoItem.title}</p> 
      <p>counter: {todoItem.counter}</p> 

      <button onClick={() => increaseCounter(idx)}> 
        Tambah Counter 
      </button> 
    </div> 
  ); 
}

export default Detail;
