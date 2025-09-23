import { useParams, useNavigate } from "react-router-dom"; 
import { useRecoilState } from "recoil"; 
import { todoListStore } from "../store/todoStore"; 

export default function Detail() { 
    const {id} = useParams(); 
    const navigate = useNavigate(); 
    const [todoList, setTodoList] = useRecoilState(todoListStore) 
    
    return ( 
        <div>
            <button onClick={() => navigate('/')}>Go to home</button> 
            <h1>Detail Page</h1> 
            <p>id: {todoList[parseInt(id-1)].id}</p> 
            <p>title: {todoList[parseInt(id-1)].title}</p> 
            <p>counter: {todoList[parseInt(id-1)].counter}</p> 
            <button onClick={() => { 
                setTodoList( old => { 
                    const newTodoList = old.map(todo => { 
                        const newTodo = {...todo} 
                        if (newTodo.id === parseInt(id))
                            { return{ 
                                ...newTodo, 
                                counter : newTodo.counter += 1 
                            } 
                        } 
                        return{...newTodo}
                    }) 
                        
                    return newTodoList 
                }); 
            }}> 
                Tambah Counter 
            </button> 
        </div> 
    ) 
}