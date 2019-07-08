// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/nradboble/todos/',
	timeout: 3000
});

let _state = {
	todos: [],
	error: {},
}
let _subscribers = {
	todos: [],
	error: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class TodoService {
	console.log<("todo service works")
	get TodoError() 
		return _state.error
	}

addSubscriber(prop, fn) {
	_subscribers[prop].push(fn)
}

getTodos() {
	console.log("Getting the Todo List")
	todoApi.get()
		.then(res => {
			let srvrTodos = res.data.data
			let todos = srvrTodos.map(c => new Todo(c)).reverse()
			setState('todos', todos)
		})
		.catch(err => _setState('error', err.response.data))
}

addTodo(todo) {
	todoApi.post('', todo)
		.then(res => {

			let serverTodo = res.data.data
			let todo = new TodoService(serverTodo)
			let todos = this.Todos
			todos.unshift(todo)
			_setState('todos', todos)
		})
		.catch(err => _setState('error', err.response.data))
}

toggleTodoStatus(todoId) {
	let todo = _state.todos.find(todo => todo._id == todoId)
	if (!todo) return alert('Todo not Todo, that is the question!')



	todoApi.put(todoId, todo)
		.then(res => {
			//DO YOU WANT TO DO ANYTHING WITH THIS?
		})
		.catch(err => _setState('error', err.response.data))
}

removeTodo(todoId) {
	// This one is on you to write.... 
	// The http method is delete at the todoId
}

}
