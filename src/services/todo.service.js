import Todo from "../models/todo.model";

console.log('todo service');

const TODO_LOCAL_STORAGE_KEY = 'TODO_LOCAL_STORAGE_KEY';


class TodoService {
  
  todos = [];
  addTodo(options) {
    this.todos.push(new Todo(options));
  }
  load() {
    this._loadFromLocalStorage();
    return this.todos;
  }

  _loadFromLocalStorage() {
    const stringData = localStorage.getItem(TODO_LOCAL_STORAGE_KEY);
    const todoData = JSON.parse(stringData) || [];
    this.todos = todoData;
  }

  _saveToLocalStorage() {
    localStorage.setItem(TODO_LOCAL_STORAGE_KEY, JSON.stringify(this.todos));
  }

  save() {
    this._saveToLocalStorage();
  }
}

export const todoService = new TodoService();