import { findIndex, get } from "lodash";
import Todo from "../models/todo.model";

console.log('TODO SERVICE');
const TODO_LOCAL_STORAGE_KEY = 'TODO_LOCAL_STORAGE_KEY';
class TodoService extends EventTarget {
  todos = {};
  addTodo(options) {
    this.todos.push(new Todo(options));
  }
  load() {
    this._loadFromLocalStorage();
    return this.todos;
    }
  _loadFromLocalStorage() {
    const stringData = localStorage.getItem(TODO_LOCAL_STORAGE_KEY);
    const todoData = JSON.parse(stringData) || {};
    this.todos = todoData;
  }
  _saveToLocalStorage() {
    localStorage.setItem(TODO_LOCAL_STORAGE_KEY, JSON.stringify(this.todos));
  }
  save() {
    this._saveToLocalStorage();
  }
  deleteTodo({ year, month, day }, todo) {
    const dayTodos = Array.from(get(this.todos, [year, month, day], []));
    const todoIndex = findIndex(dayTodos, {id: todo.id});
    dayTodos.splice(todoIndex, 1);
    this.todos = {
      ...this.todos,
      [year]: {
        ...get(this.todos, [year], {}),
        [month]: {
          ...get(this.todos, [year, month], {}),
          [day]: dayTodos,
        }
      }
    }
    console.log(this.todos);
    this.save();
    this.dispatchEvent(new CustomEvent('update', { detail: this.todos }));
  }
  upsertTodo({ year, month, day }, todo) {
    const dayTodos = Array.from(get(this.todos, [year, month, day], []));
    const todoIndex = findIndex(dayTodos, {id: todo.id});
    if (todoIndex > -1) {
      dayTodos[todoIndex] = todo;
    } else {
      dayTodos.push(todo);
    }
    this.todos = {
      ...this.todos,
      [year]: {
        ...get(this.todos, [year], {}),
        [month]: {
          ...get(this.todos, [year, month], {}),
          [day]: dayTodos,
        }
      }
    }
    
    this.save();
    this.dispatchEvent(new CustomEvent('update', { detail: this.todos }));
  }
}
export const todoService = new TodoService();