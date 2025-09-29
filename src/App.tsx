import { useState } from "react"
import TodoItem from "./components/TodoItem"
import { data } from "./data/todo"
import AddTodoForm from "./components/AddTodoForm"

function App() {
  const [todos, setTodos] = useState(data)


  function setToDoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) => 
      prevTodos.map(todo => (
        todo.id === id ? {...todo, completed} : todo
      ))
    )
  }

  function addTodo(title: string) {
    setTodos(prevTodos => [
      {
        id: prevTodos.length + 1,
        title,
        completed: false
      },
      ...prevTodos
    ])
  }

  function deleteTodo(id: number) {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }

  return (
    <main className="py-10 h-screen space-y-5">
       <h1 className="font-bold text-3xl text-center">A Handcrafted Digital Experience</h1>
       <div className="max-w-lg mx-auto bg-slate-100 rounded md p-5 space-y-6">
        <AddTodoForm
        onSubmit={addTodo} 
        />
          
          <div className="space-y-2">
            {todos.map(todo => (
              <TodoItem 
              todo={todo}
              key={todo.id}
              onCompletedChange={setToDoCompleted}
              onSubmit={deleteTodo}
              />
            ))}
          </div>
       </div>
    </main>
  )
}

export default App
