import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodoListComponent implements OnInit {
  todos: { task: string; completed: boolean }[] = [];
  filter: string = 'all';

  constructor(private ts: TodoService) {}

  ngOnInit(): void {
    this.updateTodos();
  }

  updateTodos() {
    this.todos = this.ts.getTodos(this.filter);
  }

  removeTodo(index: number) {
    this.ts.deleteTodo(index);
    this.updateTodos();
  }

  toggleComplete(index: number) {
    // Toggling the task's completion status
    this.ts.toggleComplete(index);
    this.updateTodos();
  }

  setFilter(newFilter: string) {
    this.filter = newFilter;
    this.updateTodos(); // Fetch filtered list
  }
}
