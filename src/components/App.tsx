import { useState, useRef, useEffect } from 'react';
import { ITodo } from '../types/data';
import TodoList from './TodoList';
const App: React.FC = () => {
    const [value, setValue] = useState('');
    const [toDos, setTodos] = useState<ITodo[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (inputRef.current) inputRef.current.focus()
    }, []);

    const removeTodo = (id: number): void => { 
        setTodos(toDos.filter(todo => todo.id !== id));
        if (inputRef.current) inputRef.current.focus();
    }
    const toggleTodo = (id: number): void => { 
        setTodos(toDos.map(todo => {
            if (todo.id !== id) return todo;
            return {
                ...todo, 
                complete: !todo.complete
            }
        }))
    }
    const addTodo = () => {
        if (value) {
            setTodos([...toDos, {
                id: Date.now(),
                title: value,
                complete: false
            }]);
            setValue('');
            if (inputRef.current) inputRef.current.focus();
        }
    }
    const handleChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }
    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key==='Enter') addTodo();
    }
    
    return <div>

        <div>
            <input value={value} onKeyDown={handleKeyDown} onChange={handleChange} ref={inputRef} />
            <button onClick={addTodo}>Add</button>
        </div> 
        <TodoList items={toDos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
        </div>
}
    export {App}