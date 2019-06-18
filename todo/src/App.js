import React from 'react';
import Container from './Container';
import { connect } from 'react-redux';

// STEP 8: HERE ARE THE NEEDED ACTION DISPATCHERS
import { addTodo, toggleCompleted } from './index';

export class App extends React.Component {
	// STEP 11: WE GET THE SLICES OF STATE FROM PROPS
	// STEP 13: WE GET THE ACTION DISPATCHERS FROM PROPS

	todoRef = React.createRef();

	onAddTodo = () => {
		console.log(this.todoRef.current.value);
		this.props.addTodo(this.todoRef.current.value);
	};

	render() {
		console.log(this.props.todos);
		// console.log(this.todoRef.current.value);
		return (
			<div>
				<h3>My Todos List:</h3>
				<div>
					<Container array={this.props.todos} />
				</div>
				<div>
					<input type="text" placeholder="add todo" ref={this.todoRef} />
					<button onClick={this.onAddTodo}>Add Todo</button>
				</div>
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
	{ addTodo, toggleCompleted }
)(App);