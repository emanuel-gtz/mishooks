// ---Imports---
import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";
import { TodoList } from "../08-useReducer/components/TodoList";
import { TodoAdd } from "../08-useReducer/components/TodoAdd";

// --ReducerTools--
const initialState = [];

const init = () => {
   return JSON.parse(localStorage.getItem('todos')) || []
};

//! ---Codde---
export const useTodo = () => {

   // --reducer--
   const [todos, dispatch] = useReducer(todoReducer, initialState, init);

   useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
   }, [todos])

   // --HandlesTodos--

   const handleNewTodo = (todo) => {

      const action = {
         type: '[TODO] Add Todo',
         payload: todo
      };

      dispatch(action);

   };

   const handleDeleteTodo = (id) => {
      dispatch({
         type: '[TODO] Remove Todo',
         payload: id
      })
   };

   const handleToggleTodo = (id) => {
      dispatch({
         type: '[TODO] Toggle Todo',
         payload: id
      })
   }

   return {
      todos, 
      handleNewTodo, 
      handleDeleteTodo,
      handleToggleTodo,
      handleAllTodos: todos.length,
      pendingTodos: todos.filter(todo => !todo.done).length
   };

};