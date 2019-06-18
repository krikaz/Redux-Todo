import React from 'react';

export default class Container extends React.Component {
	// idRef = React.createRef();

	onTodoClicked = (e) => {
		console.log(e.target.id);
		this.props.cb(e.target.id);
	};

	render() {
		return (
			<ul>
				{this.props.array.map(todo => (
					<li key={todo.id} onClick={this.onTodoClicked} id={todo.id} >
						{todo.value} {todo.completed.toString()}
					</li>
				))}
			</ul>
		);
	}
}
