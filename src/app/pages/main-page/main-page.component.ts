import { Component, OnInit } from '@angular/core';
import { TodoInterface, createTodo, initialTodos } from 'src/app/model/model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  todos: TodoInterface[] = [];
  value = '';

  get hasCompletedTodos(): boolean {
    return this.todos.some((todo) => todo.completed);
  }

  constructor() {}

  ngOnInit(): void {
    this.todos = initialTodos;
  }

  addTodo(description: string): void {
    const newTodo = createTodo(description);
    this.todos = [...this.todos, newTodo];
  }

  removeTodo(todoToRemove: TodoInterface): void {
    this.todos = this.todos.filter((todo) => todo.id !== todoToRemove.id);
  }

  markAsCompleted(todoToMark: TodoInterface): void {
    this.todos = this.todos.map((todo) =>
      todo.id === todoToMark.id ? { ...todo, completed: true } : todo
    );
  }

  markAsPending(todoToMark: TodoInterface): void {
    this.todos = this.todos.map((todo) =>
      todo.id === todoToMark.id ? { ...todo, completed: false } : todo
    );
  }

  clearCompleted(): void {
    this.todos = this.todos.filter((todo) => todo.completed === false);
  }

  trackByTodos(_: number, todos: TodoInterface): TodoInterface {
    return todos;
  }
}
