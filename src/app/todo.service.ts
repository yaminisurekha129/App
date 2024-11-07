import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todolist: { task: string; completed: boolean }[] = [];

  addTodo(task: string) {
    this.todolist.push({ task, completed: false });
  }

  deleteTodo(index: number) {
    this.todolist.splice(index, 1);
  }

  toggleComplete(index: number) {
    this.todolist[index].completed = !this.todolist[index].completed;
  }

  getTodos(filter: string) {
    // Returns a new array to avoid direct reference issues
    if (filter === 'completed') {
      return this.todolist.filter(todo => todo.completed).slice();
    } else if (filter === 'pending') {
      return this.todolist.filter(todo => !todo.completed).slice();
    }
    return this.todolist.slice(); // Return a shallow copy of the array
  }
}
