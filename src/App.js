import React, { useState, useEffect } from "react";
import "./App.css"
//Components
import Header from "./components/Header";
import Todo from "./components/Todo";
import Loader from "./components/Loader";
const App = () => {
  //STATE
  const [todoList, setTodoList] = useState([]);
  const [copiaTodo, setCopiaTodo] = useState([]);
  // state string  completed e inicializar el null  true o false  !! todo completas e incompletas  si es completas 
  const [estadoBoton, setEstadoBoton] = useState("");

  //EFFECT
  useEffect(() => {
    const handleTodoList = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const result = await response.json();
      const resultTodoList = result.slice(0, 20);
      setTodoList(resultTodoList);
      setCopiaTodo(resultTodoList)
    };
    handleTodoList();
  }, []);
 
  //FUNCIONES
  const handleCompleteTodo = id => {
    setTodoList(
      todoList.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    setCopiaTodo(
      todoList.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const HandleCompleteTodo = () =>{
    setEstadoBoton("todas")
    setCopiaTodo(todoList)
  }
  const HandleIncomplete = () => {
    setEstadoBoton("incompletas")
    setCopiaTodo(
      todoList.filter(valor => valor.completed === false ? valor: null
    ))
  }
  const HandleComplete = () =>{
    setEstadoBoton("completas")
   setCopiaTodo( 
    todoList.filter(valor => valor.completed === true ? valor: null
   )) 
  }

  useEffect(() =>{
    switch (estadoBoton) {
      case "todas":
        HandleCompleteTodo()   
        break;
        case "completas":
        HandleComplete()   
        break;
        case "incompletas":
         HandleIncomplete()   
        break;
      default:
        break;
    }
  },[todoList])
  

  return (
    <div className="App">
      <Header
      HandleCompleteTodo={HandleCompleteTodo}
        HandleComplete={HandleComplete}
        HandleIncomplete={HandleIncomplete}
      />

      <div className="todo-container">
        {copiaTodo && copiaTodo.length > 0 ? (
          copiaTodo.map((singleTodo,index) => (
            <Todo
              key={singleTodo.id}
              title={singleTodo.title}
              status={singleTodo.completed}
              handleCompleteTodo={handleCompleteTodo}
              id={singleTodo.id}
              index={index}
            />
          ))
        ):
        (
          <Loader />
        ) }
      </div>
    </div>
  );
};

export default App;
