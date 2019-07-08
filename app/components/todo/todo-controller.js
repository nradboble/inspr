import TodoService from "./todo-service.js";

const _todoService = new TodoService()
let todos = _todoService.Todos

function _drawTodos() {
	template = ''
	todos.forEach(todo => {
		let todos = _todoService.Cars
	})
	document.querySelector(#todo).innerHtml = todo.template
}

/document.querySelector('#todo-error').textContent = `${_todoService.TodoError.message}`
}


export default class TodoController {
	constructor() {
		console.log("todo cnt works")
		_todoService.addSubscriber('todos', _drawTodos)
		_todoService.getTodos()
		// Don't forget to add your subscriber
	}

	addTodo(e) {
		e.preventDefault()
		let form = e.target

		let newTodo = {
			_id: { type: String, required: true, unique: true }
    completed: { type: Boolean, required: true, default: false },
			user: { type: String, required: true },
			//You will need to provide a description
			description: { type: String, required: true },


		}

		_todoService.addTodo(todo)
	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		_todoService.toggleTodoStatus(todoId)
	}

	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		_todoService.removeTodo(todoId)
	}



}
