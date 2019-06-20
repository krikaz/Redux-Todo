import React from 'react';
import styled from 'styled-components';

const StyledListItem = styled.li`
	width: 50%;
	padding: 0.5rem;

	display: flex;
	justify-content: space-between;
`;

const StyledSpan = styled.span`
	text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
`;

export default class Container extends React.Component {
	onTodoClicked = e => {
		// console.log(e.target.id);
		this.props.toggleCompleted(e.target.id);
	};

	onDeleteTodoClicked = e => {
		// console.log(e.target.id);
		this.props.deleteTodo(e.target.id);
	};

	render() {
		return (
			<ul>
				{this.props.array.map(todo => (
					<StyledListItem key={todo.id}>
						<StyledSpan
							id={todo.id}
							onClick={this.onTodoClicked}
							completed={todo.completed}>
							{todo.value}
						</StyledSpan>
						{/* <span>{todo.completed.toString()}</span> */}
						<button id={todo.id} onClick={this.onDeleteTodoClicked}>
							delete
						</button>
					</StyledListItem>
				))}
			</ul>
		);
	}
}
