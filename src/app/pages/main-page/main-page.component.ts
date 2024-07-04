import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoInterface, createTodo, initialTodos } from 'src/app/model/model';
import { TodosPageActions } from '../state';

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

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(TodosPageActions.init());
  }

  addTodo(description: string): void {
    const newTodo = createTodo(description);
    this.store.dispatch(TodosPageActions.addTodo({ todo: newTodo }));
  }

  removeTodo(todoToRemove: TodoInterface): void {
    this.store.dispatch(TodosPageActions.removeTodo({ todo: todoToRemove }));
  }

  markAsCompleted(todoToMark: TodoInterface): void {
    this.store.dispatch(TodosPageActions.markAsCompleted({ todo: todoToMark }));
  }

  markAsPending(todoToMark: TodoInterface): void {
    this.store.dispatch(TodosPageActions.markAsPending({ todo: todoToMark }));
  }

  clearCompleted(): void {
    this.store.dispatch(TodosPageActions.clearCompleted());
  }

  trackByTodos(_: number, todos: TodoInterface): TodoInterface {
    return todos;
  }
}
