interface Todo {
  title: string;
  description: string;
  state: 'done' | 'created' | 'inprogress';
  createdAt: string;
  activeDate: string;
}