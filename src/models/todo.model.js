export default class Todo {
  title = '';
  description = '';
  createdAt = (new Date()).toISOString();
  state = 'created';
  id = Math.random().toString(16).substring(2, 10);

  constructor(options) {
    Object.assign(this,  options);
  }
}

