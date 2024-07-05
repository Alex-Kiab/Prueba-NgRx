import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoInterface, createTodo, initialTodos } from 'src/app/model/model';
import { TodosPageActions } from '../state';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    this.todos = initialTodos;
  }

  addTodo(description: string): void {
    const newTodo = createTodo(description);
    this.store.dispatch(TodosPageActions.addTodo({ todo: newTodo }));
    this.todos = [...this.todos, newTodo];
  }

  removeTodo(todoToRemove: TodoInterface): void {
    this.store.dispatch(TodosPageActions.removeTodo({ todo: todoToRemove }));
    this.todos = this.todos.filter((todo) => todo.id !== todoToRemove.id);
  }

  markAsCompleted(todoToMark: TodoInterface): void {
    this.store.dispatch(TodosPageActions.markAsCompleted({ todo: todoToMark }));
    this.todos = this.todos.map((todo) =>
      todo.id === todoToMark.id ? { ...todo, completed: true } : todo
    );
  }

  markAsPending(todoToMark: TodoInterface): void {
    this.store.dispatch(TodosPageActions.markAsPending({ todo: todoToMark }));
    this.todos = this.todos.map((todo) =>
      todo.id === todoToMark.id ? { ...todo, completed: false } : todo
    );
  }

  clearCompleted(): void {
    this.store.dispatch(TodosPageActions.clearCompleted());
    this.todos = this.todos.filter((todo) => todo.completed === false);
  }

  trackByTodos(_: number, todos: TodoInterface): TodoInterface {
    return todos;
  }
}
