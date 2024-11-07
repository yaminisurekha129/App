import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoFormComponent {
  taskInput = "";

  constructor(private ts: TodoService) { }

  addTask() {
    if (this.taskInput.trim()) {
      this.ts.addTodo(this.taskInput);
      this.taskInput = "";
    }
  }

  resetTask() {
    this.taskInput = "";
  }
}
