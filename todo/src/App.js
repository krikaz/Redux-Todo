import React from 'react';
import Container from './Container';
import { connect } from 'react-redux';

// STEP 8: HERE ARE THE NEEDED ACTION DISPATCHERS
import { addTodo, toggleCompleted, deleteTodo } from './index';

const myStorage = window.localStorage;

export class App extends React.Component {
	// STEP 11: WE GET THE SLICES OF STATE FROM PROPS
	// STEP 13: WE GET THE ACTION DISPATCHERS FROM PROPS

	todoRef = React.createRef();

	onAddTodo = () => {
		// console.log(this.todoRef.current.value);
		this.props.addTodo(this.todoRef.current.value);
	};

	SaveList = () => {
		// console.log(this.props.todos);
		myStorage.setItem('state', JSON.stringify(this.props.todos));
	};

	// LoadList = () => {
	//   const loaded = myStorage.getItem('state');
	//   this.props.todos = JSON.parse(loaded);
	// }

	// componentDidMount() {
	//   this.LoadList();
	// }

	render() {
		// console.log(this.props.todos);
		// console.log(this.todoRef.current.value);
		return (
			<div>
				<h3>My Todos List:</h3>
				<Container
					array={this.props.todos}
					toggleCompleted={this.props.toggleCompleted}
					deleteTodo={this.props.deleteTodo}
				/>
				<div>
					<input type="text" placeholder="add todo" ref={this.todoRef} />
					<button onClick={this.onAddTodo}>Add Todo</button>
				</div>

				<button onClick={this.SaveList}>Save</button>
			</div>
		);
	}
}

//STEP 9: CREATE MAP STATE TO PROPS FUNCTION
function mapStateToProps(state) {
	return {
		todos: state.todos,
	};
}

export default connect(
	// STEP 10: CONNECT THE COMPONENT PASSING MAP STATE TO PROPS AS 1ST ARG
	mapStateToProps,
	// STEP 12: INJECT THE ACTION DISPATCHERS AS 2ND ARG TO CONNECT
	{ addTodo, toggleCompleted, deleteTodo }
)(App);
