import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import uuid from 'uuid';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

// step 1 - only one state - todos arrays

// step 2 - action types
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const DELETE_TODO = 'DELETE_TODO';

// const testData = [
// 	{
// 		id: uuid(),
// 		value: 'finish main goal',
// 		completed: false,
// 	},
// ];

const myStorage = window.localStorage;

const loadState = () => {
	const loaded = JSON.parse(myStorage.getItem('state'));
	// console.log(loaded);
	if (loaded === null) {
		return [];
	} else {
		return loaded;
	}
};

// STEP 3: BUILD ONE REDUCER PER STATE SLICE
function todosReducer(state = loadState(), action) {
	switch (action.type) {
		case ADD_TODO:
			return [...state, action.payload];
		case TOGGLE_COMPLETED:
			return state.map(todo => {
				if (todo.id === action.payload) {
					return { ...todo, completed: !todo.completed };
				}
				return todo;
			});
		case DELETE_TODO:
			return state.filter(todo => todo.id !== action.payload);
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
export function addTodo(todo) {
	return {
		type: ADD_TODO,
		payload: { id: uuid(), value: todo, completed: false },
	};
}

export function toggleCompleted(id) {
	return {
		type: TOGGLE_COMPLETED,
		payload: id,
	};
}

export function deleteTodo(id) {
	return {
		type: DELETE_TODO,
		payload: id,
	};
}
