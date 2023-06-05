import { TodoCount} from "../todos/TodoCount/Index";
import { TodoSearch } from "../todos/TodoSearch/Index";
import { TodoList } from "../todos/TodoList/Index";
import { TodoItem } from "../todos/TodoItem/Index";
import { CreateTodoButton } from "../todos/TodoButton/Index";
import { TodosLoading } from "../todos/TodosLoading/Index";
import { TodosError } from "../todos/TodosError/Index";
import { EmptyTodos } from "../todos/EmptyTodos/Index";
import { TodoContext } from "../TodoContext/Index";
import { TodoForm } from "../todos/TodoForm/Index";
import { Modal } from "../Modal/Index";
import React from "react";

function AppUI() {
  const {
    loading, error, searchedTodos, completeTodo, deleteTodo, openModal
  } = React.useContext(TodoContext);
    return (
      <>
        <TodoCount/>
        <TodoSearch/>
        <TodoList>
          {loading && (<><TodosLoading/><TodosLoading/><TodosLoading/></>)}
          {error && <TodosError/>}
          {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}
          {searchedTodos.map(todo => (
            <TodoItem 
              key={todo.text} text={todo.text} 
              completed={todo.completed} onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        <CreateTodoButton/>
        {openModal && (
          <Modal>
            <TodoForm/>
          </Modal>
        )}
      </>
    );
}

export {AppUI};