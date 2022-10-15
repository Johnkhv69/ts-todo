import React from 'react'
import TodoItem from './TodoItem'
import { ITodo } from '../types/data'

interface ITodoListProps {//type  ITodoListProps = { или можно так через тип 
  items: ITodo[];
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}
const TodoList: React.FC<ITodoListProps> = (props) => {
  const { items, removeTodo, toggleTodo } = props;
  return (
    <div>
      {items.map(todo => <TodoItem
        key={todo.id} {...todo}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo} />)}
    </div>
  )
}

export default TodoList