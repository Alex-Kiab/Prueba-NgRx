import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodosState, todosStateFeatureKey } from './main-page.reducer';

const todosState = createFeatureSelector<TodosState>(todosStateFeatureKey);

// Obtenemos el Array de tareas
export const todos = createSelector(
  todosState,
  (todosState) => todosState.todos
);

export const hasCompletedTodos = createSelector(todos, (todos) =>
  todos.some((todo) => todo.completed)
);
