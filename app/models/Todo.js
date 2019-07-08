export default class Todo {
  constructor(data) {
    this._id = data._id
    this.completed = data.completed
    this.username = data.username
    this.description = data.description
  }

  get TodoTemplate() {
    return ` 
  }
};