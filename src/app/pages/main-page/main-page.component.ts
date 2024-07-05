import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoInterface, createTodo, initialTodos } from 'src/app/model/model';
import { TodosPageActions, TodosSelectors } from '../state';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit {
  todos$: Observable<TodoInterface[]> = this.store.select(TodosSelectors.todos);
  value = '';

  hasCompletedTodos$: Observable<boolean> = this.store.select(
    TodosSelectors.hasCompletedTodos
  );

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
