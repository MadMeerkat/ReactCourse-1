import { TodoAdd } from "../components/TodoAdd";
import { TodoList } from "../components/TodoList";
import { useTodo } from "../hooks/useTodo";

export const TodoApp = () => {
	const {
		handleDeleteTodo,
		handleNewTodo,
		handleToggleTodo,
		todos,
		pendingTodos,
		doneTodos,
	} = useTodo();
	return (
		<>
			<h1>
				Todo App: {doneTodos} <small>Pendientes: {pendingTodos}</small>
			</h1>
			<hr></hr>

			<div className='row'>
				<div className='col-7'>
					<TodoList
						todos={todos}
						removeOnClick={handleDeleteTodo}
						onToggleTodo={handleToggleTodo}
					/>
				</div>

				<div className='col-5'>
					<h4>Agregar Todo</h4>
					<hr />
					<TodoAdd addOnClick={handleNewTodo} />
				</div>
			</div>
		</>
	);
};
