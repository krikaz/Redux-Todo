import React from 'react';

export default function Container({ array }) {
	return (
		<ul>
			{array.map(todo => (
				<li key={todo.id}>
					{todo.value} {todo.completed.toString()}
				</li>
			))}
		</ul>
	);
}
