import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

// step 1 - only one state - todos arrays

// step 2 - action types
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

// STEP 3: BUILD ONE REDUCER PER STATE SLICE
function todosReducer(state = { todos: [] }, action) {
	switch (action.type) {
		case ADD_TODO:
			return [...state.todos, action.payload];
		case TOGGLE_COMPLETED:
			return state.todos.map(todo => {
				if (todo.value === action.payload) {
					return { ...todo, completed: true };
				}
				return todo;
			});
		default:
			return state;
	}
}

// STEP 4: COMBINE REDUCERS
const combinedReducer = combineReducers({
	todos: todosReducer,
});

// STEP 5: CREATE THE REDUX STORE
const store = createStore(
	combinedReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// STEP 6: USE THE PROVIDER TO WRAP THE APP PASSING THE STORE AS PROP
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// STEP 7: CREATE ACTION DISPATCHER FUNCTIONS
export function addTodo() {
	return {
		type: ADD_TODO,
	};
}

export function toggleCompleted(value) {
	return {
		type: TOGGLE_COMPLETED,
		payload: value,
	};
}
