import React from 'react';

export default function Container({ array }) {
	return (
		<div>
			{array.map(todo => (
				<div>
					{todo.value} {todo.completed}
				</div>
			))}
		</div>
	);
}
