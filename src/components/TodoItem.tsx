import type { Todo } from "../types/todo";

interface TodoItemProps { 
    todo: Todo;
    onCompletedChange: (id: number, completed: boolean) => void;
    onSubmit: (id: number) => void;
}

export default function TodoItem({todo, onCompletedChange, onSubmit}: TodoItemProps) {


    return(
        <div className="flex">
            <label className="flex gap-2 grow border rounded-s-md border-gray-400 p-2 bg-white hover:bg-slate-50">
                <input 
                type="checkbox" 
                checked={todo.completed}
                onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
                className="scale-125" 
                />
                <span className={todo.completed ? "line-through text-gray-400": ""}>
                    {todo.title}
                </span>
            </label>
            <button onClick={() => onSubmit(todo.id)}
            className="bg-slate-900 w-16 text-white rounded-e-md hover:bg-slate-800">
                Delete
            </button>
        </div>
    )
}