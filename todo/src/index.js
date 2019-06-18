import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<App />, document.getElementById('root'));

// step 1 - only one state - todos arrays

// step 2 - action types
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

// STEP 3: BUILD ONE REDUCER PER STATE SLICE
function todosReducer (state = {todos: []}, action) {
  switch (action.type) {
    case (ADD_TODO):
      return [...state.todos, action.payload]; 
    case (TOGGLE_COMPLETED):
      return state.todos.map(todo => {
        if (todo.value === action.payload) {
          return {...todo, completed: true}
        }
        return todo;
      });
    default:
      return state;
  }
}
