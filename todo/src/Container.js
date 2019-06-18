import React from 'react';

export default class Container extends React.Component {
	// idRef = React.createRef();

	onTodoClicked = e => {
		// console.log(e.target.id);
		this.props.toggleCompleted(e.target.id);
	};

	onDeleteTodoClicked = e => {
		console.log(e.target.id);
		this.props.deleteTodo(e.target.id);
	};

	render() {
		return (
			<ul>
				{this.props.array.map(todo => (
					<li key={todo.id}>
						<span id={todo.id} onClick={this.onTodoClicked}>
							{todo.value} {todo.completed.toString()}
						</span>
						<button id={todo.id} onClick={this.onDeleteTodoClicked}>
							delete
						</button>
					</li>
				))}
			</ul>
		);
	}
}
